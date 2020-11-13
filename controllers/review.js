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

module.exports = {
    getAllReviews
}