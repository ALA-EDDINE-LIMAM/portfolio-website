import React from 'react';
import blogPosts from '../../data/blogPosts';
import BlogCard from './BlogCard';

interface BlogPost {
    id: number;
    title: string;
    summary: string;
    content: string;
    date?: string;
    image?: string;
}

const BlogList: React.FC = () => {
    return (
        <div className="blog-list">
            {blogPosts.map((post: BlogPost) => (
                <BlogCard key={post.id} post={post} />
            ))}
        </div>
    );
};

export default BlogList;