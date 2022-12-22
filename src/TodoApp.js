import React, {useState} from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

function TodoApp() {
    const [items, setItems] = useState([]);
    const onSubmit = (item) => {
        setItems([...items, {isCompleted: false, id: item + Math.random(), value: item}]);
    }

    const onComplete = (id) => {
        const item = items.find(item => item.id === id)
        if (item) {
            item.isCompleted = true;
        }
        setItems([...items]);
    }
    const onDelete = (id) => {
        setItems([...items.filter(item => item.id !== id)]);
    }

    return (
        <div className="app">
            <div className="todo-list">
                {items.map((item, i) => <TodoItem key={item + i} item={item} onComplete={onComplete}
                                                  onDelete={onDelete}/>)}
                <TodoForm onSubmit={onSubmit}/>
            </div>
        </div>
    );
}

export default TodoApp;