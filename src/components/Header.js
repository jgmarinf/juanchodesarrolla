import React from 'react'
import "./Header.css";

function Header() {
    return (
        <div className="Header ">
                       
                <div className="row  animate__animated animate__bounceInRight">
                    <div className="col-sm-6 float-left">
                        <lu className="list-unstyled my-4">
                            <li>
                                {/* display-1 es para cambiar la tipografia */}
                                <h1 className=" display-1 text-white">BIENVENIDOS</h1>
                            </li>
                            <li>
                                <h3 className="display-6 text-white text-capitalize ">esta es la pagina de</h3>
                            </li>
                            <li>
                                <h1 className="display-2 text-white">JuanchoDesarrolla</h1>
                            </li>
                        </lu> 
                    </div>
                    
                </div>
            
        </div>
            
        
    )
}
// desde aqui

export default Header
