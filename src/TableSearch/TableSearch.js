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
            <div className="header_search">
                <input 
                    type="text" 
                    placeholder="Search..." 
                    onChange={valueChangeHandler}
                    value={value}
                />
                <button 
                    type="button"
                    onClick={() => props.onSearch(value)}
                    ><i className="fas fa-search icon"></i></button>
            </div>
        </div>
    )
}

export default TableSearch