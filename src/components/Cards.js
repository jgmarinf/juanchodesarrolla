import React from 'react'
import netflix from "../imagenes/netflix.jpg"
import pollomar from "../imagenes/pollomar.png"
import rar from "../imagenes/rar.JPG"
import Card from './Card';
import "./cards.css";


const cards = [
    {
        id: 1,
        title: "Clon de netflix",
        image: netflix,
        url: "http://ec2-13-58-55-106.us-east-2.compute.amazonaws.com/",
        text: "El clon de netflix es una muestra en la que se replica la pagina principal de netflix donde puedes generar un usuario que reposa la info en firebase, tambien te puedes suscribir pagando por Paypal diferentes planes..."
    },
    {
        id: 2,
        title: "Pollomar",
        image: pollomar,
        url: "/pollomar",
        text: "Pollomar es una tienda virtual en donde puedes realizar pedidos de productos alimenticios, se pueden acumular productos en una base de carrito y pagar un total de todos los pedidos por plataformas de pse y paypal..."
    },
    {
        id: 3,
        title: "RAR",
        image: rar,
        url: "/rar",
        text: "Rar es una marca de ropa dirigida a rollers skates, el siguiente enlace muestra la tienda de los productos que tiene rar para ofrecer al mercado en los cuales podran hacer compras y pagos por pse y paypal... "
    }
]

function Cards() {

    return (
        <div className="container shadow">
            <div className="texto text-center display-6 ">Los siguientes son los proyectos de frontend realizados en React </div>
            <br/>
            <div className="row">
                {
                    cards.map(card =>(
                        <div className="col-md-4 " key={card.id}>
                            <Card title={card.title} imageSource={card.image} url={card.url} text={card.text}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Cards
