import React from 'react'

const Todos = ({todos, deleteTask, s}) => {
    console.log(todos);
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item" key={todo.id}>
                    <span>{todo.content}</span><pre></pre>
                    <button className="waves-effect waves-light btn-small" onClick={() => {deleteTask(todo.id)}}>Delete</button>
                </div>
            )
        })
    ) : (
        <p className="center">You have no tasks left! :)</p>
    )

    return (
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default Todos