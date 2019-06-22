import React, { Component } from 'react';
import { InputGroup, InputGroupText, InputGroupAddon, Input } from 'reactstrap';
import { Button } from 'reactstrap';

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
                <InputGroup>
                    <InputGroupAddon addonType='prepend'>
                        <InputGroupText>Add New Todo</InputGroupText>
                    </InputGroupAddon>
                    <Input 
                        type='text'
                        name='newTodo'
                        value={this.state.newTodo}
                        onChange={this.handleTextChange}
                    />
                    <InputGroupAddon addonType='append'>
                        <Button color='primary'>Submit</Button>
                    </InputGroupAddon>
                </InputGroup>
            </form>
        )
    }
}