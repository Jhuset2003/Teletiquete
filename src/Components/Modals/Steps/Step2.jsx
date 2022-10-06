import React, { useState } from 'react'
import { useContext } from 'react'
import {InfoContext} from "../../Context/InfoContext";
import "../../../Styles/Modals/Steps/Step2.scss";
import { Passengers } from '../../Cards/Passengers';


import { IoIosCloseCircle } from 'react-icons/io';



export const Step2 = () => {
    const info = useContext(InfoContext)
    const [pasajeros,setPasajeros] = useState()
  return (
    <>
    <div className='step2Continer'>
        <div className='headerStep2'>
            <h1>Sillas</h1>
        </div>
        <div className='bodyStep2'>
            <div className='paintBusContainer'>
                <div className='paintBus'>
                    Bus
                </div>
            </div>
            <div className='infoBus'>
                <div className='avisos'>
                    <ul>
                        <li>
                            <div className='disponible'/>
                            <span>
                                <h4>Aviso</h4>
                                <span>Disponible</span>
                            </span>
                        </li>
                        <li>
                            <div className='ocupado'/>
                            <span>
                                <h4>Aviso</h4>
                                <span>Ocupado</span>
                            </span>
                        </li>
                        <li>
                            <div className='seleccionado'/>
                            <span>
                                <h4>Aviso</h4>
                                <span>Seleccionado</span>
                            </span>
                        </li>
                    </ul>
                </div>
                <div className='service'>
                    <h2>Servicios</h2>
                </div>
                <div className='acompañantes'>
                    <h2>Acompañantes</h2>
                    <button onClick={() =>{setPasajeros(!pasajeros)}} className="asignar">Asignar Puestos</button>
                    <span className='todoAMiNombre'>
                        <span>Todo a mi nombre</span>
                        <input type="checkbox" name="" id="" />
                    </span>
                   {pasajeros && 
                        <div className='registroPasajeroContainer'>
                            <div className='Pasajeros'>
                                <button onClick={() =>{setPasajeros(!pasajeros)}} className="closePasajeros"><IoIosCloseCircle/></button>
                                <div className="headerPasajero">
                                    <h2>Pasajeros</h2>
                                </div>
                                <div className="bodyPasajero">
                                    <Passengers/>
                                </div>
                            </div>
                            
                        </div>
                   }
                </div>
            </div>
            
        </div>
    </div>
    </>
  )
}
