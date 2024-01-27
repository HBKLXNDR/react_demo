// src/pages/PostsPage.js
import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import Error from '../components/Error';
import PostCard from '../components/PostCard'; // Assume this is like ProductCard but for posts

const PostsPage = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then(data => {
                setPosts(data.posts); // Assuming the API response has a "posts" key
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) return <Loading />;
    if (error) return <Error message={error.message} />;

    return (
        <div className="posts-page">
            {posts.map(post => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
};

export default PostsPage;
