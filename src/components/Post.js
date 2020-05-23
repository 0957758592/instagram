import React from 'react';
import { UserContext } from '../App'

function Post({ image, content, user }) {

    return (
        <UserContext.Consumer>

            {currentUser => (
            <>
                {image && (<img src={URL.createObjectURL(image)} alt="" style={{ height: 100, width: 200, objectFit: 'cover' }} />)}
                <p> {content} </p>
                <p style={{ color: currentUser === user && 'green' }}>{user}</p>
            </>
            )}

        </UserContext.Consumer>
    );
}

export default Post;