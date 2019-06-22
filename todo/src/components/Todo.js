import React, { Component } from 'react';

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
            <div className={`todo-item${this.props.todo.completed ? ' completed' : ''}`} onClick={this.handleCompleteTodo}>
                <button onClick={this.handleDeleteTodo}>x</button>{' '}
                {this.props.todo.value}
            </div>
        )
    }
}

export default Todo;