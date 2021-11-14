import React from 'react'

export const Dropdown = (props) => {
    const { options, triggerText }  = props;
    const dummy = ()=> {};

    return (
        <div>
            <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                {triggerText}
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                {options.map((item) => (
                    <li key={item}>
                        <button className="dropdown-item" type="button" onClick={dummy}>{item}</button>
                    </li>
                ))}
            </ul>
            </div>
        </div>
    )
}

