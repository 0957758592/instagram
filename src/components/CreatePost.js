import React from 'react';
import { PostContext } from '../App'

function CreatePost({ user }) {
    const { dispatch } =  React.useContext(PostContext)
    const [content, setContent] = React.useState("")
    const [image, setImage] = React.useState(null)
    const id = `f${(~~(Math.random() * 1e8)).toString(16)}`;
    const inputImgRef = React.useRef()


    function handleSubmit(e) {
        e.preventDefault();

        console.log("MATH ", ~~(Math.random() ))
        console.log("MATH2 ", ~~(Math.random() * 1e8))
        console.log("123  ", "123".toString(16))

        if (image || content) {
            const post = { content, image, user, id };
            dispatch({ type: "ADD_POST", payload: { post }})
            // handleAddPost(post);
            setContent('')
            inputImgRef.current.value = ''
            setImage('')
        }
    }


    return (
        <div >
            <h2>Create Post </h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={e => setContent(e.target.value)}
                    value={content}
                />
                <input
                    type="file"
                    onChange={e => setImage(e.target.files[0])}
                    ref={inputImgRef}
                />
                <button type='submit'>submit</button>
            </form>
        </div>
    );
}

export default CreatePost;