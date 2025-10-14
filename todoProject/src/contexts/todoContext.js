import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
        id: 1,
        todo: "task one",
        completed: false
        }
    ],
    addTodo: () => {},
    updateTodo: () => {},
    deleteTodo: () => {},
    toggleTodo: () => {}
})

export const TodoProvider = TodoContext.Provider

export const useTodo = () => {
    return useContext(TodoContext)
}