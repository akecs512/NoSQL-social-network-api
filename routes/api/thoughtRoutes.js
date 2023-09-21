const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/users/:thoughtId
router.route('/:thoughtId').get(getSingleThought);



 

// // /api/thoughts/:thoughtId/reactions
// router.route('/:thoughtId/reaction').post(addThoughtReaction);

// // /api/thoughts/:thoughtId/reaction/:responseId
// router.route('/:thoughtID/reaction/:responseId').delete(removeThoughtReaction);

module.exports = router;
