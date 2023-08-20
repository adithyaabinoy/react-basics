import React, { useState } from "react";

const Todo = () => {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);

  const add_todo = () => {
    if (!input) {
    } else {
      setTodo([...todo, input]);
      setInput("");
    }
  };

  const remove = (id) => {
    console.log("remove")
    const update_todo = todo.filter((e, i) => {
      return i !== id;
    });
    setTodo(update_todo);
  };

  return (
    <div>
      <h1>todo</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button onClick={add_todo}>ADD</button>

      {todo.map((e, i) => {
        return (
          <p key={i}>
            {e}
            <button onClick={(i) => remove(i)}>DELETE</button>
          </p>
        );
      })}
    </div>
  );
};

export default Todo;
