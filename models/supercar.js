const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  content: { type: String, required: true },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true}
}, {
  timestamps: true
});

commentSchema.methods.ownedBy = function ownedBy(user) {
  return this.createdBy.id === user.id;
};

const supercarSchema = new mongoose.Schema({
  make: { type: String, required: true },
  model: { type: String, required: true },
  carpic: { type: String },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User' , required: true},
  comments: [ commentSchema ]
});

module.exports = mongoose.model('Supercar', supercarSchema);
