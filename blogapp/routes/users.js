var express = require('express');
var router = express.Router();

const environment = process.env.NODE_ENV || "development";
const knexConfig = require("./knexfile.js")[environment];
const knex = require("knex")(knexConfig);

const bcrypt = require('bcrypt-as-promised')

/* Get users listing */

router.get('/', function(req, res, next){
  knex('users')
  .then(function(users){
    res.render('users', {
      users
    });
  })
});

//single user

router.get('/:id', function(req, res, next){
  knex('users')
    .where('id', req.params.id)
    .first()
    .then(function(user){
      knex('posts')
        .orderBy('id')
        .where('user_id', req.params.id)
        .then(function(posts){
          res.render('user',{
            user,
            posts
          })
        })
    })
})


module.exports = router;
