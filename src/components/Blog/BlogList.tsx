import React from 'react';
import { blogPosts } from '../../data/blogPosts';
import BlogCard from './BlogCard';

const BlogList: React.FC = () => {
    return (
        <div className="blog-list">
            {blogPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
            ))}
        </div>
    );
};

export default BlogList;