import React from 'react';
import TodoList from '../TodoList/TodoList';
import TodoItem from '../TodoInput/TodoInput'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'uuid';

function App() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-10 mx-auto col-md-8 mt-4">
                    <h3 className="text-capitalize text-center"> 
                        todo input</h3>
                    <TodoItem />
                    <TodoList />
                </div>
            </div>
        </div>
    );

}

export default App;