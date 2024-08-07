import React from 'react';
import { useNavigate,Link} from 'react-router-dom';
import axios from 'axios';
import './auth.css';


export default function Register(){
    
    const navigate = useNavigate();
    function handleClickHere(){
        navigate('/Login')
    }

    
    const [email,setEmail] = React.useState('');
    const [number,setNumber] = React.useState('');
    const [name,setName] = React.useState('');
    const [password,setPassword] = React.useState('');
    const [gender,setGender] = React.useState('');
    function handleEmail(event){
        const {name,value}=event.target;
        switch(name) {
            case 'input1':
                setEmail(value);
                break;
            case 'input2':
                setNumber(value);
                break;
            case 'input3':
                setName(value);
                break;
            case 'input4':
                setPassword(value);
                break;
            case 'input5':
                setGender(value);
                break;
            default:
                // Optionally handle cases where name doesn't match any of the cases
                break;
        }
        
    }

    const [message,setMessage] = React.useState();
    
    function handleClick(){
        const emailRegex = /^([a-zA-Z0-9/.]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
        if(!emailRegex.test(email)){
            setMessage('Email Format is Invalid');
            return ;
        }
       
        
        axios.post("https://blogger-2knx.onrender.com/customerData",{email,name,number,password,gender})
             .then(res=>{
                navigate('/login')
                setMessage('')
            })
             .catch((err)=>setMessage('user already exists'));
       

    }
    

    return (
        <div className='reg'>
            <div className='reg-in'>
                <p style={{fontSize:'20px',color:'red',textAlign:'center'}}>{message}</p>
                <p>Sign up</p>
                <input id='email' onChange={handleEmail} type='email' placeholder='Email address' value={email} name='input1'/>
                {/* <p style={{color:'red',fontSize:'10px',textAlign:'center'}}>{message.m1}</p> */}
                {/* <p style={{color:'red',fontSize:'10px',textAlign:'center'}}>{message.m2}</p> */}
                <input id='email' onChange={handleEmail} type='password' placeholder='Name' value={name} name='input3'/><br></br>
                <input id='email' onChange={handleEmail} type='password' placeholder='Contact number' value={number}name='input2'/>
                {/* <p style={{color:'red',fontSize:'10px',textAlign:'center'}}>{message.m3}</p> */}
                <input id='email' onChange={handleEmail} type='password' placeholder='Male/Female' value={gender} name='input5'/><br></br>
                <input id='email' onChange={handleEmail} type='password' placeholder='Password' value={password} name='input4'/>

                {/* <p style={{color:'red',fontSize:'10px',textAlign:'center'}}>{message.m4}</p> */}
                <div className='continue' onClick={handleClick}>Register</div>
                <span>Already had an account?</span>
                <span><Link to='/Login' style={{color:'red',textDecoration:'none'}} onClick={handleClickHere}> Click here</Link></span>
                <div style={{marginTop:'.5rem',marginBottom:'2rem'}}> 
                    <input type='checkbox'></input> 
                    <span style={{fontSize:'13px'}}>I agree to the terms of use & privacy policy.</span>
                </div>
            </div>
        </div>
    );
}