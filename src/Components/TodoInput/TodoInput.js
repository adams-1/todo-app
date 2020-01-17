import React from 'react'

export default class TodoInput extends React.Component {

    render() {
        return (
            <div className="card card-body my-3">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text bg-primary text-white">
                            !
                        </div>
                    </div>
                    <input type="text"
                            className="form-control text-capitalize"
                            placeholder="add a todo item">
                    </input>
                    <button type="submit" className="btn btn-primary"> Add</button>
                </div>
                
            </div>
        );
    }
}