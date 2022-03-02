import { useState } from "react"
import  Select  from 'react-select'

const NavBar = ({ UnCompletedTodos, status, onChange, selectedOption }) => {

    const options = [
        { value: 'All', label: 'All' },
        { value: 'Completed', label: 'Completed' },
        { value: 'Uncompleted', label: 'Uncompleted' },

    ]


    if (!UnCompletedTodos) return <h2>set your today todos</h2>




    return (
        <header>


            <span>{UnCompletedTodos}</span> <h2> 1 are not completed</h2>
            <Select
            className="selected"
                value={selectedOption}
                onChange={onChange}
                options={options}
            />
            {/* <select onChange={onSelect} value={status}>
                <option value="All">All</option>
                <option value="Completed">Completed</option>
                <option value="Uncompleted">Uncompleted</option>
            </select> */}
        </header>
    );
}

export default NavBar;