import React from 'react';
import './Dashboard.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Dashboard(){
    const navigate = useNavigate();

    const [cb,setCb] = React.useState(true);
    const [mb,setMb] = React.useState(false);

    const [title,setTitle] = React.useState('');
    const [url,setUrl] = React.useState('');
    const [name,setName] = React.useState('');
    const [content,setContent] = React.useState('');

    function handleClickC(){
        setCb(true);
        setMb(false);
    }

    const [blogs,setArr] = React.useState([]);

    
    function handleClickM(){
        const token = localStorage.getItem('x-token');
        setCb(false);
        setMb(true);
        axios.get('https://blogger-iz5z.onrender.com/postBlogData',{
            headers:{
                'x-token':token
            }
        })
        .then(res=>{
            setArr(res.data);
            

        })
        .catch(err=>alert(err));
    }

    function handleChange(event){
        const {name,value} = event.target;
        switch(name){
            case 'input1':
                setTitle(value);
                break;
            case 'input2':
                setUrl(value);
                break;
            case 'input3':
                setName(value);
                break;
            case 'input4':
                setContent(value);
                break;
        }
    }

    function handlePost(){
        const token = localStorage.getItem('x-token');
        axios.post('https://blogger-iz5z.onrender.com/postBlogData',{title,url,name,content},{
            headers:{
                'x-token':token
            }
        })
        .then(res=>{
            setCb(false);
            // setMb(true);
        })
        .catch(err=>alert(err));
    }

    function handleEdit(){
        navigate('/edit-card');
    }

    
    // function handleDelete(id) {
    //     const token = localStorage.getItem('x-token');
    //     axios.delete(`http://localhost:7000/postBlogData`,{id}, {
    //         headers:{
    //             'x-token':token
    //         }
    //     })
    //     .then(res => {
    //         alert("Successfully deleted");
    //         setArr(blogs.filter(blog => blog._id !== id));
    //     })
    //     .catch(err => alert(err));
    // }

    function handleDelete(id) {
        const token = localStorage.getItem('x-token');
        axios.delete(`https://blogger-iz5z.onrender.com/postBlogData/${id}`, {
            headers: {
                'x-token': token
            }
        })
        .then(res => {
            alert("Successfully deleted");
            setArr(blogs.filter(blog => blog._id !== id));
        })
        .catch(err => alert(err));
    }
    
    return (
        <div className='dashboard'>
            <div style={{fontSize:'40px'}}>Dashboard</div>
            <hr></hr>
            <div style={{display:'flex',gap:'10px'}}>
                <div  style={{border:'2px solid black',padding:'10px',borderRadius:'10px',marginTop:'10px',cursor:'pointer'}} onClick={handleClickC}>Create Blog</div>
                <div style={{border:'2px solid black',padding:'10px',borderRadius:'10px',marginTop:'10px',cursor:'pointer'}} onClick={handleClickM}>My Blog</div>
            </div>
            <div>
                {cb&&(<>
                        <div style={{textAlign:'center',fontSize:'40px',marginBottom:'1.5rem'}}>Create Post</div>
                        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                            <input type='text' placeholder='Title' style={{padding:'6px',fontSize:'15px',width:'300px',marginBottom:'1rem'}} value={title} onChange={handleChange} name='input1'/>
                            <input type='text' placeholder='Provide image URL' style={{padding:'6px',fontSize:'15px',width:'300px',marginBottom:'1rem'}} value={url}  onChange={handleChange} name='input2'/>
                            <input type='text' placeholder='Author Name' style={{padding:'6px',fontSize:'15px',width:'300px',marginBottom:'1rem'}} value={name} onChange={handleChange}  name='input3'/>
                            <textarea 
                                placeholder="Enter Content" 
                                style={{ 
                                    padding: '6px', 
                                    fontSize: '15px', 
                                    width: '300px', 
                                    marginBottom: '1rem', 
                                    height: '120px' 
                                }}
                                value={content}
                                onChange={handleChange} 
                                name='input4'
                            />
                            <button onClick={handlePost}>Post</button>
                        </div>
                    </>
                )}
            </div>
            <div>
                {mb&&(
                    <>
                        {/* <div style={{textAlign:'center',fontSize:'40px',marginBottom:'1.5rem'}}>My Blogs</div>
                        <div>

                        </div> */}
                        <div className="blog-container1">
                            <h1>Blog Posts</h1>
                            <ul className="blog-list1">
                                {blogs.map(blog => (
                                    <li key={blog._id} className="blog-item1">
                                        <img src={blog.url} alt={blog.title} className="blog-image1" />
                                        <div className="blog-content-wrapper1">
                                            <h2 className="blog-title1">{blog.title}</h2>
                                            <p className="blog-author1">Author: {blog.authorName}</p>
                                            <p className="blog-content1">{blog.content}</p>
                                            <div style={{display:'flex',justifyContent:'space-around'}}>
                                                <button onClick={handleEdit}>Edit</button>
                                                <button onClick={() => handleDelete(blog._id)}>Delete</button>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </>
                )}

            </div>
        </div>
    );
}