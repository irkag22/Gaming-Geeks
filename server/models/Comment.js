const { Schema, Types } = require('mongoose');

const commentSchema = new Schema(
  {
    commentId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    commentBody: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 400
    },
    username: {
      type: String,
      required: true
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