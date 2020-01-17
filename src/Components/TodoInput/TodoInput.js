import React from 'react'

export default class TodoInput extends React.Component {

    render() {

        const {item, handleChange, handleSubmit} = this.props;

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
                            placeholder="add a todo item"
                            value={item}
                            onChange={handleChange}
                    />                    
                </div>
                <button type="submit" onClick={handleSubmit} className="btn btn-primary mt-3"> Add</button>
                
            </div>
        );
    }
}