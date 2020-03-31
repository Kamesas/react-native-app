import React, { createContext, useState, useEffect } from "react";
import { _retrieveData, _setStoreData } from "../Utilits/asyncStorage";

const ContextTodoList = createContext({});

const ContextProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([]);
  const [importantList, setImportantList] = useState([]);
  const [completedList, setCompletedList] = useState([]);
  const [currentTodoList, setCurrentTodoLIst] = useState([]);

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
    _retrieveData("RN-tasks")
      .then(res => setTodoList(JSON.parse(res)))
      .catch(err => console.log("err", err));
  }, []);

  useEffect(() => {
    _setStoreData("RN-tasks", todoList);
    setImportantList(
      todoList.filter(item => item.important && !item.completed)
    );
    setCompletedList(todoList.filter(item => item.completed));
    setCurrentTodoLIst(todoList.filter(item => !item.completed));
  }, [todoList]);

  const onRemoveHandler = id => {
    setTodoList(prev => prev.filter(item => item.id !== id));
  };

  return (
    <ContextTodoList.Provider
      value={{
        todoList,
        importantList,
        completedList,
        currentTodoList,
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
