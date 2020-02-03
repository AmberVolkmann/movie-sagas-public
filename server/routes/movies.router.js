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

//   router.get(`/genre/${id}`, (req, res) => {
//     console.log('in get genres', req.query.id)
//     const queryText = `SELECT "movies".title, "genres".name
//     FROM  "movies"
//     JOIN "movies_genres" ON movies.id = "movies_genres".title_id
//     JOIN "genres" ON "movies_genres".id = "movies_genres".name_id
//     WHERE movies.id = $1;`;
//     console.log('in genre router.get', req.body)
//     pool.query(queryText, [req.query.id])
//     .then( result => {
//       console.log(result.rows)
//         res.send(result.rows)
//     }).catch( error => {
//         console.log('error in genre GET ID ', error)
//         res.sendStatus(500);
//     })
//   })

module.exports = router;