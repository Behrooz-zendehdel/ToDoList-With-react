import { useState } from "react";
import NavBar from "./NavBar";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (input) => {
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
        const filterdTodos = todos.filter((p) => p.id !== id);
        setTodos(filterdTodos);
    }
    const updateTodo = (id, newValue) => {
        const index = todos.findIndex((todo) => todo.id === id)
        const selectedTodo = { ...todos[index] }
        selectedTodo.text = newValue;
        const updatedTodos = [...todos]
        updatedTodos[index] = selectedTodo;
        setTodos(updatedTodos)
    }


    return (
        <div className="container">
            <NavBar UnCompletedTodos={todos.filter((p) => !p.isCompleted  ).length} />
            <TodoForm submitTodo={addTodo} />
            <TodoList
                todos={todos}
                onComplete={CompleteTodo}
                onDelete={removeTodo}
                onUpdateTodo={updateTodo}
            />
        </div>
    );
}

export default TodoApp;