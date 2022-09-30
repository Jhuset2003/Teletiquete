import {React,useState} from 'react'
import "../../Styles/Cards/HistoryCard.scss";

export const HistoryCard = ({items = []}) => {
  const [ModalCardHistory,setModalCardHistory] = useState(false)
  const [ModalCardHistoryData,setModalCardHistoryData] = useState(false)

  const clicHandler = () => {
    setModalCardHistory(!ModalCardHistory)
  }

  return (
    <>
     {items.map((item)=>{
      return(
        <div className='HistoryCardContainer' onClick={() => {clicHandler();setModalCardHistoryData(item)}}>
        <ul>
          <li>
            <h3>Origen</h3>
            <span>{item.origin}</span>
          </li>
          <li>
            <h3>Destino</h3>
            <span>{item.destino}</span>
          </li>
          <li>
            <h3>Empresa</h3>
            <span>{item.empresa}</span>
          </li>
          <li>
            <h3>Horas</h3>
            <span>{item.horas}</span>
          </li>
          <li>
            <h3>Fechas</h3>
            <span>{item.fechas}</span>
          </li>
        </ul>
    </div>
      )
     })}
    </>
  )
}
