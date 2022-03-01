const Todo = ({ todo }) => {
    return (
        <div className="todo">
            <div>{todo.text}</div>
            <div>
                <button>Edit</button>
                <button>Complete</button>

            </div>
        </div>
    );
}

export default Todo;