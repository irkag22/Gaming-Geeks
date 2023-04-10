import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { UPDATE_POST } from '../utils/mutations';

import Auth from '../utils/auth';

function UpdatePostForm({ postId, initialPostText }) {
    const [postText, setPostText] = useState(initialPostText);
    const [updatePost, { loading, error }] = useMutation(UPDATE_POST, {
        variables: { postId, postText },
        onError: (error) => console.error(error),
    });

    const handFormleSubmit = async (event) => {
        event.preventDefault();
        try {
            await updatePost();
            Auth.login(data.addUser.token);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <label>
                Your Text:
                <input
                    type="text"
                    value={postText}
                    onChange={(event) => setPostText(event.target.value)}
                />
            </label>
            <button className="btn btn-block btn-primary"
                style={{ cursor: 'pointer' }}
                type="submit" disabled={loading}> Save
                {loading ? 'Updating...' : 'Update'}
            </button>
            {error && <div>Error: {error.message}</div>}
        </form>
    );
}
