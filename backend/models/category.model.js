const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const categorySchema = new Schema({
  nome: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },
  description: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  }
}, {
  timestamps: true,
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;