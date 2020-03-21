const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const documentSchema = new Schema({
  content: String,
  title: String,
  date: Date,
  userId: String
});

module.exports = mongoose.model("Document", documentSchema);
