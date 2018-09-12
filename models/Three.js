const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ThreeSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  mesh: {
    type: String,
    isRequired: true,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Three = mongoose.model('Three', ThreeSchema);
