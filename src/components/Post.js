import React from 'react';
import { UserContext, PostContext } from '../App'

function Post({ image, content, user, id }) {
    const currentUser = React.useContext(UserContext);
    const { dispatch } = React.useContext(PostContext)
    const isCurrentUser = currentUser === user;

    function handledeletePost() {
        dispatch({ type: "DELETE_POST", payload: {id}})
    }

    return (
        <>
            <br/>
            {image && (
                <img
                    src={URL.createObjectURL(image)}
                    alt="Post"
                    style={{ height: 100, width: 200, objectFit: 'cover' }}
                />
            )}
            <p> {content} </p>
            <p style={{ color: isCurrentUser && 'green' }}>{user}</p>
            {isCurrentUser && <button onClick={handledeletePost}>Delete Post</button>}
            <hr/>
        </>
    );
}

export default Post;