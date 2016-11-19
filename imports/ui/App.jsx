import React, { Component } from 'react';
 
import Task from './Task.jsx';
 
// App component - represents the whole app
export default class App extends Component {
  getTasks() {   
  }
 
  renderTasks() {
    return this.getTasks().map((task) => (
      <Task key={task._id} task={task} />
    ));
  }
 
  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>
        </header>
 
        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    );
  }
}


App.propTypes = {
  tasks: PropTypes.array.isRequired,
};
 
export default createContainer(() => {
  return {
    tasks: Tasks.find({}).fetch(),
  };
}, App);