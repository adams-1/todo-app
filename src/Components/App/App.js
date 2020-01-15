import React from 'react';
import TodoList from '../TodoList/TodoList';
import TodoItem from '../TodoInput/TodoInput'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'uuid';

function App() {
    return (
        <div>
            Hello From App
            <TodoItem />
            <TodoList />
        </div>
    );

}

export default App;