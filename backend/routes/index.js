var express = require('express');
var router = express.Router();
const knex =require('knex')(require('../knexfile.js')['development']);

router.get('/', (req, res) => {
  res.send('Hello World!')
})

router.get('/quotes', (req, res, next) => {
  console.log('GET all quotes started')
  knex.select('*')
    .from("quotes")
    .then(data => res.status(200).send(data))
})
router.get('/created', (req, res) => {
  console.log("GET created quotes started")
  knex.select('id','quote', 'author')
    .from('quotes')
    .where({user_created: true})
    .then(data => res.status(200).send(data))
    .catch(err => console.log(err))
})
router.post('/new-quote', (req, res) => {
  knex('quotes')
    .insert(req.body)
    .then(data => res.status(200).send('Quote created'))
    .catch(err => console.log(err))
})

router.delete('/', (req, res) => {
  knex('quotes')
    .where({
      id: req.body.id,
      user_created: true
    })
    .del()
    .then(()=> res.status(200).send("Quote deleted"))
    .catch(err => console.log(err))
})



module.exports = router;