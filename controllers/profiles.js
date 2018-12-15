const mongoose = require('mongoose');

const Profile = require('../models/Profile');
const User = require('../models/User');

const validateProfileInput = require('../validation/profile');
const validateExperienceInput = require('../validation/experience');


exports.testProfiles = (req, res, next) => res.json({ message: 'Profiles Works' });

exports.getProfiles = (req, res) => {
  const errors = {};
  Profile.find()
    .populate('user', ['name', 'image', 'moderator'])
    .select('-__v')
    .sort({ date: -1 })
    .exec()
    .then(profiles => {
      if (!profiles) {
        errors.noprofile = 'There are no profiles';
        return res.status(404).json(errors);
      }

      res.json(profiles);
    })
    .catch(err => res.status(404).json({ profile: 'There are no profiles' }));
};

exports.getCurrentProfile = (req, res, ) => {
  const errors = {};
  Profile.findOne({ user: req.user.id })
    .populate('user', ['name', 'image', 'moderator'])
    .select('-__v')
    .exec()
    .then(profile => {
      if (!profile) {
        errors.noprofile = 'There is no profile for this user';
        return res.status(404).json(errors);
      }
      res.json(profile);
    })
    .catch(err => res.status(404).json(err));
};

exports.getProfileByHandle = (req, res, next) => {
  const errors = {};
  Profile.findOne({ handle: req.params.handle })
    .populate('user', ['name', 'image', 'moderator'])
    .then(profile => {
      if (!profile) {
        errors.noprofile = 'There is no profile for this user';
        res.status(404).json(errors);
      }
      res.json(profile);
    })
    .catch(err => res.status(404).json(err));
};

exports.getProfileById = (req, res, next) => {
  const errors = {};

  Profile.findOne({ user: req.params.user_id })
    .populate('user', ['name', 'image', 'moderator'])
    .then(profile => {
      if (!profile) {
        errors.noprofile = 'There is no profile for this user';
        res.status(404).json(errors);
      }
      res.json(profile);
    })
    .catch(err => res.status(404).json({ profile: 'There is no profile for this user' }));
};

exports.createOrUpdateProfile = (req, res, next) => {
  const { errors, isValid } = validateProfileInput(req.body);
  if (!isValid) {
    return res.status(422).json(errors);
  }
  const { skills, twitter, facebook, instagram } = req.body;

  const profileFields = {
    ...req.body,
    handle: req.user.name,
    user: req.user.id,
    // skills: skills.split(','),
    social: { twitter, facebook, instagram }
  };

  // // Get fields
  // const profileFields = {};
  // profileFields.user = req.user.id;
  // if (req.body.handle) profileFields.handle = req.body.handle;
  // if (req.body.profession) profileFields.profession = req.body.profession;
  // if (req.body.location) profileFields.location = req.body.location;
  // if (req.body.bio) profileFields.bio = req.body.bio;
  // // Skills - Spilt into array
  // if (typeof req.body.skills !== 'undefined') {
  //   profileFields.skills = req.body.skills.split(',');
  // }

  // // Social
  // profileFields.social = {};
  // if (req.body.twitter) profileFields.social.twitter = req.body.twitter;
  // if (req.body.facebook) profileFields.social.facebook = req.body.facebook;
  // if (req.body.instagram) profileFields.social.instagram = req.body.instagram;

  Profile.findOne({ user: req.user.id }).then(profile => {
    if (profile) {
      Profile.findOneAndUpdate({ user: req.user.id }, { $set: profileFields }, { new: true }).then(
        profile => res.json(profile)
      );
    } else {
      // Profile.findOne({ handle: profileFields.handle }).then(profile => {
      Profile.findOne({ handle: profileFields.handle }).then(profile => {
        if (profile) {
          errors.handle = 'That handle a lready exists';
          res.status(400).json(errors);
        }
        new Profile(profileFields).save().then(profile => res.json(profile));
      });
    }
  });
};

exports.postExperience = (req, res, next) => {
  const { errors, isValid } = validateExperienceInput(req.body);
  if (!isValid) {
    return res.status(422).json(errors);
  }
  Profile.findOne({ user: req.user.id }).then(profile => {
    const newExp = {
      title: req.body.title,
      company: req.body.company,
      location: req.body.location,
      from: req.body.from,
      to: req.body.to,
      current: req.body.current,
      description: req.body.description
    };
    profile.experience.unshift(newExp);
    profile.save().then(result => res.json(result));
  });
};

exports.deleteExperience = (req, res, next) => {
  Profile.findOne({ user: req.user.id })
    .then(profile => {
      // Get remove index
      const removeIndex = profile.experience.map(item => item.id).indexOf(req.params.exp_id);
      // Splice out of array
      profile.experience.splice(removeIndex, 1);
      // Save
      profile.save().then(profile => res.json(profile));
    })
    .catch(err => res.status(404).json(err));
};

exports.deleteProfile = (req, res, next) => {
  Profile.findOneAndRemove({ user: req.user.id }).then(() => {
    User.findOneAndRemove({ _id: req.user.id }).then(() => res.json({ success: true }));
  });
};
