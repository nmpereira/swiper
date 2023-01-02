const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  userid: {
    type: String,
    required: true,
  },
  otherUser: {
    type: String,
    required: true,
  },
  primary: {
    type: Boolean,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  messaggeId: {
    type: String,
    required: true,
    unique: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Chats", chatSchema);
