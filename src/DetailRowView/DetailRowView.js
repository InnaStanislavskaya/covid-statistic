import React from 'react';
import "./detailRowView.css"

export default ({country}) => (
    <div className="detailRowView">
        <div className="detailRowView_content">
            <h3>{country.Country}</h3>
            <div>Total Confirmed <b>{country.TotalConfirmed}</b></div>
            <div>Total Deaths <b>{country.TotalDeaths}</b></div>
            <div>Total Recovered <b>{country.TotalRecovered}</b></div>
            <button>OK</button>
        </div>
    </div>
)