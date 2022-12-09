import React, { useEffect, useRef, useState } from 'react';
import {usePosts} from '../hooks/usePosts';
import {useFetching} from '../hooks/useFetching';
import PostServise from '../API/PostServise';
import {getPageCount} from '../utils/pages';
import MyBtn from '../components/UI/myBtn/MyBtn';
import MyModal from '../components/UI/myModal/MyModal';
import Form from '../components/form/Form';
import Filter from '../components/filter/Filter';
import PostList from '../components/PostList/PostList';
import Pagination from '../components/UI/pagination/Pagination';
import { useObserver } from '../hooks/useObserver';

const Pages = () => {

    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', find: ''});
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const findSortedPost = usePosts(posts, filter.sort, filter.find);
    const lastElement = useRef();

    const [fetchPosts, loading, error] = useFetching(async () => {
        const response = await PostServise.getAll(limit, page);
        setPosts([...posts, ...response.data]);

        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPageCount(totalCount, limit));
    })

    useObserver(lastElement, page < totalPages, loading, () => {
        setPage(page + 1);
    })

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(item => item.id !== post.id))
    }

    useEffect(() => {
        fetchPosts();
    }, [page])

    const changePage = (page) => {
        setPage(page);
    }

    return (
        <div className='app'>
            <MyBtn
            onClick={() => setModal(true)}
            style={{marginTop: '30px'}}>
                Создать пост
            </MyBtn>
            <MyModal visible={modal} setVisible={setModal}>
                <Form createPost={createPost}/>
            </MyModal>
            <Filter filter={filter} setFilter={setFilter}/>
            {error &&
                <h1>Произошла ошибка {error}</h1>
            }
            {loading &&
                <h1>Идет загрузка...</h1>
            }
            <PostList
                removePost={removePost}
                posts={findSortedPost}
                title='Список постов' 
            />
            <Pagination
                totalPages={totalPages}
                page={page}
                changePage={changePage}
            />
            <div style={{marginTop: 100}} ref={lastElement}/> 
        </div>
    );
};

export default Pages;