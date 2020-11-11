const { Int32 } = require('mongodb');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
  nome: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },
  description: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },
  quantity: {
    type: Number,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  }
}, {
  timestamps: true,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;