import { useEffect, useRef, useState } from "react"
const TodoForm = (props) => {
    const [input, setInput] = useState(props.edit ? props.edit.text : "")
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    }, [])
    const changeHandler = (e) => {
        console.log(e.target.value)

        setInput(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault();
        if (!input) {
            alert('enter todo !')
            return;
        }
        props.submitTodo(input);
        setInput("")
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="formControl">
                <input
                    type="text"
                    value={input}
                    onChange={changeHandler}
                    placeholder={props.edit ? "update value..." : "new add to do ..."}

                    ref={inputRef}
                />
                <button className={`btn ${props.edit ? "updateTodo" : "addTodo"}`} type="submit">{props.edit ? "update" : "add"}</button>
            </div>





        </form>
    );
}

export default TodoForm;