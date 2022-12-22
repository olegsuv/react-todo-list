import React, { useState } from 'react';

function TodoForm({onSubmit}) {
    const [itemString, setItemString] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(itemString);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" className="itemInput" onKeyUp={(e) => setItemString(e.target.value)} />
            <button className="addItemButton">Add Item</button>
        </form>
    );
}

export default TodoForm;