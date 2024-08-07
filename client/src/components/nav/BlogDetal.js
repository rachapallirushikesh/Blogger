import React from 'react';
import { useLocation } from 'react-router-dom';
import './BlogDetail.css';

export default function BlogDetail() {
    const location = useLocation();
    const { blog } = location.state || {};

    if (!blog) {
        return <p>No blog data available</p>;
    }

    return (
        <div className="blog-detail">
            <img src={blog.url} alt={blog.title} className="blog-image" />
            <div className="blog-details-content">
                <h1>{blog.title}</h1>
                <p><strong>Author:</strong> {blog.authorName}</p>
                <p>{blog.content}</p>
            </div>
        </div>
    );
}
