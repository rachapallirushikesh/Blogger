import React,{useState} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Home.css';
import { store } from '../context/useContext';

export default function Home() {
    const { setLog } = React.useContext(store);

    const [isOpen, setIsOpen] = useState(false);

    const navigate = useNavigate();

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleCLick = () =>{
        localStorage.removeItem('x-token');
    }

    function gotoHome(){
        navigate('/');
    }
    function gotoBlog(){
        navigate('/blogs');
    }

    const [arr,setArr] = useState([]);

//     useEffect(()=>{
//         const token = localStorage.getItem('x-token');
//         axios.get('http://localhost:7000/postBlogData',{
//             headers:{
//                 'x-token':token
//             }
//         })
//         .then(res=>{
//             setArr(res.data);
            

//         })
//         .catch(err=>alert(err));
        
//     }
//     ,[]

// )

const handleCardClick = (blog) => {
    navigate(`/blog/${blog._id}`);
};

    return (
        <>
            <header className='nav'>
                <div className='nav-item'>Blogging</div>
                <div className='search-bar'>
                {localStorage.getItem('x-token') && (
                    <>
                        <input className='search-input' type='text' placeholder='Search...' />
                        <button className='search-button'>Search</button>
                    </>
                )}

                </div>
                <div className='nav-item' onClick={gotoHome}>Home</div>
    
                <div className='nav-item'>About us</div>
                
                {setLog && (
                    localStorage.getItem('x-token') ? (
                        <div>
                            {/* <Link to='/Profile' className='nav-item' style={{ textDecoration: 'none', color: 'black' }}>
                                <select>
                                    <option>MyProfile</option>
                                    <option>Dashboard</option>
                                    <option>Logout</option>
                                </select>
                            </Link> */}
                            <div className="dropdown">
                                <button  className="dropdown-toggle" style={{borderRadius:'20px',border:'2px solid black',backgroundColor:'#a3dac785'}}>
                                <i class="fa-regular fa-user" onMouseOver={toggleDropdown}></i>
                                </button>
                                {isOpen && (
                                    <div className="dropdown-menu">
                                        {/* <div className="dropdown-header">
                                            <button className="dropdown-login">Login</button>
                                            <button className="dropdown-signup">Sign Up</button>
                                        </div> */}
                                        <ul className="dropdown-list" onMouseLeave={toggleDropdown}>
                                            <li><a href="/profile">My Profile</a></li>
                                            <li><a href="/dashboard">Dashboard</a></li>
                                            <li><a href="/blogs">Blogs</a></li>
                                            <li onClick={handleCLick}><a href="/">Logout</a></li>

                                            {/* <li><a href="/wishlist"><i className="fas fa-heart"></i> Wishlist</a></li>
                                            <li><a href="/rewards"><i className="fas fa-gift"></i> Rewards</a></li>
                                            <li><a href="/giftcards"><i className="fas fa-credit-card"></i> Gift Cards</a></li> */}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    ) : (
                        <>
                            <div>
                                <Link to='/Login' className='nav-item' style={{ textDecoration: 'none', color: 'black' }}>
                                    Login
                                </Link>
                            </div>
                            <div>
                                <Link to='/SignUp' className='nav-item' style={{ textDecoration: 'none', color: 'black' }}>
                                    Sign Up
                                </Link>
                            </div>
                        </>
                    )
                )}
            </header>
            
        </>
    );
}
