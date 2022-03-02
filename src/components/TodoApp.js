import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [filteredTodos, setFilteredTodos] = useState([]);
    const [selectedOption, setSelectedOption] = useState("All");


    useEffect(() => {
        filterTodos(selectedOption.value)
    }, [todos, selectedOption])


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
    const selectHandler = (e) => {
        setSelectedOption(e)
        filterTodos(e.value)
    }
    const filterTodos = (status) => {


        switch (status) {
            case "Completed":
                setFilteredTodos(todos.filter((p) => p.isCompleted))
                break
            case "Uncompleted":
                setFilteredTodos(todos.filter((p) => !p.isCompleted))
                break
            default:
                setFilteredTodos(todos)

        };
    };


    return (
        <div className="container">
            <NavBar
                UnCompletedTodos={todos.filter((p) => !p.isCompleted).length}
                selectedOption={selectedOption}
                onChange={selectHandler}

            />
            <TodoForm submitTodo={addTodo} />
            <TodoList
                todos={filteredTodos}
                onComplete={CompleteTodo}
                onDelete={removeTodo}
                onUpdateTodo={updateTodo}
            />
        </div>
    );
}

export default TodoApp;