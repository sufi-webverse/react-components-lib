import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import {
  add,
  addAsync,
  initTodosList,
  remove,
} from "../store/todos/todosSlice";

function Todos() {
  const todosList = useSelector((list: RootState) => list.todo.list);
  const dispatch = useDispatch<AppDispatch>();
  const [ item, setItem] = useState("");

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:1337/api/todos", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        //body: JSON.stringify(data)
      });
      dispatch(initTodosList((await response.json()).data));
    })();
  }, []);

  async function handleSubmit(e: any) {
    e.preventDefault();
    //dispatch(addAsync(item));

    const response = await fetch("http://localhost:1337/api/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            data:{title: item}
        })
      });
    setItem("");
  }

  function removeItem(item: any) {
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
        <button className="button-github" type="submit">
          add
        </button>
      </form>
      {todosList.map((item:any) => {
        return (
          <>
            <h2>{item.title}</h2>
            <button onClick={() => removeItem(item.id)}>remove</button>
          </>
        );
      })}
    </div>
  );
}

export default Todos;
