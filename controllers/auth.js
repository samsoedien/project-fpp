const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/User');

exports.testAuth = (req, res, next) => res.json({ message: 'Auth Works' });

exports.registerUser = (req, res, next) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  if (!isValid) {
    return res.status(422).json(errors);
  }
  User
    .findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        errors.email = 'Email already exists';
        return res.status(400).json(errors);
      }
      const avatar = gravatar.url(req.body.email, {
        s: '200', // Size
        r: 'pg', // Rating
        d: 'mm', // Default
      });
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        avatar,
        password: req.body.password,
      });

      bcrypt.genSalt(12, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          return newUser.save()
        })
          .then(result => {
            res.status(201).json({
              message: 'User registered!',
              userId: result._id
            });
          })
          .catch(err => console.log(err));
      });
    });
};

exports.loginUser = (req, res, next) => {

};

//FIXME: Modified: removed else statement in register NOT TESTED YET!!!!