const router = require('express').Router();
let Receivement = require('../models/receivement.model');
let Product = require('../models/product.model')

router.route('/').get((req, res) => {
    Receivement.find()
    .then(receivement => res.json(receivement))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const description = req.body.description;
  const quantity = req.body.quantity;
  const date = req.body.date;
  const user = req.body.user;
  const product = req.body.product;
  const newReceivement = new Receivement({description, quantity, date, user, product});

  newReceivement.save()
    .then(() => res.json('Receivement added!'))
    .catch(err => res.status(400).json('Error: ' + err))
    
})

router.route('/:id').get((req, res) => {
  Receivement.findById(req.params.id)
  .then(receivement => res.json(receivement))
  .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router;