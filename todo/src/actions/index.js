export const ADDTODO = 'ADDTODO';
export const COMPLETETODO = 'COMPLETETODO';
export const DELETETODO = 'DELETETODO';
export const DELETEALLCOMPLETETODO = 'DELETEALLCOMPLETETODO';

export const addTodo = (todo) => {
    console.log('actions/index.js: addTodo');
    return {
        type: ADDTODO,
        payload: todo
    }
};

export const completeTodo = (todoId) => {
    console.log('actions/index.js: completeTodo');
    return {
        type: COMPLETETODO,
        payload: todoId
    }
};

export const deleteTodo = (todoId) => {
    console.log('actions/index.js: deleteTodo');
    return {
        type: DELETETODO,
        payload: todoId
    }
}

export const deleteAllCompleteTodo = () => {
    console.log('action/index.js: deleteAllCompleteTodo');
    return {
        type: DELETEALLCOMPLETETODO,
    }
}