import React from "react";
import { Link } from "react-router-dom";
import './Nav.css'


const Navbar = () => {
    return (
        <div>
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'10px 30px',backgroundColor:'black',color:'white'}}>
                <h1>Navbar</h1>
                <ul style={{display:'flex',alignItems:'center',gap:'20px',listStyle:'none'}}>
                    <li><Link to={'/'}>Home</Link>  </li>
                    <li><Link to={'/about'}>About</Link> </li>
                    <li><Link to={'/contact'}>Contact</Link> </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar