import React from 'react'
import "./Info.css";

function info() {
    return (
        <div className="info">
            <div className="text-center text-bg-white">
                <p className= "parrafo">
                    Hablame estoy para ayudarte!
                </p>
                {/* list-inline es para poner la lista horizontal 
                list-unstyled es para borra los predeterminados de la lista */}
                <ul className="list-unstyled list-inline my-4">
                    <li className="list-inline-item">
                        {/* la propiedad target _blank es para cuando cliken se habra en otra pestaña */}
                        <a href="https://www.facebook.com/juan.marin.9216" target="_blank">
                            <i class="fab fa-facebook-square"></i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="https://www.instagram.com/jgmarinf/?hl=es" target="_blank">
                            <i class="fab fa-instagram"></i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="https://api.whatsapp.com/send?phone=+573013419980" target="_blank">
                            <i class="fab fa-whatsapp"></i>
                        </a>
                    </li>
                </ul>                
            </div>
        </div>
    )
}

export default info
