import React, { Component } from "react";
import "../App.css"

class Card extends Component {
    render(){
        return (
            <>
                <img className="carimg" src={this.props.path} alt=""/>
                <label htmlFor="name">Name : {this.props.name}</label>
                <label htmlFor="cost">Cost : $ {this.props.Cost} </label>
                
            </>
        )

    }
}


export default Card;