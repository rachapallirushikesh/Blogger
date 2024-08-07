import React from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom"; 
import './EditProfile.css';

export default function EditProfile(){

    const navigate = useNavigate();
    const [number,setNumber] = React.useState('');
    const [name,setName] = React.useState('');
    const [password,setPassword] = React.useState('');
    const [gender,setGender] = React.useState('');
    
    function handleEmail(event){
        const {name,value}=event.target;
        switch(name) {
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

    function handleClick(){
        const token = localStorage.getItem('x-token');
        axios.put('https://blogger-2knx.onrender.com/edit-profile',{name,number,gender},
            {
                headers: {
                    'x-token': token
                }
            }
        )
             .then(res=>{
                navigate('/profile');
             })
    }
    return(
        <div className='reg'>
            <div className='reg-in'>
                <p>Edit Info</p>
                {/* <p style={{color:'red',fontSize:'10px',textAlign:'center'}}>{message.m1}</p> */}
                {/* <p style={{color:'red',fontSize:'10px',textAlign:'center'}}>{message.m2}</p> */}
                <input id='email' onChange={handleEmail} type='password' placeholder='Name' value={name} name='input3'/><br></br>
                <input id='email' onChange={handleEmail} type='password' placeholder='Contact number' value={number}name='input2'/><br></br>
                {/* <p style={{color:'red',fontSize:'10px',textAlign:'center'}}>{message.m3}</p> */}
                <input id='email' onChange={handleEmail} type='password' placeholder='Male/Female' value={gender} name='input5'/><br></br>
                <input id='email' onChange={handleEmail} type='password' placeholder='Password' value={password} name='input4'/>

                {/* <p style={{color:'red',fontSize:'10px',textAlign:'center'}}>{message.m4}</p> */}
                <div className='continue' onClick={handleClick} style={{marginBottom:'3rem'}}>Save</div>
            
                {/* <span><Link to='/Login' style={{color:'red',textDecoration:'none'}} onClick={handleClickHere}> Click here</Link></span>
                <div style={{marginTop:'.5rem',marginBottom:'2rem'}}> 
                    <input type='checkbox'></input> 
                    <span style={{fontSize:'13px'}}>I agree to the terms of use & privacy policy.</span>
                </div> */}
            </div>
        </div>
    );
}