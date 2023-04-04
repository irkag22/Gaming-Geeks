const { Schema, model } = require('mongoose');

const gameSchema = new Schema(
{
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'post'
    }
  ]
});

const Game = model('game', gameSchema);

module.exports = Game;