import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate()
    const moveAbout = () => {
        navigate('/about/alan')
    }


    return (
        <div>
            <h1>Home</h1>
            <button onClick={moveAbout}>About</button>
        </div>
    )
}

export default Home