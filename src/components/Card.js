import React from 'react'
import "./cards.css";


function Card({title, imageSource, url, text}) {
    
    return (
        <div className="card text-center bg-dark animate__animated animate__fadeInUp">
            <div className="overflow">
            <img className="card-img-top" src={imageSource} alt=""/>
            </div>
            <div className="card-body fluid">
                <h4 className="card-title text-secondary text-uppercase">{title}</h4>
                <p className="card-text text-secondary text-justify">{text}</p>
                <a href={url} className="align-text-bottom btn btn-outline-secondary rounded-0" target="_blank">
                    Entra en esta web
                </a>
            </div>
        </div>
    )
}

export default Card
