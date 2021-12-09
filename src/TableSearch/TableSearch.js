import React, {useState} from 'react'
import './TableSearch.css'

export default (props) => {

    const [value, setValue] = useState('')

    const valueChangeHandler = event => {
        setValue(event.target.value)
        props.onSearch(event.target.value)
    }

    return (
        <div className="input-group mb-3 mt-3">
            <input 
                type="text" 
                className="form-control" 
                placeholder="Search" 
                onChange={valueChangeHandler}
                value={value}
            />
            <div className="input-group-append">
                <button 
                    className="btn btn-outline-secondary" 
                    type="button"
                    onClick={() => props.onSearch(value)}
                >Button</button>
            </div>
        </div>
    )
}