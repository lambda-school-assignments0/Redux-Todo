export const ADDTODO = 'ADDTODO';
export const COMPLETETODO = 'COMPLETETODO';

export const addTodo = (todo) => {
    console.log('actions/index.js: addTodo')
    return {
        type: ADDTODO,
        payload: todo
    }
};

export const completeTodo = (todoId) => {
    console.log('actions/index.js: completeTodo')
    return {
        type: COMPLETETODO,
        payload: todoId
    }
};