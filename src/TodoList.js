import React from 'react';
import {Todo} from './Todo';

export class TodoList extends React.Component {
    render() {
        const listTodo = this.props.todoList.map((todoItem, index)=>(
            <li key = {index}>
                <Todo
                    text = {todoItem.text}
                    priority = {todoItem.priority}
                    dueDate = {todoItem.dueDate}
                />
            </li>
        ));
        return (
            <ul>
                <h5>{listTodo}</h5>
            </ul>
        );
    }
}