const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// Get all the movies from DB
router.get('/', (req, res) => {
    const queryText = 'SELECT * FROM "movies";'
    console.log('in fave router.get', req.body)
    pool.query(queryText)
    .then( result => {
      console.log(result.rows)
        res.send(result.rows)
    }).catch( error => {
        console.log('error in saga GET', error)
        res.sendStatus(500);
    })
  })

module.exports = router;