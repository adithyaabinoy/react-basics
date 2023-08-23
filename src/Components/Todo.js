import React, { useState } from "react";

const Todo = () => {
  const [inp, setInp] = useState("");
  const [todo, setTodo] = useState([]);

  const addToDo = () => {
    if (!inp) {
    } else {
      setTodo([...todo, inp]);
      setInp("");
    }
  };
  const deleteTodo = (i) => {
    let updatedTodo = todo.filter((e, id) => {
      return id !== i;
    });
    setTodo(updatedTodo);
  };
  return (
    <div>
      <input
        type="text"
        value={inp}
        onChange={(e) => {
          setInp(e.target.value);
        }}
      />

      <button onClick={addToDo}>ADD</button>
      {todo.map((e, i) => {
        return (
          <p key={i}>
            {" "}
            {e}
            <button
              onClick={() => {
                deleteTodo(i);
              }}
            >
              delete
            </button>
          </p>
        );
      })}
    </div>
  );
};

export default Todo;
