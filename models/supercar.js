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

supercarSchema
  .virtual('imageSRC')
  .get(function getImageSRC() {
    if(!this.carpic) return null;
    if(this.carpic.match(/^http/)) return this.carpic;
    return `https://s3-eu-west-1.amazonaws.com/wdi-25-london-project-02/${this.carpic}`;
  });

module.exports = mongoose.model('Supercar', supercarSchema);
