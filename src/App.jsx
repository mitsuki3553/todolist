import React, { useState } from "react";
import { InputTodo } from "./components/inputTodo";
import { ImcompleteTodos } from "./components/incompleteTodos";
import { CompleteTodos } from "./components/completeTodos";

import "./style.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
  // const allTodos = [...incompleteTodos, ...completeTodos];

  const onChangeTodoText = (e) => setTodoText(e.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (todo, index) => {
    const newTodos = [...completeTodos, todo];

    onClickDelete(index);
    setCompleteTodos(newTodos);
  };

  const onClickReturn = (todo, index) => {
    const newTodos = [...incompleteTodos, todo];
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompleteTodos.length >= 5}
      />
      {incompleteTodos.length >= 5 && <p>登録できるtodoは5こまで</p>}
      <ImcompleteTodos
        incompleteTodos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos
        completeTodos={completeTodos}
        onClickReturn={onClickReturn}
      />
    </>
  );
};
