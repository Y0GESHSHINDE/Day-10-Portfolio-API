const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  tags: [String],
  githubLink: { type: String },
  liveLink: { type: String }
}, {
  timestamps: true
});

module.exports = mongoose.model('Portfolio', portfolioSchema);
