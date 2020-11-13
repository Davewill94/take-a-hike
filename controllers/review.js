const Review = require('../models').review;
const User = require('../models').user;
const Trails = require('../models').trails;


const getAllReviews = (req,res) => {
    Review.findAll()
    .then(reviews => {
        res.status(200).send(reviews);
    })
    .catch((err) => {
        res.status(500).send("Request, Failed")
    })
}

const deleteReview =(req, res) => {
    Review.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(() => {
        res.status(200).send(`Review deleted`)
    })
    .catch(err => {
        res.status(200).send(`ERROR: ${err}`)
    })
}

const postReview = (req,res) => {
    Review.create(req.body)
    .then(() => {
        res.status(200).send('Review Created')
    })
    .catch(err => {
        res.status(500).send(`ERROR in creating review: ${err}`)
    })
}

module.exports = {
    getAllReviews,
    deleteReview,
    postReview
}