import { ADDTODO, COMPLETETODO } from '../actions';

const initialState = {
    todos: []
}

export default (state = initialState, action) => {
    switch(action.type) {
        case ADDTODO:
            console.log('reducers/index.js: ADDTODO')
            return {
                todos: [...state.todos, { id: state.todos.length, value: action.payload, completed: false }]
            }
        case COMPLETETODO:
            console.log('reducers/index.js: COMPLETETODO')
            return {
                todos: state.todos.map((todo, index) => {
                    if (index !== action.payload) {
                        return todo
                    }

                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                })
            }
        default:
            console.log('reducers/index.js: default')
            return state;
    }
};