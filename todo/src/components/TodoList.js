import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, completeTodo, deleteTodo } from '../actions';
import TodoForm from './TodoForm';
import Todo from './Todo';
import { ListGroup } from 'reactstrap';
import { InputGroup, InputGroupText, InputGroupAddon, Input } from 'reactstrap';
import { ButtonGroup, Button } from 'reactstrap';

class TodoList extends Component {
    render() {
        console.log(this)
        return(
            <div className='todo-list'>
                <h1>Todo List:</h1>
                <div className='todo-controls'>
                    <p className='todo-views'>
                        <ButtonGroup>
                            <InputGroupAddon addonType='prepend'>View: </InputGroupAddon>
                            <Button>All</Button>
                            <Button>Completed</Button>
                            <Button>Incompleted</Button>
                        </ButtonGroup>
                    </p>
                    <p className='todo-nuke'>
                        <ButtonGroup>
                            <Button color='danger'>Delete All Complete</Button>
                        </ButtonGroup>
                    </p>
                </div>
                <ListGroup>
                    {this.props.todos.map(todo => (
                        <Todo todo={todo} key={todo.id} completeTodo={this.props.completeTodo} deleteTodo={this.props.deleteTodo}/>
                    ))}
                </ListGroup>
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