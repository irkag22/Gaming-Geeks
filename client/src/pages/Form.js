import { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import React from 'react';
import { QUERY_POSTS } from '../utils/queries';
import { ADD_POST, UPDATE_POST, REMOVE_POST } from '../utils/mutations';

export default function ChatForm() {
  const [gameText, setGameText] = useState('');
  const { loading, data } = useQuery(QUERY_POSTS);
  const [addPost, { error: postError }] = useMutation(ADD_POST);
  const [removePost, { error: removePostError }] = useMutation(REMOVE_POST);
  const [updatePost, { error: updatePostError }] = useMutation(UPDATE_POST);

  const posts = data?.posts || [];

  function userInput(event) {
    setGameText(event.target.value);
  }

  async function inputHandle(event) {
    event.preventDefault();
    console.log(gameText);
    try {
      const { data } = await addPost({
        variables: { postText: gameText },
        refetchQueries: [{ query: QUERY_POSTS }],
      });
      console.log(data);
      setGameText('');
    } catch (error) {
      console.log('error');
    }
  }

  async function deleteHandle(postId) {
    try {
      const { data } = await removePost({
        variables: { postId },
        refetchQueries: [{ query: QUERY_POSTS }],
      });
      // console.log(data);
    } catch (error) {
      console.log('error');
    }
  }

  async function updateHandle(postId) {
    try {
      const { data } = await updatePost({
        variables: { postId },
        refetchQueries: [{ query: QUERY_POSTS }],
      })
    } catch (error) {
      console.log('error')
    }
  }

  return (
    <div>

      {/* Chat entries to display on page */}
      <div className="flex-row justify-center">
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <>
              <h2>Chat entries:</h2>
              {posts.map((post) => (
                <div key={post._id}>
                  <p>{post.postGamer} says:</p>
                  <p>{post.postText}</p>
                  <p>Posted on: {post.createdAt}</p>
                  {/* Need functionality to edit and delete post: */}
                  <div>
                    <button onClick={() => updateHandle(post._id)}>Edit</button>
                  </div>
                  <div>
                    <button onClick={() => deleteHandle(post._id)}>Delete</button>
                  </div>
                  <hr />
                </div>
              ))}
            </>
          )}
        </div>
      </div>

      {/* Form to submit cht entries */}
      <form>
        <label htmlFor="message">Chat:</label>
        <br />
        <input
          onChange={userInput}
          type="text"
          id="message"
          name="message"
          value={gameText}
        />
        <br />
        <button onClick={inputHandle}>Submit</button>
      </form>

    </div>
  );
}
