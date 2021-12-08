import React from 'react'

export default props => {

    return (
        <table className="table">
    <thead>
        <tr>
            <th onClick={props.onSort.bind(null, 'index')}>№</th>
            <th onClick={props.onSort.bind(null, 'Country')}>Country</th>
            <th onClick={props.onSort.bind(null, 'TotalConfirmed')}>Total Confirmed</th>
        </tr>
    </thead>
    <tbody>
        {props.data.map((item, index) => (
            <tr key={index}>
                <td>{item.index}</td>
                <td>{item.Country}</td>
                <td>{item.TotalConfirmed}</td>
            </tr>
        ))}
    </tbody>
    </table>
    )
}



