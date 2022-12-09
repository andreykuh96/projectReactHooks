import React from 'react';
import Post from '../post/Post';

const PostList = ({posts, title, removePost}) => {

    if (!posts.length) {
        return (
            <h1
            style={{textAlign: 'center'}}>
               Посты не найдены
           </h1> 
        )
    }

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
            {posts.map((item) => 
                <Post removePost={removePost} posts={item} key={item.id} />
            )}
        </div>
    );
};

export default PostList;