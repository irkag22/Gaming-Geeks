const { Schema, model } = require('mongoose');

const userSchema = new Schema(
{
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Please enter a valid email address'] //Regex to match email with a message for validation
  },
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'post'
    }
  ],
  followers: [
    {
      type: Schema.Types.ObjectId,
      ref: 'user'
    }
  ]
},
{
  toJSON: {
    virtuals: true
  },
  id: false
});

// Create a virtual property `friendCount` that gets the amount of friends associated with a user
userSchema.virtual('followersCount').get(function() {
  return this.friends.length;
});

// Initialize User model
const User = model('user', userSchema);

module.exports = User;