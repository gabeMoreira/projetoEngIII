const { Int32 } = require('mongodb');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const receivementSchema = new Schema({
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
  date: {
    type: Date,
    required: true,
    trim: true,
  },
  user: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },
  product: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  }
}, {
  timestamps: true,
});

const Receivement = mongoose.model('Receivement', receivementSchema);

module.exports = Receivement;