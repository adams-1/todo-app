import React from 'react';
import TodoList from '../TodoList/TodoList';
import TodoItem from '../TodoInput/TodoInput'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'uuid';
import uuid from 'uuid';

class App extends React.Component {

    state = {
        items: [],
        id: uuid(),
        title: '',
        editItem: false
    }

    handleChange = (e) => { 
        this.setState({
            title: e.target.value
        });
    }

    handleSubmit = (e) => {
        
        const newItem = {
            id: this.state.id,
            title: this.state.title
        };

        const updateItemsList = this.state.items.concat([newItem]);

        this.setState({
            items:updateItemsList,
            id: uuid(),
            title: '',
            editItem: false
        });
    }

    handleClear = () => {
        this.setState({
            items:[]
        });
    }

    handleDelete = (itemId) => {

        const updatedItemsList = this.state.items.filter( item => item.id !== itemId);

        this.setState({
            items: updatedItemsList
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-8 mt-4">
                        <h3 className="text-capitalize text-center"> 
                            todo input</h3>
                        <TodoItem item={this.state.title} 
                                  handleChange={this.handleChange}
                                  handleSubmit={this.handleSubmit}
                        />
                        <TodoList items={this.state.items} handleClear={this.handleClear} handleDelete={this.handleDelete}/>
                    </div>
                </div>
            </div>
        );
    }

}

export default App;