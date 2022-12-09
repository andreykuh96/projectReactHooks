import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import PostServise from '../API/PostServise';

const PostIdPage = () => {
    const params = useParams();

    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchPostById, isLoading, error] = useFetching( async () => {
        const response = await PostServise.getById(params.id)

        setPost(response.data);
    })

    const [fetchComById, isComLoading, comError] = useFetching( async () => {
        const response = await PostServise.getComById(params.id)

        setComments(response.data);
    })

    useEffect(() => {
        fetchPostById(params.id)
        fetchComById(params.id)
    }, [])

    return (
        <div>
            <h1> Вы открыли {params.id} страницу поста</h1>
            {isLoading
                ?   <h1>Идет загрузка...</h1>
                :   <div
                        style={{fontSize: '20px', textAlign: 'center', fontWeight: '600'}}>
                        {post.title}
                    </div>
            }
            <h1>Комментарии:</h1>
            {isComLoading
                ?   <h1>Идет загрузка...</h1>
                :   <div>
                        {comments.map(item =>
                            <div key={item.id} style={{margin: '20px 0 0 20px'}}>
                                <h5>{item.email}</h5>
                                <div>{item.body}</div>
                            </div>    
                        )}
                    </div>
            }
        </div>
    );
};

export default PostIdPage;