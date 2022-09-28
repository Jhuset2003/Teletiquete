import {React,useState} from 'react'
import '../../Styles/FormsS/SearchForm.scss'
import { Bus } from '../Modals/Bus';

export const SearchForm = () => {
   const [BusSteps,setBusSteps] = useState(false);
   
   const initBusSteps = ()=>{
        setBusSteps(true)
   }
   const stopBusSteps = ()=>{
    setBusSteps(false)
}


  return (
    <>
    <div className='form_seacrh_container'>
        <form className='search_form'>
            <ul className='container_input_list'>
                <li className='input_text'>
                    <h3>Ciudad Destion</h3>
                    <input type="text" placeholder='Destino' />
                </li>
                <li className='input_text'>
                    <h3>Ciudad Origen</h3>
                    <input type="text" placeholder='Origen'/>
                </li>
                <li className='input_text'>
                    <h3>Empresa</h3>
                    <input type="text" placeholder='Empresa'/>
                </li>
                <li className='input_date_container'>
                    <h3>Fechas</h3>
                    <div className='input_date'>
                        <input type="date" />
                        <input type="date" />
                    </div>
                    
                </li>    
            </ul>
            <div className='input_submit_container'>
            <input type="button" className='input_submit' value='Buscar' onClick={initBusSteps}/> 

            </div>
        </form>
    </div>
    {BusSteps && 
        <Bus close={stopBusSteps}/>
    }
    </>
  )
}
