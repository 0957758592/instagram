import React from 'react';

function Post({ image, content, user, currentUser}) {
    const isCurrentUser = currentUser === user;

    return (
        <React.Fragment>
            {image && (<img src={URL.createObjectURL(image)} alt="" style={{ height: 100, width: 200, objectFit: 'cover' }} />)}
            <p>{content}</p>
            <p style={{color: isCurrentUser && 'green'}}>{user}</p>
        </React.Fragment>
    );
}

export default Post;