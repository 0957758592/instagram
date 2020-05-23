import React from 'react';
import Post from './Post'

function PostList({ posts, user }) {
    return (
        <div >
            {posts && posts.map((post, i) => (
                <Post key={i} {...post} currentUser={user} />
            ))}
        </div>
    );
}

export default PostList;