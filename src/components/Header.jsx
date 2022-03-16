import React, { useState } from 'react';
import './GeneralStylesheets/Header.css'
// import {
//     Routes,
//     Route,
//     Link,
//     Router,
//     NavLink
// } from "react-router-dom";
import { Nav, NavLink, NavLogo, Bars, NavMenu, NavBtn, NavBtnLink } from './Navbar'

const Header = () => {
    const [clicked, setClicked] = useState(false)

    const handleClick = () => setClicked(clicked === false ? true : false)

    return (
        <div className='header_wrap fixed-top'>
            {/* <div className='header_wrap fixed-top'>
                <header>
                    <nav className="navbar navbar-expand-sm">
                        <div className="container-fluid">
                            <Link className="navbar-brand" to = "/">
                                <img src={logo} />
                            </Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarID"
                                aria-controls="navbarID" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarID">
                                <div className="navbar-nav">
                                    <Link to="/">Trang chủ</Link>
                                    <Link to="/GymPackage">Gói tập</Link>
                                    <Link to="/Coach">Huấn luyện viên</Link>
                                    <Link to="/TryingPractice">Đăng ký tập thử</Link>
                                    <Link to="/Candidate">Tham gia làm PT</Link>
                                    <Link to="/Contact">Về chúng tôi</Link>
                                </div>
                                <div className="navbar-nav navbar-right">
                                <Link to="/Login">Đăng nhập</Link>
                            </div>
                            </div>
                        </div>
                    </nav>
                </header>
            </div> */}
            
            <Nav>
                <NavLink to="/">
                    <NavLogo src={require('./ListImage/Logo.jpg')}></NavLogo>
                </NavLink>
                <Bars onClick={handleClick}/>
                <NavMenu className= {clicked ? 'nav-menu active' : 'nav-menu'}>
                    <NavLink to="/" activeStyle>Trang chủ</NavLink>
                    <NavLink to='/Membership' activeStyle>Hội viên</NavLink>
                    <NavLink to='/Coach' activeStyle>Huấn luyện viên</NavLink>
                    <NavLink to='/TryingPractice' activeStyle>Đăng ký tập thử</NavLink>
                    <NavLink to='/Candidate' activeStyle>Tham gia làm PT</NavLink>
                    <NavLink to="/Contact" activeStyle>Về chúng tôi</NavLink>
                </NavMenu>
                {/* <NavBtn>
                    <NavBtnLink to='/Login'>Đăng nhập</NavBtnLink>
                </NavBtn> */}
            </Nav>
        </div>
    );
}

export default Header;