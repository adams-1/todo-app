import React from 'react';
import TodoItem from '../TodoItem/TodoItem';

export default class TodoList extends React.Component {

    render() {
        return (
            <div>
                 Hello from TodoList Component
                <TodoItem />
            </div>
        );
    }
}