import { useState } from "react"

const TodoForm = () => {
    const [todo, setTodo] = useState("")
    const changeHandler = (e) => {
        setTodo(e.target.value)
    }
    return (
        <form >
            <input
                type="text"
                value={todo}
                onChange={changeHandler}
            />
            <button>add</button>
        </form>
    );
}

export default TodoForm;