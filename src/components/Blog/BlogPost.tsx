import React from 'react';

interface BlogPostProps {
    title: string;
    date: string;
    content: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, date, content }) => {
    return (
        <div className="blog-post">
            <h1>{title}</h1>
            <p className="date">{date}</p>
            <div className="content" dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    );
};

export default BlogPost;