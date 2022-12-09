import React, { useState } from 'react';
import MyBtn from '../UI/myBtn/MyBtn';
import MyInp from '../UI/myInp/MyInp';

const Form = ({createPost}) => {

    const [newPost, setNewPost] = useState({title: '', body: ''});

    const addNewPost = (e) => {
        e.preventDefault();

        const addPost = {
            ...newPost, id: Date.now(),
        }
        createPost(addPost);
        setNewPost({title: '', body: ''});
    }

    return (
        <form>
            <MyInp
                value={newPost.title}
                onChange={e => setNewPost({...newPost, title: e.target.value})}
                type="text"
                placeholder='Название поста' 
            />
            <MyInp
                value={newPost.body}
                onChange={e => setNewPost({...newPost, body: e.target.value})}
                type="text"
                placeholder='Описание поста' 
            />
            <MyBtn onClick={addNewPost} >Добавить пост</MyBtn>
        </form>
    );
};

export default Form;