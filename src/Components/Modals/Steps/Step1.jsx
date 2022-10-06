import React from 'react'
import { TimeBusCard } from '../../Cards/TimeBusCard';
import { SiOpenstreetmap } from 'react-icons/si';
import { useContext } from 'react'
import {InfoContext} from "../../Context/InfoContext";
import "../../../Styles/Modals/Steps/Step1.scss"

export const Step1 = ({datos = [] }) => {
    const info = useContext(InfoContext)
  return (
    <>
    <div className='origenDestino'>
            <span>
              Origen
              <h2>{datos[0]}</h2>
            </span>
            <i><SiOpenstreetmap/></i>
            <span>
              Destino
              <h2>{datos[1]}</h2>
            </span>
          </div>
          <div className='filtros'>
            <div className='filtroSearch'>
              
              <ul>
                <li>
                  <h3>Empresa</h3>
                  <div className='caja'>
                  <select name="" id="" value={datos[4]}>
                    <option value={datos[4]}>Hola</option>
                  </select>
                  </div>
                </li>
                <li>
                  <h3>Hora salida</h3>
                  <div className='caja'>
                  <select name="" id="" value={datos[4]}>
                    <option value="">Hola</option>
                  </select>
                </div>
                </li>
                <li>
                  <h3>Hora salida</h3>
                  <div className='caja'>
                  <select name="" id="" value={datos[4]}>
                    <option value="">Hola</option>
                  </select>
                </div>
                </li>
              </ul>
            </div>
            <div className='filtroService'>
                <h3>Servicios</h3>
              <ul>
                <li>
                  <input type="checkbox" name="" id="" />
                </li>
                <li>
                  <input type="checkbox" name="" id="" />
                </li>
                <li>
                  <input type="checkbox" name="" id="" />
                </li>
                <li>
                  <input type="checkbox" name="" id="" />
                </li>
                <li>
                  <input type="checkbox" name="" id="" />
                </li>
                <li>
                  <input type="checkbox" name="" id="" />
                </li>
                <li>
                  <input type="checkbox" name="" id="" />
                </li>
              </ul>
            </div>
          </div>
          <div className='cardContainer'>
              {info.Data.map((item,index)=>{
                return(
                  <TimeBusCard item={item} key={index}/>
                )
              })}
          </div>
          <div>
          </div>
    </>
  )
}
