import React from 'react';

function CreatePost({ user, handleAddPost }) {
    const [content, setContent] = React.useState("")
    const [image, setImage] = React.useState(null)

    const inputImgRef = React.useRef()


    function handleSubmit(e) {
        e.preventDefault();

        if (image || content) {
            const post = { content, image, user };
            handleAddPost(post);
            setContent('')
            inputImgRef.current.value = ''
            setImage('')
        }
    }


    return (
        <div >
            <hr />
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
            {/* <p>{content}</p> */}
            {/* {image && <img src={URL.createObjectURL(image)} alt="IMG"
                style={{ height: 100, width: 200, objectFit: "cover" }} />} */}

        </div>
    );
}

export default CreatePost;