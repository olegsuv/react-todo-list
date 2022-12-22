import React from 'react';

function TodoItem({item, onComplete, onDelete}) {
    return (
        <div className="singleTodoItem">
            <div>
                {item.isCompleted ? <strike>{item.value}</strike> : item.value}
            </div>
            <div>
                <button className="markCompleteTodoItem" onClick={() => onComplete(item.id)}>Complete</button>
                <button className="removeTodoItem" onClick={() => onDelete(item.id)}>X</button>
            </div>
        </div>
    );
}

export default TodoItem;