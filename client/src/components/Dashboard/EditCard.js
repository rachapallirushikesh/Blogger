import React from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function EditCard(){

    const navigate = useNavigate();

    const [title,setTitle] = React.useState('');
    const [url,setUrl] = React.useState('');
    const [name,setName] = React.useState('');
    const [content,setContent] = React.useState('');

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
        axios.put('https://blogger-2knx.onrender.com/postBlogData',{title,url,name,content},{
            headers:{
                'x-token':token
            }
        })
        .then(res=>{
            navigate('/dashboard');
        })
        .catch(err=>alert(err));
    }
    return(
        <>
            <div style={{fontSize:'40px'}}>Dashboard</div>
            <hr></hr>
            {/* <div style={{display:'flex',gap:'10px'}}>
                <div  style={{border:'2px solid black',padding:'10px',borderRadius:'10px',marginTop:'10px',cursor:'pointer'}} onClick={handleClickC}>Create Blog</div>
                <div style={{border:'2px solid black',padding:'10px',borderRadius:'10px',marginTop:'10px',cursor:'pointer'}} onClick={handleClickM}>My Blog</div>
            </div> */}
            <div>
               
                        <div style={{textAlign:'center',fontSize:'40px',marginBottom:'1.5rem'}}>Edit Post</div>
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
                            <button onClick={handlePost}>Confirm</button>
                        </div>             
            </div>
        </>
    );
}