import React from 'react';
import "./DetailRowView.css"

function DetailRowView (props){
    console.log(props)
    return (
        <div className="detailRowView">
        <div className="detailRowView_content">
            <h3>{props.country.Country}</h3>
            <div className="detailRowView_content_item">
                <div className="detailRowView_text">
                    <div className="detailRowView_icon"><i className="fas fa-heartbeat"></i></div>
                Total Confirmed</div>
                <div>{props.country.TotalConfirmed}</div>
            </div>
            <div className="detailRowView_content_item">
                <div className="detailRowView_text">
                    <div className="detailRowView_icon"><i className="fas fa-skull-crossbones"></i></div>
                Total Deaths</div>
                <div>{props.country.TotalDeaths}</div>
            </div>
            <div className="detailRowView_content_item">
                <div className="detailRowView_text">
                <div className="detailRowView_icon"><i className="fas fa-file-medical"></i></div>
                Total Recovered</div>
                <div>{props.country.TotalRecovered}</div>
            </div>
            <button onClick = {props.onOkPressed.bind(null)}>OK</button>
        </div>
    </div>
    )
}

export default DetailRowView