const { Schema, model } = require('mongoose');
const commentSchema = require('./Comment');

const postSchema = new Schema(
{
  postText: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 800
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (date) => date.toLocaleString()
  },
  postGamer: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  game: {
    type: Schema.Types.ObjectId,
    ref: 'game'
  },
  comments: [commentSchema]
},
{
  toJSON: {
    virtuals: true,
    getters: true
  }
});

postSchema.virtual('commentCount').get(function() {
  return this.comments.length;
});

const Post = model('post', postSchema);

module.exports = Post;