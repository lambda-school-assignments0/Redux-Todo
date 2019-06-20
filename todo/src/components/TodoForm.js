import React, { Component } from 'react';

export default class TodoForm extends Component {
    state = {
        newTodo: ''
    }

    handleTextChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleAddTodo = e => {
        e.preventDefault();
        this.props.addTodo(this.state.newTodo);
        this.setState({ newTodo: '' })
    }

    render() {
        return(
            <form className='todo-form' onSubmit={this.handleAddTodo}>
                <input 
                    type='text'
                    name='newTodo'
                    placeholder='Todo...'
                    value={this.state.newTodo}
                    onChange={this.handleTextChange}
                />
                <button>Submit</button>
            </form>
        )
    }
}