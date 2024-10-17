const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  teacher: {
    type: Boolean,
    required: true,
  },
  points: {
    type: Number,
    required: true,
  },
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;