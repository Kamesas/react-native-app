import React, { createContext, useState } from "react";

const ContextTodoList = createContext({});

const ContextProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([]);

  const onRemoveHandler = id => {
    console.log(id);
    setTodoList(prev => prev.filter(item => item.id !== id));
  };

  return (
    <ContextTodoList.Provider
      value={{ todoList, setTodoList, onRemoveHandler }}
    >
      {children}
    </ContextTodoList.Provider>
  );
};

export { ContextTodoList, ContextProvider };
