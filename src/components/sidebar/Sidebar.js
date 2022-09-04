import React, { Component } from 'react';
import './Sidebar.css';
import { HashLink as Link } from 'react-router-hash-link';
import { FiExternalLink } from 'react-icons/fi';
import logo from '../images/sam.jpg'

class Sidebar extends Component {
    render() {

        return (
            <div className="sidebar">
                <div style={{ color: 'orange', fontWeight: 'bold' }} className="tagtop"> # good_to_go </div>
                <div style={{ color: 'orange', fontWeight: 'bold' }} className=""> # happy_life </div>
                <div style={{ color: 'orange', fontWeight: 'bold' }} className=""> # Programer_life </div>
                <h1><Link smooth to="/#start" className="h1_links">Harshvardhan Jha</Link></h1>

                <img src={logo}  />
                <p style={{ color: 'black', fontWeight: 'bold' }} className="gmail"><a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJftvBffjPmxWxvfHWRHWnhTbpQgPxBxvkcnPpFpFqbhrXMCHXSJTsCXCVLsQzgRcVLpnPL" rel="opener noreferrer" target="_blank" className="fa fa-envelope"></a> harshvardhanjha4@gmail.com </p>

                <ul className="sidebar-nav">
                    <li className="sidebar-nav-items"><Link smooth to="/#about" className="links">About</Link></li>
                    <li className="sidebar-nav-items"><Link smooth to="/#education" className="links" >Education</Link></li>
                    <li className="sidebar-nav-items"><Link smooth to="/#interest" className="links">Interest</Link></li>
                </ul>

                <div className="flip-card-back">
                    <ul className="sidebar-nav">
                        <li className="sidebar-nav-icons"> <a href="https://github.com/harsh1kashyap" rel="opener noreferrer" target="_blank" className="fa fas fa-github fa-lg"></a></li>
                        <li className="sidebar-nav-icons"><a href="https://www.linkedin.com/in/harshvardhan-jha-b60148159/" rel="opener noreferrer" target="_blank" className="fa fas fa-linkedin fa-lg"></a></li>
                        {/* <li className="sidebar-nav-icons"> <a href="https://twitter.com/Sachin_Mittal98" rel="opener noreferrer" target="_blank" className="fa fas fa-twitter fa-lg"></a></li> */}
                        <li className="sidebar-nav-icons"> <a href="https://www.instagram.com/hoon_engineer/" rel="opener noreferrer" target="_blank" className="fa fas fa-instagram fa-lg"></a></li>
                        <li className="sidebar-nav-icons"> <a href="harshvardhanjha4@gmail.com" rel="opener noreferrer" target="_blank" className="fa fas fa-envelope fa-lg"></a></li>
                        {/* <li className="sidebar-nav-icons"> <a href="https://www.facebook.com/profile.php?id=100011989067867" rel="opener noreferrer" target="_blank" className="fa fas fa-facebook fa-lg"></a></li> */}
                    </ul>
                </div>

            </div>
        )
    }
}

export default Sidebar