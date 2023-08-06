import React from 'react';


const PostCounter = (props) => {
    return (
        <div className="row">
            <div className="col-md-12">
                Count posts: ({props.posts.length})
            </div>
        </div>
    );
};

export default PostCounter;