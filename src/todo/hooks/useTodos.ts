import { TodoContext } from './../context/TodoContext';
import { useContext } from 'react';
export const useTodos = () => {
    const { todoState, toggleTodo } = useContext(TodoContext);
    const { todos } = todoState;

    return {
        todos: todos,
        pendingTodos: todos.filter( todo => !todo.completed),
        toggleTodo
    }
};