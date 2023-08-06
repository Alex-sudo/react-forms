import React from 'react';

const PostItem = (props) => {
    return (
        <div className="row">
            <div className="col-md-1"></div>

            <div className="col-md-10">
                <div className="block-ceneter">
                    <h2>{props.post.title}, <i>{props.number}</i></h2>
                    <p>{props.post.content}</p>
                    <div className="button-post">
                        <button onClick={() => props.remove(props.post)} className="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>

            <div className="col-md-1"></div>
        </div>
    );
};

export default PostItem;