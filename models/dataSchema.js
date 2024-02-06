
const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
  title: String,
  price: Number,
  oldprice: Number,
  desc: String,
  quantity: Number,
  link: String,
});

module.exports = mongoose.model('Data', dataSchema);
