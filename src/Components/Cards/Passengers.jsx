import React from 'react'
import "../../Styles/Cards/Passengers.scss"
import { useContext } from 'react'
import {InfoContext} from "../Context/InfoContext";

export const Passengers = () => {
    const info = useContext(InfoContext)
  return (
    <div className='registroPasajero'>
        <div className='HeaderRegistroPasajero'>
            <span>
              Pasajero
            </span>
            <span>
              silla
            </span>
        </div>
        <div className='BodyRegistroPasajero'>
          <form action="">
            <ul>
              <li>
                <input type="text" placeholder='Nombre'/>
              </li>
              <li>
                <input type="text" placeholder='Apellido'/>
              </li>
              <li>
                <input type="text" placeholder='Documento'/>
              </li>
              <li>
                <input type="text" placeholder='Nr.Documento'/>
              </li>
              <li>
                <input type="text" placeholder='Nr.Telefono'/>
              </li>
            </ul>
          </form>
        </div>
        <div className='FooterRegistroPasajero'>
          <button className='Limpiar'>Limpiar</button>
          <button className='Editar'>Editar</button>
          <button className='Aceptar'>Aceptar</button>
        </div>
    </div>
  )
}
