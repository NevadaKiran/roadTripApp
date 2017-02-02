var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

var TripSchema = new Schema({
  name: String,
  begin: String,
  end: String,
  created_at: Date,
  updated_at: Date
})

var UserSchema = new Schema({
  email: String,
  username: String,
  trips: [TripSchema],
  password_digest: String,
  created_at: Date,
  updated_at: Date
});

TripSchema.pre('save', function(next) {
  now = new Date();
  this.updated_at = now;

  if (!this.created_at) { this.created_at = now }
  next()
});

UserSchema.pre('save', function(next) {
  now = new Date();
  this.updated_at = now;

  if (!this.created_at) { this.created_at = now }
  next()
});

var UserModel = mongoose.model('User', UserSchema);
var TripModel = mongoose.model('Trip', TripSchema);

module.exports = {
  User: UserModel,
  Trip: TripModel
}
