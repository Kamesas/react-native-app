import React, { createContext, useState, useEffect } from "react";
import { _retrieveData, _setStoreData } from "../Utilits/asyncStorage";

const ContextTodoList = createContext({});

const ContextProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([]);

  const completedHandler = id => {
    const copyState = todoList;
    copyState.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      }
      return todo;
    });

    setTodoList([...copyState]);
  };

  const onImportantHandler = id => {
    const copyState = todoList;
    copyState.map(todo => {
      if (todo.id === id) {
        todo.important = !todo.important;
        return todo;
      }
      return todo;
    });

    setTodoList([...copyState]);
  };

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
      value={{
        todoList,
        setTodoList,
        onRemoveHandler,
        completedHandler,
        onImportantHandler
      }}
    >
      {children}
    </ContextTodoList.Provider>
  );
};

export { ContextTodoList, ContextProvider };
