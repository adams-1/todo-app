import React from 'react'

function TodoInput(props) {

    const {item, handleChange, handleSubmit} = props;

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

export default TodoInput