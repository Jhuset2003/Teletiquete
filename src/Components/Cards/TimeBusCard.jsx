import {React,useState} from 'react'
import "../../Styles/Cards/TimeBusCard.scss"



export const TimeBusCard = ({item = {}}) => {
  const [accordion, setAccordion] = useState(false);
  const [accordionData,setAccordionData] = useState([])
  const [active,setActive] = useState(false)


  return (
    <div className='TimeBusCardContainer'>
        <div className='TimeBusCard'  onClick={() => {setAccordion(!accordion); setAccordionData(item)}}>
          <div className='infoTime' >
            <h3>{item.clasificacion}</h3>
            <span>
              <h3>Salidas</h3>
              <span></span>
            </span>
            <span>{item.length}</span>
          </div>
          <div className='infoDate'>
            <span>
              <h3>Salida</h3>
              <span>{item.hora_salida}</span>
            </span>
            <span>
              <h3>Salida</h3>
              <span>{item.hora_salida}</span>
            </span>
          </div>
          <div className='costosService'>
            <span className='costos'>
              <h3>Costos</h3>
              <span>{`${item.sigla}${item.tarifa_online} - ${item.sigla}${item.tarifa_online}`}</span>
            </span>
            <span className='service'>
              <h3>Servicios</h3>
              <span>{`${item.servicios}`}</span>
              </span>

          </div>
          
        </div>
        {accordion && 
            <div className={`accordionDataContainer ${active === true ? "active" : ""}`} onClick={() => {setActive(!active)}}>
              <div>
                <span>
                  <h3>Hora Salida</h3>
                  <span>{accordionData.hora_salida}</span>
                </span>
              </div>
              <div> 
                <span>
                  <h3>Hora Llegada</h3>
                  <span>{accordionData.hora_llegada}</span>
                </span>
              </div>
              <div>
                <span>
                  <h3>Costo</h3>
                  <span>{`${accordionData.sigla}${accordionData.tarifa_online}`}</span>
                </span>
              </div>
              <div>
                <span >
                  <h3>Servicios</h3>
                  <span>{accordionData.servicios}</span>
                </span>
              </div>
            </div>
          }
    </div>
  )
}
