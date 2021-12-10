import React, {useState} from 'react'
import './TableSearch.css'
import logo from './images/logo.png'

function TableSearch (props) {

    const [value, setValue] = useState('')

    const valueChangeHandler = event => {
        setValue(event.target.value)
        props.onSearch(event.target.value)
    }

    return (
        <div className="header">
            <div className="header_logo">
                <img src={logo} alt="logo"/>
                <div className="header_logo_text">STATISTIC</div>
            </div>
            <div className="input-group w-25 mb-3 mt-3 header_search">
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
        </div>
    )
}

export default TableSearch