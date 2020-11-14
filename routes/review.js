const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/all', ctrl.review.getAllReviews)

router.post('/create', ctrl.review.postReview)
router.put('/:id', ctrl.review.editPost)

router.delete('/:id', ctrl.review.deleteReview)

module.exports = router;