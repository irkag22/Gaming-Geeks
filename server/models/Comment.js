const { Schema, Types } = require('mongoose');

const commentSchema = new Schema(
  {
    commentId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    commentText: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 400
    },
    commentGamer: {
      type: Schema.Types.ObjectId,
      ref: 'user'
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (date) => date.toLocaleString()
    }
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = commentSchema;