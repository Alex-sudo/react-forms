import React from 'react';

const PostItem = (props) => {
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="block-ceneter">
                    <h2>{props.post.title}, <i>{props.post.id}</i></h2>
                    <p>{props.post.body}</p>
                    <div className="button-post">
                        <button onClick={() => props.remove(props.post)} className="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PostItem;