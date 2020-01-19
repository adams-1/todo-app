import React from 'react'

export default class TodoItem extends React.Component {

    render() {

        const {title} = this.props

        return (
            <div>
               <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                   <h6>{title}</h6>
                   <div className="todo-icon">
                       <span className="mx-2 text-success"> e </span>
                       <span className="mx-2 text-danger">x</span>
                   </div>
               </li>
            </div>
        )
    }
}