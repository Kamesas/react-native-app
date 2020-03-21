import React, { createContext, useState, useEffect } from "react";
import { _retrieveData, _setStoreData } from "./Utilits/asyncStorage";

const ContextTodoList = createContext({});

const ContextProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    _retrieveData("RN-tasks").then(res => setTodoList(JSON.parse(res)));
  }, []);

  useEffect(() => {
    _setStoreData("RN-tasks", todoList);
  }, [todoList]);

  const onRemoveHandler = id => {
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
