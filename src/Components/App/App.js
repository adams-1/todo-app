import React from 'react';
import TodoList from '../TodoList/TodoList';
import TodoItem from '../TodoInput/TodoInput'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'uuid';

class App extends React.Component {

    state = {
        items: [],
        id: 0,
        item: '',
        editItem: false
    }

    handleChange = (e) => { 
        this.setState({
            item: e.target.value
        });
    }

    handleSubmit = (e) => {
        console.log(e);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-8 mt-4">
                        <h3 className="text-capitalize text-center"> 
                            todo input</h3>
                        <TodoItem item={this.state.item} 
                                  handleChange={this.handleChange}
                                  handleSubmit={this.handleSubmit}
                        />
                        <TodoList />
                    </div>
                </div>
            </div>
        );
    }

}

export default App;