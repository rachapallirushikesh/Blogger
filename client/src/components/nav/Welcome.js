import React from "react";
import { useNavigate } from "react-router-dom";
export default function Welcome(){

    const navigate = useNavigate();
    function handleClick(){
        navigate('/login')
    }
    function handleClick1(){
        navigate('/dashboard')
    }
    return (
        <>
            <div style={{backgroundImage:'url(https://images.pexels.com/photos/82256/pexels-photo-82256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
             backgroundSize: 'cover',
             backgroundPosition: 'center',
            height:'70vh',
            display:'flex',
            alignItems:'center',
            flexDirection:'column',
            justifyContent:'center',
            gap:'20px'}}
            >
                <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:'10px'}}>
                <p style={{fontSize:'60px',margin:'0'}}>Welcome To Our Blog</p>
                <p style={{zindex:'1',fontSize:'20px'}}>Discover Amazing Content and Join Our Community</p>
                </div>
                <div>
                    {localStorage.getItem('x-token') ? (
                        <button style={{ backgroundColor: '', borderRadius: '10px' }} onClick={handleClick1}>
                            Create Blog
                        </button>
                    ) : (
                        <button style={{ backgroundColor: '', borderRadius: '10px' }} onClick={handleClick}>
                            Login to Create Blog
                        </button>
                    )}
                </div>
            </div>
            
        </>
    );
}