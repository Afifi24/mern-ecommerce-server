
const mongoose = require('mongoose');

const newCollectionSchema = mongoose.Schema({
  title: String,
  price: Number,
  oldprice: Number,
  desc: String,
  quantity: Number,
  link: String,
});

module.exports = mongoose.model('newCollectionSchema', newCollectionSchema);
