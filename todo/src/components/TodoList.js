import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, completeTodo } from '../actions';
import TodoForm from './TodoForm';

class TodoList extends Component {
    render() {
        return(
            <div className='todo-list'>
                <h1>Todo List:</h1>
                {this.props.todos.map(todo => (
                    <div className='todo-item'>
                        {todo.value}
                    </div>
                ))}
                <TodoForm addTodo={this.props.addTodo}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, { addTodo, completeTodo })(TodoList);