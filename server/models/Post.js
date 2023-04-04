const { Schema, model } = require('mongoose');
const commentSchema = require('./Comment');

const postSchema = new Schema(
{
  postText: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 300
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (date) => date.toLocaleString()
  },
  username: {
    type: String,
    required: true
  },
  comments: [commentSchema]
},
{
  toJSON: {
    virtuals: true,
    getters: true
  },
  id: false
});

thoughtSchema.virtual('commentCount').get(function() {
  return this.comments.length;
});


const Post = model('post', postSchema);

module.exports = Post;