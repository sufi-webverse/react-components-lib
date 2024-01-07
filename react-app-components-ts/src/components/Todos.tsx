import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { add, remove } from "../store/todos/todosSlice";

function Todos() {
  const todosList = useSelector((list: RootState) => list.todo.list);
  const dispatch = useDispatch();
  const [item, setItem] = useState("");
  function handleSubmit(e: any) {
    e.preventDefault();
    dispatch(add(item));
    setItem("");
  }

  function removeItem(item: any){
    dispatch(remove(item));
  }

  return (
    <div>
      Todos
      <form onSubmit={handleSubmit}>
        <input
          placeholder="add item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button className="button-github" type="submit">add</button>
      </form>
      {todosList.map((item) => {
        return (
          <>
            <h2>{item}</h2>
            <button onClick={()=>removeItem(item)}>remove</button>
          </>
        );
      })}
    </div>
  );
}

export default Todos;
