import React from 'react';

interface BlogPost {
    id: number;
    title: string;
    summary: string;
    content: string;
    date?: string;
    image?: string;
}

interface BlogCardProps {
    post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
    return (
        <div className="blog-card">
            {post.image && <img src={post.image} alt={post.title} className="blog-card-image" />}
            <div className="blog-card-content">
                <h3 className="blog-card-title">{post.title}</h3>
                <p className="blog-card-summary">{post.summary}</p>
                <div className="blog-card-meta">
                    {post.date && <span className="blog-card-date">{post.date}</span>}
                </div>
            </div>
        </div>
    );
};
                    <span className="blog-card-author">{author}</span>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;