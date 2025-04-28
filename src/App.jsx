import React from "react";
import './App.css';


class App extends React.Component {

state={

  count:0
}

flag = null;

start =()=>{
  
 this.flag=setInterval(() => {
    this.setState({count:this.state.count+1})
  }, 1000);
}
stop = () => {
  clearInterval(this.flag);
  this.flag = null;
};


reset = () => {
  this.stop(); 
  this.setState({ count: 0 });
};

  render(){

    return (
      <div>
        <span>Count {this.state.count}</span>
        <button onClick={this.start}>Start</button>
        <button onClick={this.stop}>Stop</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    )
  }
}

export default App