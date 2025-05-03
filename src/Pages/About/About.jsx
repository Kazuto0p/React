import React from "react";
import { useParams } from "react-router-dom";

const About = () => {
    const {username} = useParams()
    return (
        <div>
            <h1>About   : {username}</h1>
        </div>
    )
}

export default About