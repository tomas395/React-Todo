import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

const data = [
  {
    task: "Organize Garage",
    id: 1,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 2,
    completed: false
  },

  {
    task: "Play Vidya Gaemz",
    id: 3,
    completed: false
  },
  {
    task: "Sleep",
    id: 4,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toDoStuff: data
    };
  }
  addItem = name => {
    const newItem = {
      task: name,
      id: Date.now(),
      completed: false
    };
    this.setState({
      toDoStuff: [...this.state.toDoStuff, newItem]
    });
  };

  toggleClear = id => {
    this.setState({
      toDoStuff: this.state.toDoStuff.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.done
          };
        } else {
          return item;
        }
      })
    });
  };

  clearDone = () => {
    this.setState({
      toDoStuff: this.state.toDoStuff.filter(task => !task.done)
    });
  };

  render() {
    return (
      <div>
        <h1>Welcome to your Todo App!</h1>
        <h2>What do you need to do?</h2>
        <TodoForm addItem={this.addItem} clearDone={this.clearDone} />
        <TodoList
          toggleClear={this.toggleClear}
          toDoStuff={this.state.toDoStuff}
        />
      </div>
    );
  }
}
export default App;
