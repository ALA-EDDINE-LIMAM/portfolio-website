import React from 'react';
import { useParams } from 'react-router-dom';
import blogPosts from '../data/blogPosts';
import './BlogPostPage.css';

const BlogPostPage = () => {
    const { id } = useParams();
    const post = blogPosts.find(post => post.id === parseInt(id || '0'));

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <div className="blog-post-page">
            <h1>{post.title}</h1>
            <p>{post.date}</p>
            <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
    );
};

export default BlogPostPage;