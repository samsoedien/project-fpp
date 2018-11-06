const mongoose = require('mongoose');

const Three = require('../models/Three');

const validateThreeInput = require('../validation/three');


exports.testThree = (req, res, next) => res.json({ message: 'Three Routes Works' });

exports.getThree = (req, res, next) => {
  Three.find()
    .sort({ date: -1 })
    .exec()
    .then(scenes => res.status(200).json(scenes))
    .catch(err => res.status(404).json({ noscenesfound: 'No three scenes found' }));
};

exports.getThreeById = (req, res, next) => {
  Three.findById(req.params.id)
    .exec()
    .then(scene => res.json(scene))
    .catch(err => res.status(404).json({ noscenesfound: 'No three scene found with that ID' }));
};

exports.postThree = (req, res, next) => {
  const { errors, isValid } = validateThreeInput(req.body);
  if (!isValid) {
    return res.status(422).json(errors);
  }
  const newThree = new Three({
    _id: new mongoose.Types.ObjectId(),
    scene: req.body.scene
  });
  newThree.save().then(scenes => res.status(201).json(scenes)); // added 201 status
};
