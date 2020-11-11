const router = require('express').Router();
let Product = require('../models/product.model');

router.route('/').get((req, res) => {
    Product.find()
    .then(products => res.json(products))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const nome = req.body.nome;
  const description = req.body.description;
  const quantity = req.body.quantity;
  const category = req.body.category
  

  const newProduct = new Product({nome, description, quantity, category});
  
  newProduct.save()
    .then(() => res.json('Product added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Product.findById(req.params.id)
  .then(product => res.json(product))
  .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/:id').put((req, res) => {
  var query = {
    'nome': req.body.nome,
    'description': req.body.description,
    'category': req.body.category
  }
  Product.findByIdAndUpdate(req.params.id, query)
    .then(product => {res.json(product)})
    .catch(err => res.status(400).json('Error: '+ err))
})

router.route(':/id').delete((req, res) => {
  Product.findByIdAndDelete(req.params.id)
    .then(product => {res.json(product)})
    .catch(err => res.status(400).json('Error: '+ err))
})

module.exports = router;