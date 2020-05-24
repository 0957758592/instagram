import React from 'react';
import { UserContext } from '../App'

function Post({ image, content, user }) {
    const currentUser = React.useContext(UserContext);
    const isCurrentUser = currentUser === user;

    return (
        <>
            {image && (
                <img
                    src={URL.createObjectURL(image)}
                    alt="Post"
                    style={{ height: 100, width: 200, objectFit: 'cover' }}
                />
            )}
            <p> {content} </p>
            <p style={{ color: isCurrentUser && 'green' }}>{user}</p>
        </>
    );
}

export default Post;