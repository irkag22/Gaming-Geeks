const { AuthenticationError } = require('apollo-server-express');
const { User, Post } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      //return User.find().populate('users');
      return User.find({});
    },
    user: async (parent, args, context) => {
      return User.findById(context.user._id);
    },
    /*
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id);
        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
    */
    /*
    user: async (parent, context) => {

      return User.findOne({username: 'kdog51'}
        //{ _id: context.user._id }
      );

      //return User.findOne({ username }).populate('posts');
      //const params = username ? { username } : {};
      //return User.findOne({username});
      //return User.findOne(params);
    },
    */
    posts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Post.find(params).sort({ createdAt: -1 }).populate('postGamer');
    },
    post: async (parent, { postId }) => {
      return Post.findById(postId);
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password, favorites }) => {
      const user = await User.create({ username, email, password, favorites});
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

    addPost: async (parent, { postText }, context) => {

      const post = await Post.create({ postText, postGamer: context.user._id });
      await User.findOneAndUpdate(
        { _id: context.user._id },
        { $addToSet: { posts: post._id } }
      );

      return post;
    },
    removePost: async (parent, { postId }, context) => {
      if (!context.user) return null;
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
    updatePost: async (parent, { postId, postText }, context) => {
      console.log(postId, postText, context.user);
      if (!context.user) {
        throw new AuthenticationError('Please log in to update your posts');
      }

      const post = await Post.findOneAndUpdate(
        { _id: postId, postGamer: context.user._id },
        { postText },
        { new: true }
      );
      console.log(post);
      if (!post) {
        throw new Error('No post found');
      }

      return post;
    },
    updateUser: async (parent, { favorites }, context) => {

      if (!context.user) {
        throw new AuthenticationError('Please log in to update your favorites');
      }

      const user = await User.findOneAndUpdate(
        { _id: context.user._id },
        { favorites: favorites}
      );

      if (!user) {
        throw new Error('No user found');
      }

      return user;
    }
  },
}

module.exports = resolvers;