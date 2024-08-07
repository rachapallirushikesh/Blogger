import React,{useContext} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import './auth.css';
import axios from 'axios';

import {store} from '../context/useContext';

export default function Login(){
    
    const {setLog} = useContext(store);

    const navigate = useNavigate();
    function handleClickHere(){
        navigate('/SignUp')
    }
    
    
    const [email,setEmail] = React.useState('');
    const [password,setPassword] = React.useState('');
    function handleEmail(event){
        const {name,value}=event.target;
        if(name==='input1'){
            setEmail(value);
        }
        else if(name==='input2'){
            setPassword(value);
        }
    }

    // const [token,setToken] = React.useState(null);
    function handleClick(){
        const result = axios.post("https://blogger-2knx.onrender.com/customerValidation",{email,password})
        .then(res=> {
            console.log(res.data.token);
            localStorage.setItem('x-token',res.data.token); 
            setLog(false);
            res.data.bool&&navigate('/');
        })
        .catch((err)=>alert("Enter Valid Email or Password"));
        if(!result){
            alert('token not set');
        }
    }
    
    return (
        <div className='auth'>
            <div className='auth-in'>
                <p>Login</p>
                <input id='email' onChange={handleEmail} type='email' placeholder='Email address' name='input1' value={email}/><br></br>
                <input id='email' onChange={handleEmail} type='password' placeholder='Password' name='input2' value={password}/>
                <div className='continue' onClick={handleClick}>Continue</div>
                <div style={{display:'flex',gap:'10px'}}>
                    <div>
                        <span>Create an account?</span>
                        <span><Link to='/SignUp' style={{color:'red',textDecoration:'none'}} onClick={handleClickHere} > Click here</Link></span>
                    </div>
                    {/* <span><Link to='/Login' style={{color:'red',textDecoration:'none',float:'right'}}> Forgot Password</Link></span> */}
                </div>
                <div style={{marginTop:'.5rem',marginBottom:'2rem'}}> 
                    <input type='checkbox'></input> 
                    <span style={{fontSize:'13px'}}>I agree to the terms of use & privacy policy.</span>
                </div>
            </div>
        </div>
    );
}