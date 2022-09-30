import React from 'react'
import { Nav } from '../Components/Nav/Nav'
import "../Styles/PagesS/History.scss"
import { FaUserCircle } from 'react-icons/fa';
import { HistoryCard } from '../Components/Cards/HistoryCard';


const History = () => {
  const items = [
    {
      id:1,
      origin:"Bogota D.C",
      destino:"Cartagena",
      empresa:"Autoboy",
      horas:"10 am " + " 11pm",
      fechas:"20/09/2022" + "21/09/2022"
    },
    {
      id:2,
      origin:"Bogota D.C",
      destino:"Cartagena",
      empresa:"Autoboy",
      horas:"10 am " + " 11pm",
      fechas:"20/09/2022" + "21/09/2022"
    },
    {
      id:3,
      origin:"Bogota D.C",
      destino:"Cartagena",
      empresa:"Autoboy",
      horas:"10 am " + " 11pm",
      fechas:"20/09/2022" + "21/09/2022"
    },
    {
      id:4,
      origin:"Bogota D.C",
      destino:"Cartagena",
      empresa:"Autoboy",
      horas:"10 am " + " 11pm",
      fechas:"20/09/2022" + "21/09/2022"
    }
  ]
  return (
    <div className='section_history'>
      <nav><Nav/></nav>
      <body className='history_container'>
        <div className='user_history'>
             <div className='user_history_icon'>
                <FaUserCircle/>
             </div>
             <div className='user_History_information'>
                <ul>
                  <li>
                    <h2>Nombre</h2>
                    <span>Albert</span>
                  </li>
                  <li>
                    <h2>Apellido</h2>
                    <span>Quintanilla</span>
                  </li>
                </ul>
             </div>
        </div>
        <div className='filter_history'>
          <h2>Historial viajes</h2>
          <span>Filtrar por:</span>
          <ul>  
            <li>
              <span>Fecha</span>
              <input type="date" />
            </li>
            <li>
              <span>Estado</span>
              <select name="" id="">
                <option value="">Todos</option>
                <option value="">Viajo</option>
                <option value="">No viajo</option>
                <option value="">Vendido</option>
                <option value="">Anulado</option>
                <option value="">Bloqueado</option>
                <option value="">Reasignado</option>
              </select>
            </li>
          </ul>
        </div>
        <div className='history'>
          <HistoryCard items={items}/>
        </div>
      </body>
    </div>
  )
}

export default History