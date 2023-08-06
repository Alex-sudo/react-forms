import React, {useState} from 'react';

const PostForm = ({create}) => {

    const [post, setPost] = useState({title: '', content:''})

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        }

        // console.log(newPost);
        create(newPost);
        setPost({title: '', content:''});

    }


    return (
        <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
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
                                   value={post.content}
                                   onChange={e => setPost({...post, content: e.target.value})}
                         />
                    </div>
                    <div className="button-submit">
                        <button onClick={addNewPost}  className="btn btn-success">Submit</button>
                    </div>
                </form>
            </div>
            <div className="col-md-1"></div>
        </div>
    );
};

export default PostForm;