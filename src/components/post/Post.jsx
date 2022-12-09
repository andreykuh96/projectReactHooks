import React from 'react';
import { useNavigate } from 'react-router-dom';
import MyBtn from '../UI/myBtn/MyBtn';

import './post.css';

const Post = ({posts, removePost}) => {
    const navigate = useNavigate();

    return (
        <div className="post">
            <div className="post__content">
                <strong>{posts.id}. {posts.title}.</strong>
                <div>{posts.body}</div>
            </div>
            <div className="post__btn">
                <MyBtn onClick={() => navigate(`/posts/${posts.id}`)}>Открыть</MyBtn>
                <MyBtn onClick={() => removePost(posts)}>Удалить</MyBtn>
            </div>
        </div>
    );
};

export default Post;