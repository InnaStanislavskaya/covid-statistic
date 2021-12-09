import React from 'react';
import "./DetailRowView.css"

function DetailRowView (props){
    console.log(props)
    return (
        <div className="detailRowView">
        <div className="detailRowView_content">
            <h3>{props.country.Country}</h3>
            <div>Total Confirmed <b>{props.country.TotalConfirmed}</b></div>
            <div>Total Deaths <b>{props.country.TotalDeaths}</b></div>
            <div>Total Recovered <b>{props.country.TotalRecovered}</b></div>
            <button onClick = {props.onOkPressed.bind(null)}>OK</button>
        </div>
    </div>
    )
}

export default DetailRowView