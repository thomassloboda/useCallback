import React, { useCallback, useEffect, useState } from "react";

type PostsProps = {
    count: number
}

type Post = {
    id: string;
    title: string;
}

export const Posts = ({ count }: PostsProps) => {
    const [posts, setPosts] = useState<Post[]>([]);
    const handleFetch = useCallback(async (max = 100) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();
        setPosts(() => posts);
    }, []);

    useEffect(() => {
        console.log('useEffect triggered');
        handleFetch(count);
    }, [handleFetch]);

    return (
        <ul>
            {posts.map((post) => <li key={post.id}>{post.title}</li>)}
        </ul>
    );
};