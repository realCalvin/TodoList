import React, {Component} from 'react';
import Todos from './todos'
import AddTodo from './AddTask'
import Cookies from 'js-cookie'

class App extends Component{
  state = {
    todos: [
      
    ]
  }
  s = true;
  componentDidMount(){
    const c = Object.values(Cookies.get());
    var obj = c.map(todo => {
      return(JSON.parse(todo))
    });
    this.setState({
      todos: obj
    })
  }
  displayAlert(type){
    if(type === "error"){
      document.getElementById('alert').innerHTML = "You have not completed this task on your list yet! :(";
    }
  }
  deleteTask = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    })
    Cookies.remove(id);
    this.setState({
      todos: todos
    })
  }
  addTask = (todo) => {
    // check if duplicate
    var present = false;
    for(var i in this.state.todos){
      if(this.state.todos[i].content === todo.content){
        present = true;
      }
    }

    if(!present){
      document.getElementById('alert').innerHTML = "";
      todo.id = Math.random();
      const todos = [...this.state.todos, todo];
      this.setState({
        todos: todos
      })
      Cookies.set(todo.id, JSON.stringify(todo), { expires: 30 });
      this.s = false;
    }else{
      this.displayAlert("error");
    }
  }
  render(){
    console.log(this.state.todos)
    return (
      <div className="App container">
        <h1 className="center teal-text">Todo List</h1>
        <Todos deleteTask={this.deleteTask} todos={this.state.todos} s={this.s}/>
        <AddTodo addTask={this.addTask}/>
        <div id="alert" className="red-text text-lighten-1"></div>
      </div>
    );
  }
}

export default App;
