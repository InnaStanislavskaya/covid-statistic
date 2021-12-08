import React from 'react'

export default props => (
    <table className="table">
    <thead>
        <tr>
            <th>ID</th>
            <th>Country</th>
            <th>Total Confirmed</th>
        </tr>
    </thead>
    <tbody>
        {props.data.map(item => (
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.Country}</td>
                <td>{item.TotalConfirmed}</td>
            </tr>
        ))}
    </tbody>
    </table>
)


