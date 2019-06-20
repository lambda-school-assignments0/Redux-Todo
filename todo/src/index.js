// import dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// import css
import './index.css';

// import components
import TodoList from './components/TodoList';

// import reducers
import todo from './reducers';

// create store
const store = createStore(todo);

ReactDOM.render(<Provider store={store}><TodoList /></Provider>, document.getElementById('root'));
