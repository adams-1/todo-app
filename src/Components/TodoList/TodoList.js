import React from 'react';
import TodoItem from '../TodoItem/TodoItem';

function TodoList(props) {
    const {items} = props;
    const todoList = items.map( item => <TodoItem key={item.id} title={item.title} />);

    return (
        <div>
            <ul className="list-group my-5">
            <h3 className="text-capitalize text-center"> todo list</h3>
            {todoList}
            <button
                type="button"
                className="btn btn-danger btn-block text-capitalize mt5"
            > clear list
            </button> 
            </ul>
        </div>
    );
}

export default TodoList;