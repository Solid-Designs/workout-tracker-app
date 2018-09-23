var mongoose = require('mongoose');
var Exercise = require('../models/exercise-model.js');

exports.renderCreatePage = function(req, res){
  res.render('create');
};

exports.createExercise = function(req, res){
  // Create exercise object
  var exercise = new Exercise(
    {
      exerciseName: req.body.exerciseName,
      exerciseBodyPart: req.body.exerciseBodyPart
    }
  );
  // Save exercise to database
  exercise.save();

  // Render the created exercise page with new exercise data
  res.render('created-exercise',
  {
    exerciseName: req.body.exerciseName,
    exerciseBodyPart: req.body.exerciseBodyPart
  });
}

exports.findExercises = function(req, res){
  Exercise.find({exerciseBodyPart: req.body.exerciseBodyPart}, 'exerciseName',
    function(err, results){
      if(err){
        console.log(err);
      }else{
        res.render('search-results', {exerciseName: results});
        console.log(results);
      }
    });
};
