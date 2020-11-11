const router = require('express').Router();
let Category = require('../models/category.model');

router.route('/').get((req, res) => {
  Category.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const nome = req.body.nome;
  const description = req.body.description;
  

  const newCategory = new Category({nome, description});

  newCategory.save()
    .then(() => res.json('Category added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Category.findById(req.params.id)
  .then(category => res.json(category))
  .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router;