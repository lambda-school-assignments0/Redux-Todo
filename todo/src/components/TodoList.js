import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, completeTodo, deleteTodo } from '../actions';
import TodoForm from './TodoForm';
import Todo from './Todo';

class TodoList extends Component {
    render() {
        console.log(this)
        return(
            <div className='todo-list'>
                <h1>Todo List:</h1>
                {this.props.todos.map(todo => (
                    <Todo todo={todo} key={todo.id} completeTodo={this.props.completeTodo} deleteTodo={this.props.deleteTodo}/>
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

export default connect(mapStateToProps, { addTodo, completeTodo, deleteTodo })(TodoList);