const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const nome = req.body.nome;
  const cpf = req.body.cpf;
  const position = req.body.position;
  const adress = req.body.adress;
  const email = req.body.email;

  const newUser = new User({nome, cpf, position, adress, email});

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;