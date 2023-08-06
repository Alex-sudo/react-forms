import React from 'react';
import PostItem from "./PostItem";

const PostList = ({title, remove, ...props}) => {
    if(props.posts.length === 0){
        return (
            <h4>Posts not found</h4>
        )
    }

    return (
        <>
            <div>
                <h2 style={{textAlign: "center"}}>{ title } :</h2>
                {props.posts.map((post, index) =>
                    <PostItem remove={remove} number={index + 1} post={post} key={post.id}/>
                )}
            </div>
        </>
    );
};

export default PostList;