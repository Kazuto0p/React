import React from "react";
import { Link, Outlet } from "react-router-dom";

const Contact = () => {
    return (
        <div style={{padding:'10px'}}>
            <h1>Contact</h1>
            <div style={{display:'flex'}}>
            <div style={{display:'flex',borderRadius:'10px',boxShadow:' 0 4px 8px rgba(0, 38, 0, 33.1)',flexDirection:'column',padding:'10px',width:'30%'}}>
                <li><Link to='address' style={{color:'black'}}>Address</Link></li> 
                <li><Link to='email' style={{color:'black'}} >Email</Link></li>
                <hr style={{marginTop:'10px',marginBottom:'10px'}}/>
                
            </div>
            <div style={{padding:"20px"}}><Outlet /></div>
            </div>
            
        </div>
    )
}


export default Contact