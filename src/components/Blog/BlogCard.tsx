import React from 'react';

interface BlogCardProps {
    title: string;
    summary: string;
    date: string;
    author: string;
    imageUrl: string;
    onClick: () => void;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, summary, date, author, imageUrl, onClick }) => {
    return (
        <div className="blog-card" onClick={onClick}>
            <img src={imageUrl} alt={title} className="blog-card-image" />
            <div className="blog-card-content">
                <h3 className="blog-card-title">{title}</h3>
                <p className="blog-card-summary">{summary}</p>
                <div className="blog-card-meta">
                    <span className="blog-card-date">{date}</span>
                    <span className="blog-card-author">{author}</span>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;