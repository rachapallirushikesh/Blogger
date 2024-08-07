import React,{useEffect,useState} from "react";
import axios from 'axios';
import { useNavigate, Link} from "react-router-dom";
import './Blogs.css';
// import '../Dashboard/Dashboard.css';

export default function Blogs(){
    const [arr,setArr] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        const token = localStorage.getItem('x-token');
        axios.get('https://blogger-2knx.onrender.com/blogs')
        .then(res=>{
            setArr(res.data);
        })
        .catch(err=>alert(err));
        
    }
    ,[]
    )

    const handleBlogClick = (blog) => {
        navigate(`/blog/${blog.title}`, { state: { blog } });
    };

    return (
        <>
            <div className="blog-container1">
                            <h1>Blog Posts</h1>
                            <ul className="blog-list1">
                                {arr.map(blog => (
                                    <li key={blog._id} className="blog-item1" onClick={() => handleBlogClick(blog)}>
                                        <Link to={`/blog/${blog.title}`}>
                                            <img src={blog.url} alt={blog.title} className="blog-image1" />
                                        </Link>
                                        <div className="blog-content-wrapper1">
                                            <h2 className="blog-title1">{blog.title}</h2>
                                            <p className="blog-author1">Author: {blog.authorName}</p>
                                            <p className="blog-content1">{blog.content}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
        </>
    );

}