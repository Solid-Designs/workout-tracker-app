var express = require('express');
var router = express.Router();
var controller = require('../controllers/exercise-controller.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/search-results', controller.findExercises);

// Create the new exercise
router.get('/create', controller.renderCreatePage);

// Dynamically post the created exercise on the page as confirmation
router.post('/created-exercise', controller.createExercise);

module.exports = router;
