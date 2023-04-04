const { User, Post, Comment, Game } = require('../models');

const resolvers = {
  Query: {
    users: async () => {
      return await User.find({}).populate('posts');
    }
    }
};

module.exports = resolvers;
