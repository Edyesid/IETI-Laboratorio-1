import React from 'react';
import {TodoList} from './TodoList';

export class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '', priority: 0, dueDate: null};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList todoList={this.state.items} />
        <form onSubmit={this.handleSubmit}>

          <label htmlFor="text">
            New Text
          </label>
          <input
            id="text"
            type="text"
            onChange={this.handleChange}
            value={this.state.text}
          />

          <label htmlFor="priority">
            New priority
          </label>
          <input
            id="priority"
            type="number"
            onChange={this.handleChange}
            value={this.state.priority}
          />

          <label htmlFor="dueDate">
            New dueDate
          </label>
          <input
            id="dueDate"
            type="date"
            onChange={this.handleChange}
            value={this.state.dueDate}
          />

          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    let Key = e.target.id;
    let value = e.target.value;
    this.setState({ [Key] : value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length || 
      this.state.priority === 0 ||
      this.state.dueDate === null) {
      return;
    }
    const newItem = {
      text: this.state.text,
      priority: this.state.priority,
      dueDate: this.state.dueDate
    };
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: '',
      priority: 0,
      dueDate: null
    }));
  }
}