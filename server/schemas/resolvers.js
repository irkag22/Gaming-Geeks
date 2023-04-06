const { AuthenticationError } = require('apollo-server-express');
const { User, Post } = require('../models'); // User, Post, Game
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('posts');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('posts');
    },
    posts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Post.find(params).sort({ createdAt: -1 });
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },

    addPost: async (parent, { postText, postGamer }) => {

      const post = await Post.create({ postText, postGamer });
      await User.findOneAndUpdate(
        { _id: postGamer },
        { $addToSet: { posts: post._id } }
      );

      return post;
    },
    removePost: async (parent, { postId }, context) => {
      if (!context.user) return null;
      console.log('USER', context.user);
      const post = await Post.findOneAndDelete({
        _id: postId,
        postGamer: context.user._id,
      });

      await User.findOneAndUpdate(
        { _id: context.user._id },
        { $pull: { posts: post._id } }
      );

      return post;
    },
  },
}

module.exports = resolvers;