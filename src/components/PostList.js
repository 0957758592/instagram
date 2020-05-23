import React from 'react';
import Post from './Post'

function PostList({ posts }) {
    return (
        <div >
            {posts && posts.map((post, i) => (
                <Post key={i} {...post} />
            ))}
        </div>
    );
}

export default PostList;