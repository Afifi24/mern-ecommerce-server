
const mongoose = require('mongoose');

const childSchema = mongoose.Schema({
  title: String,
  price: Number,
  oldprice: Number,
  desc: String,
  quantity: Number,
  link: String,
});

module.exports = mongoose.model('childSchema', childSchema);
