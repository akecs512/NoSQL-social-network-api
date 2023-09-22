const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/users/:thoughtId
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);


// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reaction').post(createReaction);

// // /api/thoughts/:thoughtId/reaction/:responseId
// router.route('/:thoughtID/reaction/:responseId').delete(removeThoughtReaction);

module.exports = router;
