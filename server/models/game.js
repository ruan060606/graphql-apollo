const mongoose = require('mongoose');

const { Schema } = mongoose;

const gameSchema = new Schema({
  name: String,
  genre: String,
  creatorid: String,
});

module.exports = mongoose.model('Game', gameSchema);
