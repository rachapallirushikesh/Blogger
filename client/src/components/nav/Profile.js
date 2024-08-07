import React, { useEffect } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import './Profile.css';

export default function Profile() {

    const navigate  = useNavigate();
    const [customerData,setData] = React.useState({});
    useEffect(() => {
        const token = localStorage.getItem('x-token');
        axios.get("http://localhost:7000/getCustomerData", {
            headers: {
                'x-token': token
            }
        })
        .then(res => {
            setData(res.data);
            // alert(res.data);
        })
        .catch(err => console.log(err));
    }, []);

    // function hello() {
    //     const token = localStorage.getItem('x-token');
    //     axios.get("http://localhost:7000/getCustomerData", {
    //         headers: {
    //             'x-token': token
    //         }
    //     })
    //     .then(res => {
        
    //         alert(res.data.name);
    //     })
    //     .catch(err => console.log(err));
    // }

    function handleChangeInfo(){
        navigate('/edit-profile');
    }

    return (
        <div style={{padding:'4rem 0rem',backgroundColor:'rgb(148 148 169 / 77%)',display:'flex',justifyContent:'center'}}>
            <div className='profile-page'>
                <div className='profile-part-1'> 
                    <img 
                        src='https://tse2.mm.bing.net/th?id=OIP.vuCzUS9JxTCSps8WU1HzAgHaHa&pid=Api&P=0&h=220' 
                        alt='avatar' 
                        
                        className='profile-pic'
                    />
                    <div>
                        {customerData.name}
                    </div>
                    
                </div>
                <div className='profile-part-2'>
                    <div className='box-1'>
                        <div>Email Address</div>
                        <div>Contact Number</div>
                        <div>Gender</div>
                    </div>
                    <div className='box-2'>
                        <div>:</div>
                        <div>:</div>
                        <div>:</div>
                    </div>
                    <div className='box-3'>
                        <div>{customerData.email}</div>
                        <div>{customerData.number}</div>
                        <div>{customerData.gender}</div>
                    </div>
                </div>
                <button onClick={handleChangeInfo} style={{backgroundColor:'rgb(148 157 169)'}}>Edit Profile</button>
            </div>
        </div>
    );
}
