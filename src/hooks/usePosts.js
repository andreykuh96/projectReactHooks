import { useMemo } from "react";

export const useSortedPost = (sort, posts) => {
    const sortedPost = useMemo(() => {
        if (sort) {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
        } else {
            return posts
        }
    }, [sort, posts])

    return sortedPost;
};

export const usePosts = (posts, sort, find) => {
    const sortedPost = useSortedPost(sort, posts)

    const findSortedPost = useMemo(() => {
        return sortedPost.filter(item => item.title.toLowerCase().includes(find.toLowerCase()))
    }, [find, sortedPost])

    return findSortedPost;
};
