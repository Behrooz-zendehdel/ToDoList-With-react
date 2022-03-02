const NavBar = ({ UnCompletedTodos }) => {
    return (
        <header>
            {UnCompletedTodos ?
                (<>
                    <span>{UnCompletedTodos}</span> <h2> 1 are not completed</h2>
                </>
                ) : (
                    <h2>
                        set your today todos
                    </h2>
                )}
        </header>
    );
}

export default NavBar;