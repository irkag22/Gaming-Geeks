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

      {/* Form to submit cht entries */}
      <form className="chat-form">
        <label htmlFor="message"></label>
        <br />
        <input className="chat-input"
        onChange={userInput}
        type="text"
        id="message"
        name="message"
        value={gameText}
        placeholder='Start chatting here...'
        />
        <br />
        <button type="button" aria-selected="true" className="chakra-tabs__tab css-1q32csp btnmargin" onClick={inputHandle}>Submit</button>
      </form>

      {/* Chat entries to display on page */}
      <div className="flex-row justify-center">
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <>
              {posts.map((post) => (
                <div key={post._id} className="chatroom-container">
                  {/* <code>
                    <pre>
                      {JSON.stringify(post, null, 2)}
                    </pre>
                  </code> */}
                  <div className="post-mutation"><button onClick={() => updateHandle(post._id)}>Edit</button> | <button onClick={() => deleteHandle(post._id)}>Delete</button></div>
                  <p><span>{post.postGamer.username}</span>:</p>
                  <p>{post.postText}</p>
                  <br />
                  <p className="date"><span>Posted on:</span> {post.createdAt}</p>
                  {/* Need functionality to edit and delete post: */}
                  <hr />
                </div>
              ))}
            </>
          )}
        </div>
      </div>

    </div>
  );
}
