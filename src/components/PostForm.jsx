import React, {useState} from 'react';

const PostForm = ({create}) => {

    const [post, setPost] = useState({title: '', body:''})

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        }

        create(newPost);
        setPost({title: '', body:''});

    }


    return (

                <form className="form-submit">
                    <div>
                        <input type="text"
                               className="form-control"
                               placeholder="Post title"
                               value={post.title}
                               onChange={e => setPost({...post, title: e.target.value})}
                        />
                    </div>
                    <div>
                         <textarea className="form-control"
                                   placeholder="Post content"
                                   value={post.body}
                                   onChange={e => setPost({...post, body: e.target.value})}
                         />
                    </div>
                    <div className="button-submit">
                        <button onClick={addNewPost}  className="btn btn-success">Submit</button>
                    </div>
                </form>

    );
};

export default PostForm;