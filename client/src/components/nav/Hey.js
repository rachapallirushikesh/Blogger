import React,{useState,useEffect} from 'react';
import {useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Home.css';

export default function Hey(){
    const [arr,setArr] = useState([]);
    const navigate = useNavigate();
    // useEffect(()=>{
    //     const token = localStorage.getItem('x-token');
    //     axios.get('http://localhost:7000/postBlogData',{
    //         headers:{
    //             'x-token':token
    //         }
    //     })
    //     .then(res=>{
    //         setArr(res.data);
            

    //     })
    //     .catch(err=>alert(err));
        
    // }
    // ,[]
    // )

    return(
        <>
            <div style={
                {backgroundImage:'url(https://images.pexels.com/photos/1242348/pexels-photo-1242348.jpeg?auto=compress&cs=tinysrgb&w=600)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                
                position:'absolute'
            }}>
                <h1 style={{fontSize:'50px',color:'',padding:'3rem 0rem 0rem 2rem'}}>What is blog?</h1>
                <p style={{padding:'0rem 3rem',fontSize:'23px',lineHeight:'2'}}>Blogs are a type of regularly updated websites that provide insight into a 
                certain topic. The word blog is a combined version of the words “web” and “log.”
                 At their inception, blogs were simply an online diary where people could keep a 
                 log about their daily lives on the web. They have since morphed into an essential forum 
                 for individuals and businesses alike to share information and updates. 
                 In fact, many people even make money blogging as professional full-time bloggers. </p>
                 <p style={{padding:'0rem 3rem',fontSize:'23px',lineHeight:'2',marginBottom:'4rem'}}>
                 As the publishing world has evolved, and more of it has moved online, blogs have come to 
                 occupy a central position in this digital content world. Blogs are a source of knowledge, 
                 opinion and concrete advice. While not yet posed to replace journalism as an art form, 
                 people increasingly look to trusted blogs to find answers to their questions, or to learn how to do something. 
                 </p>
            </div>
        </>
    );
    
}