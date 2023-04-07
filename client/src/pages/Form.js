import { useState } from 'react';
import { ADD_POST } from '../utils/mutations';
import { useMutation, useQuery } from '@apollo/client';
import React from 'react';
import { QUERY_POSTS } from '../utils/queries';

export default function ChatForm() {
  const [gameText, setGameText] = useState('');
  const { loading, data } = useQuery(QUERY_POSTS);
  const [addPost, { error }] = useMutation(ADD_POST);

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
                  <p>Edit</p>
                  <p>Delete</p>
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
