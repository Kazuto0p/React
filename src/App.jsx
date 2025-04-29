import React ,{Component}from "react";
import './App.css'


class Todo extends Component {


  constructor(props) {
    super(props)

    this.state = {
      input:"",
      todos:[]
    }
    // console.log("Constructor rendered");

    
  }

  componentDidMount() {
    // console.log("Component Mounted");
    
  }

  componentDidUpdate() {
    console.log("Component Updated");
    console.log(this.state.todos);
    
  }

  componentWillUnmount() {
    console.log("Component Deleted");
    
  }

  handleChange = (e)=>{

    this.setState({input:e.target.value})
  }

  addTask = ()=>{

    this.setState({

      todos:[...this.state.todos,this.state.input],
      input:""
    })
  }

  delete = (indextoRemove)=>{
    
    const newTodo = this.state.todos.filter((_,index)=>index!==indextoRemove)

    this.setState({

      todos:newTodo,
    })
  }

  render() {
    console.log("component rendered");
    return (
      <div className="main">

        <h1>To-do List</h1>

        <input  type="text" placeholder="Enter your task" value={this.state.input} onChange={this.handleChange}/>

        <button onClick={this.addTask} >Add</button>
        
        <ul>

          {this.state.todos.map((task,index)=>(

            <li key={index}>{index+1} {task} <button  onClick={()=>this.delete(index)}
             >Delete</button> </li>
          ))}
        </ul>
      </div>
    )
    
  }
}

export default Todo;
