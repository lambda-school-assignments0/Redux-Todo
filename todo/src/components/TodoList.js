import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, completeTodo, deleteTodo, deleteAllCompleteTodo } from '../actions';
import TodoForm from './TodoForm';
import Todo from './Todo';
import { ListGroup } from 'reactstrap';
import { InputGroupAddon } from 'reactstrap';
import { ButtonGroup, Button } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class TodoList extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            modalDeleteAllCompleteTodo: false,
            view: 'all'
        }
    }

    toggleDeleteAllCompleteTodo = () => {
        this.setState(prevState => ({
            modalDeleteAllCompleteTodo: !prevState.modalDeleteAllCompleteTodo
        }));
    }

    handleDeleteAllCompleteTodo = e => {
        e.preventDefault();
        this.props.deleteAllCompleteTodo(this.props.todos);
        this.toggleDeleteAllCompleteTodo();
    }

    render() {
        console.log(this)
        return(
            <div className='todo-list'>
                <h1>Todo List:</h1>
                <div className='todo-controls'>
                    <div className='todo-controls-row'>
                        <ButtonGroup>
                            <InputGroupAddon addonType='prepend'>View: </InputGroupAddon>
                            <Button onClick={() => {}}>All</Button>
                            <Button onClick={() => {}}>Completed</Button>
                            <Button onClick={() => {}}>Incompleted</Button>
                        </ButtonGroup>
                    </div>
                    <div className='todo-controls-row'>
                        <ButtonGroup>
                            <Button color='danger' onClick={this.toggleDeleteAllCompleteTodo}>Delete All Complete</Button>
                            <Modal isOpen={this.state.modalDeleteAllCompleteTodo} toggle={this.toggleDeleteAllCompleteTodo}>
                                <ModalHeader toggle={this.toggleDeleteAllCompleteTodo}>Delete all completed todos?</ModalHeader>
                                <ModalBody>
                                    This action cannot be undone.
                                </ModalBody>
                                <ModalFooter>
                                    <Button color='danger' onClick={this.handleDeleteAllCompleteTodo}>Delete All</Button>
                                    <Button color='secondary' onClick={this.toggleDeleteAllCompleteTodo}>Cancel</Button>
                                </ModalFooter>
                            </Modal>
                        </ButtonGroup>
                    </div>
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

export default connect(mapStateToProps, { addTodo, completeTodo, deleteTodo, deleteAllCompleteTodo })(TodoList);