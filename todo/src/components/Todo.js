import React, { Component } from 'react';

class Todo extends Component {

    handleCompleteTodo = e => {
        e.preventDefault();
        this.props.completeTodo(this.props.todo.id);
    }

    render() {
        return (
            <div className={`todo-item${this.props.todo.completed ? ' completed' : ''}`} onClick={this.handleCompleteTodo}>
                {this.props.todo.value}
            </div>
        )
    }
}

export default Todo;