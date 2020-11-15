const review = require('./review');

const Trail = require('../models').trails;
const User = require('../models').user;
const Review = require('../models').review;

const GetTrails = (req, res) => {
    Trail.findAll()
    .then(trail => {
        res.status(200).send(trail)
    })
    .catch((err) => {
        res.send(err)
        res.send("Request, Failed")
    })
}

const GetTrail = (req, res) => {
    Trail.findOne({
        where: {trail_id: req.params.index}
    })
    .then(trail => {
        Review.findAll({
            where: {trailId: trail.id},
            include: [{
                model: User,
                attributes:['name']
            }],
            order: [['createdAt', "DESC"]]
        })
        .then(reviews => {
            console.log("Finished Request")
                    let reviewArray = [...reviews];
                    let response = {...trail, reviewArray};
                    res.status(200).send(response)
        })


        res.status(200).send(trail)
    })
    .catch((err) => {
        res.status(500).send(err)
    })
    // Trail.findByPk(req.params.index)
    // .then(foundTrail => {
    //     Review.findAll({
    //         where: {trailId: foundTrail.id},
    //         include: [{
    //             model: User,
    //             attributes:['name']
    //         }],
    //         order: [['createdAt', "DESC"]]
    //     })
    //     .then(reviews => {
    //         console.log("Finished Request")
    //         let reviewArray = [...reviews];
    //         let response = {...foundTrail, reviewArray};
    //         res.status(200).send(response)
    //     })
    //     .catch((err) => {
    //         res.send(err)
    //         res.send("Request, Failed")
    //     })
    // })
}

const bulkTrailPost = (req, res) => {
    // console.log(req.body)
    // Trail.findAll()
    // .then(trails => {
    //     console.log("made it to filter")
    //     let newbulk = req.body.filter(function(trail) {
    //         return !trails.includes(trail)
    //     })
    //     console.log(newbulk);
    //     //     newbulk.forEach((trail) => {
    //     //     Trail.create(trail)
    //     //     .then(()=> {
    //     //         res.status(200).send("Trail Created");
    //     //     })
    //     //     .catch(err => {
    //     //         res.status(400).send(`ERROR: ${err}`);
    //     //     })
    //     // })

    // })
    // .catch((err) => {
    //     res.status(400).send(`ERROR: ${err}`)
    // })



    req.body.forEach((trail) => {
        Trail.create(trail)
        .then(()=> {
            res.status(200).send("Trail Created");
        })
        .catch(err => {
            res.status(400).send(`ERROR: ${err}`);
        })
    })
}

module.exports = {
    GetTrails,
    GetTrail,
    bulkTrailPost
}