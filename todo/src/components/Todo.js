import React, { Component } from 'react';
import { ListGroupItem } from 'reactstrap';
import { Button } from 'reactstrap';

class Todo extends Component {

    handleCompleteTodo = e => {
        e.preventDefault();
        this.props.completeTodo(this.props.todo.id);
    }

    handleDeleteTodo = e => {
        e.preventDefault();
        this.props.deleteTodo(this.props.todo.id);
    }

    render() {
        return (
            <ListGroupItem onClick={this.handleCompleteTodo}>
                <div className={`todo-item${this.props.todo.completed ? ' completed' : ''}`}>{this.props.todo.value} <i className={`far fa-check-square${this.props.todo.completed ? ' completed' : ' hidden'}`}></i></div>
                <Button color='danger' onClick={this.handleDeleteTodo}>delete</Button>
            </ListGroupItem>
        )
    }
}

export default Todo;