const User = require('../models').user;
const Trails = require('../models').trails;
const bcrypt = require('bcryptjs');
require('dotenv').config();
const jwt = require('jsonwebtoken');

const createUser = (req, res) => {
    bcrypt.genSalt(10, (err, salt) => {
        if(err) {
            return res.send(err);
        }
        bcrypt.hash(req.body.password, salt, (err, hashedPwd) => {
            if(err) {
                return res.send(err);
            }

            req.body.password = hashedPwd;
            console.log("THIS WAS THE REQ>BODY");
            User.create(req.body)
            .then(newUser => {
                const token = jwt.sign (
                    {
                        id: newUser.id,
                        name:  newUser.name
                    },
                    process.env.JWT_SECRET,
                    {
                        expiresIn: "10 days"
                    }
                );
                res.status(200).json({
                    "token" : token,
                    "user" : newUser
                })
            })
            .catch(err => {
                console.log("ERROR CREATE USER!!!!!!!!!", err)
                res.status(400).send(`ERROR: ${err}`);
            })
        })
    })
}

const verifyUser = (req, res) => {
    User.findByPk(req.user.id, {
        attributes: ['id', 'name', 'updatedAt', 'email', 'password', 'location', 'img', 'bio']
    })
    .then(foundUser => {
        res.status(200).json(foundUser);
    })
    .catch(err => {
        res.status(400).send(`ERROR: ${err}`);
    })
}

const login =(req, res) => {
    User.findOne({
        where: {
            name: req.body.name
        }
    })
    .then(foundUser => {
        if(foundUser) {
            bcrypt.compare(req.body.password, foundUser.password, (err,match) => {
                if(match) {
                    const token = jwt.sign (
                        {
                            name: foundUser.name,
                            id: foundUser.id
                        },
                        process.env.JWT_SECRET,
                        {
                            expiresIn: "10 days"
                        }
                    )
                    res.status(200).json({
                        "token" : token,
                        "user" : foundUser
                    });
                }
                else 
                {
                  res.send({message:'Error: Incorrect Username or Password'}).status(500); 
                }
            })
        }
        else 
        {
            res.send({message:'Error: Incorrect Username or Password'}).status(500); 
        }
    })
    .catch(err => {
        res.send({message: 'Error: Incorrect Username or Password'}).status(500);
    })
}

module.exports = {
    createUser,
    verifyUser,
    login
}