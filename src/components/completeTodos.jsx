import React from "react";

export const CompleteTodos = (props) => {
  const { completeTodos, onClickReturn } = props;
  return (
    <div className="complete-area">
      <p className="title">完了したtodo</p>
      <ul>
        {completeTodos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickReturn(todo, index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
