import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserContextProvider from './components/context/useContextProvider';
import Home from './components/nav/Home';
import Register from './components/Login/Register';
import Login from './components/Login/Login';
import Profile from './components/nav/Profile';
import EditProfile from './components/nav/EditProfie';
import Dashboard from './components/Dashboard/Dashboard';
import EditCard from './components/Dashboard/EditCard';
import BlogDetail from './components/nav/BlogDetal';
// import Hey from './components/nav/Hey';
import Welcome from './components/nav/Welcome';
import Footer from './components/Footer/Footer';
import Blogs from './components/Blogs/Blogs';

export default function App(){
    return(
        <UserContextProvider>
            <Routes>
                <Route path='/' element={<>
                    <Home />
                    <Welcome />
                    {/* <Hey /> */}
                    <Footer />
                </>}></Route>
                <Route path='/SignUp' element={<>
                    <Home />
                    <Register />
                </>}></Route>
                <Route path='/Login' element={
                    <>
                        <Home />
                        <Login />
                    </>
                }></Route>
                <Route path='/Profile' element={
                    <>
                        <Home />
                        <Profile />
                    </>
                }></Route>
                <Route path='/edit-profile' element={
                    <>
                        <Home />
                        <EditProfile />
                    </>
                }></Route>
                <Route path='/dashboard' element={
                    <>
                        <Home />
                        <Dashboard />
                    </>
                }></Route>
                <Route path='/edit-card' element={<><Home /><EditCard /></>}></Route>
                <Route path="/blog/:id" element={<><Home /><BlogDetail /></>} />
                <Route path='/blogs' element={<><Home /><Blogs /></>} />
            </Routes>

        </UserContextProvider>
    );
}