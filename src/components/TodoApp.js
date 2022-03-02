import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
    const [todos, setTodos] = useState([]);

    const addTodoHandler = (input) => {
        // console.log(input)
        const newTodo = {
            id: Math.floor(Math.random() * 1000),
            text: input,
            isCompleted: false,
        };
        setTodos([...todos, newTodo])

    }
    const CompleteTodo = (id) => {
        const index = todos.findIndex((todo) => todo.id === id)
        console.log(index)
        //clone: do not mautte
        const selectedTodo = { ...todos[index] }
        selectedTodo.isCompleted = !selectedTodo.isCompleted;
        //clone : todos!
        const updatedTodos = [...todos]
        updatedTodos[index] = selectedTodo;
        setTodos(updatedTodos)
    }
    const removeTodo = (id) => {
        // console.log(id)
        const filterdTodos = todos.filter((p) => p.id !== id);
        setTodos(filterdTodos);
    }

    return (
        <div className="container">
            <TodoForm addTodoHandler={addTodoHandler} />
            <TodoList todos={todos} onComplete={CompleteTodo} onDelete={removeTodo} />
        </div>
    );
}

export default TodoApp;