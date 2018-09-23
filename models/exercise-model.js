var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// Keep track of the name and the body part affected.
var exerciseSchema = new Schema(
  {
    exerciseName: {type: String},
    exerciseBodyPart: {type: String}
  }
);

module.exports = mongoose.model('Exercise', exerciseSchema);
