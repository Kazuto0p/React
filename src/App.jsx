import React from "react";
import './App.css';


class App extends React.Component {
  state={
    count:0
  }

  increament=()=>{
    this.setState({count:this.state.count+1})
  }
  decreament=()=>{
    
    if(this.state.count>0)
      this.setState({count:this.state.count-1
    })
   
  }

  reset=()=>{

    this.setState({count:0})
  }
    render() {
      return (
        <div className="main">
          <div className="child"></div>
          <button onClick={this.decreament}>-</button>
          <span>Count is {this.state.count}</span>
          <button onClick={this.increament}>+</button>

          <button onClick={this.reset}>Reset</button>
        </div>
      )
    }

}

export default App;