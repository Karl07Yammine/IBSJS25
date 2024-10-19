const mongoose = require('mongoose');

const GuessSchema = new mongoose.Schema({
  link: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
  },
  author: {
        type: String,
        required: true,
  },
  answer: {
        type: String,
        required: true,
  },
});

const GuessModel = mongoose.model('Guess', GuessSchema);

module.exports = GuessModel;