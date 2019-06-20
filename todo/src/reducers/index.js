import { ADDTODO, COMPLETETODO } from '../actions';

const initialState = {
    todos: []
}

export default (state = initialState, action) => {
    switch(action.type) {
        case ADDTODO:
            console.log('reducers/index.js: ADDTODO')
            return {
                todos: [...state.todos, { value: action.payload, completed: false }]
            }
        case COMPLETETODO:
            console.log('reducers/index.js: COMPLETETODO')
            return {}
        default:
            console.log('reducers/index.js: default')
            return state;
    }
};