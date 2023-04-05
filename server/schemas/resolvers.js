const { AuthenticationError } = require('apollo-server-express');
const { User, Post } = require('../models'); // User, Post, Game
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
          return User.find();
        },
        user: async (parent, { username }) => {
          return User.findOne({ username });
        },
        posts: async () => {
          return Post.find();
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
            { username: postGamer },
            { $addToSet: { posts: post._id } }
          );
    
          return post;
        },
        },
};
module.exports = resolvers;