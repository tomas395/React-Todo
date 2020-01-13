import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      newItem: ""
    };
  }

  handleChanges = event => {
    this.setState({
      newItem: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addItem(this.state.newItem);
    this.setState({ newItem: "" });
  };

  render() {
    console.log("rendering form");
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="item">Enter your new task here: </label>
          <input
            type="text"
            placeholder="Please enter task"
            name="item"
            id="item"
            value={this.state.newItem}
            onChange={this.handleChanges}
          />
          <button>Add Task</button>
          <button onClick={this.props.clearDone}>
            Clear your completed task
          </button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
