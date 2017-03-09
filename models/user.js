const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const s3 = require('../lib/s3');

const userSchema = new mongoose.Schema({
  username: {type: String, required: true},
  email: { type: String },
  password: { type: String, required: true },
  fname: {type: String},
  sname: {type: String},
  // addressLine1: {type: String},
  // addressLine2: {type: String},
  postcode: {type: String},
  image: {type: String},
  lat: {type: Number},
  lng: {type: Number}
});

userSchema
  .virtual('imageSRC')
  .get(function getImageSRC() {
    if(!this.image) return null; // add placeholder image here if need be
    return `https://s3-eu-west-1.amazonaws.com/wdi-25-london-project-02/${this.image}`;
  });

userSchema
  .virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation;
  });

// lifecylce hook - mongoose middleware
userSchema.pre('validate', function checkPassword(next) {
  if(!this.password && !this.githubId) {
    this.invalidate('password', 'required');
  }
  if(this.isModified('password') && this._passwordConfirmation !== this.password) this.invalidate('passwordConfirmation', 'does not match');
  next();
});

userSchema.pre('save', function hashPassword(next) {
  if(this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
  }
  next();
});

userSchema.methods.validatePassword = function validatePassword(password) {
  return bcrypt.compareSync(password, this.password);
};

userSchema.pre('remove', function removeImage(next) {
  s3.deleteObject({ Key: this.image }, next);
});

module.exports = mongoose.model('User', userSchema);
