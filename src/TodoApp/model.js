import { TodoApp } from "./TabsSreen/TodoApp";
import { ImportantTodo } from "./TabsSreen/ImportantTodo";
import { CompletedTodo } from "./TabsSreen/CompletedTodo";
import { AllTodo } from "./TabsSreen/AllTodo";

export const tabNav = [
  { name: "Todo", label: "Todo", component: TodoApp, iconName: "add-to-list" },
  {
    name: "ImportantTodo",
    label: "Top",
    component: ImportantTodo,
    iconName: "flag"
  },
  {
    name: "CompletedTodo",
    label: "Done",
    component: CompletedTodo,
    iconName: "check"
  },
  {
    name: "AllTodo",
    label: "All",
    component: AllTodo,
    iconName: "list"
  }
];
