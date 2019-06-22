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
            <ListGroupItem className={`todo-item${this.props.todo.completed ? ' completed' : ''}`} onClick={this.handleCompleteTodo}>
                <p>{this.props.todo.value}</p>
                <Button color='danger' onClick={this.handleDeleteTodo}>delete</Button>
            </ListGroupItem>
        )
    }
}

export default Todo;