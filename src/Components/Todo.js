import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";

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

  const btnClick = () => {
    alert("yay i learned props wohooo ..")
  }
  return (
    <div>
      <Button name="click here" type="submit" onClick={btnClick} color="blue"/>
      <Input type="text" value={inp} onChange={(e) => {
        setInp(e.target.value);
      }} />
      {/* <input
        type="text"
        value={inp}
        onChange={(e) => {
          setInp(e.target.value);
        }}
      /> */}

      {/* <button onClick={addToDo}>ADD</button> */}
      <Button onClick={addToDo} name="ADD" color="violet" bg="green"/>
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
