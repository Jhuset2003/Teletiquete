import {React,useState} from 'react'
import '../../Styles/FormsS/SearchForm.scss'
import { Bus } from '../Modals/Bus';


import { AiFillCloseCircle } from 'react-icons/ai';
import { BiTimer } from 'react-icons/bi';
import { FaBusAlt,FaFileInvoiceDollar } from 'react-icons/fa';
import { MdPlayArrow } from 'react-icons/md';

export const SearchForm = () => {
   const [BusSteps,setBusSteps] = useState(false);
   const [datos,setDatos] = useState({})
   const [steps,setSteps] = useState(1)
   

   const [datosOrigen,setDatosorigen] = useState("")
   const [datosDestino,setDatosdestino] = useState("")
   const [datosFechaS,setDatosfechaS] = useState("")
   const [datosFechaR,setDatosfechaR] = useState("")
   const [datosEmpresa,setDatosempresa] = useState("")
   
   const initBusSteps = ()=>{
        setBusSteps(true)
   }
   const closeBusSteps = ()=>{
        setBusSteps(false)
   }
   function organizardatos(O,D,Fs,Fr,E) {
    const all = [O,D,Fs,Fr,E]
    setDatos(all)
    
   }

  return (
    <>
    <div className='form_seacrh_container'>
        <form className='search_form' onSubmit={ev => {
            ev.preventDefault();
            organizardatos(datosOrigen,datosDestino,datosFechaS,datosFechaR,datosEmpresa);
        }}>
            <ul className='container_input_list'>
                <li className='input_text'>
                    <h3>Ciudad Origen</h3>
                    <input type="text" placeholder='Origen' name='origen'
                    value={datosOrigen}
                    autoComplete="off"
                    onChange={ev => setDatosorigen(ev.target.value)}
                    />
                </li>
                <li className='input_text'>
                    <h3>Ciudad Destion</h3>
                    <input type="text" placeholder='Destino' name='destino'
                    value={datosDestino}
                    autoComplete="off"
                    onChange={ev => setDatosdestino(ev.target.value)}
                    />
                </li>
                <li className='input_date_container'>
                    <h3>Fechas</h3>
                    <div className='input_date'>
                        <input type="date" name='fecha_salida'
                        value={datosFechaS}
                        autoComplete="off"
                        onChange={ev => setDatosfechaS(ev.target.value)}
                        />
                        <input type="date" name='fecha_regreso'
                        value={datosFechaR}
                        autoComplete="off"
                        onChange={ev => setDatosfechaR(ev.target.value)}
                        />
                    </div>
                    
                </li>    
                <li className='input_text'>
                    <h3>Empresa</h3>
                    <input type="text" placeholder='Empresa' name='empresa'
                    value={datosEmpresa}
                    autoComplete="off"
                    onChange={ev => setDatosempresa(ev.target.value)}
                    />
                </li>
            </ul>
            <div className='input_submit_container'>
            <input type="submit" className='input_submit' value='Buscar' onClick={initBusSteps}/> 

            </div>
        </form>
    </div>
    {BusSteps && 
        <div className='BusStepsConatiner'>
            <button onClick={() => {closeBusSteps(); setSteps(1)}} style={{zIndex:11}} className="stopSteps"><AiFillCloseCircle/></button>
            <Bus datos={datos} step={steps} setSteps={setSteps}/>
            <div className='nextAndProgressBar'>
                <button style={{zIndex:11}} onClick={() => {setSteps(steps + 1)}} className="next" disabled={false}><i><MdPlayArrow/></i></button>
                <div className='progressBar' style={{zIndex:11}}>
                    <ul>
                        <li className={`${steps >= 1 ? "active" : "" }`} onClick={() => {setSteps(1)}}><BiTimer/></li>
                        <li className={`${steps >= 2 ? "active" : "" }`} onClick={() => {setSteps(2)}}><FaBusAlt/></li>
                        <li className={`${steps >= 3 ? "active" : "" }`} onClick={() => {setSteps(3)}}><FaFileInvoiceDollar/></li>
                    </ul>
                </div>
            </div>
        </div>
    }
    </>
  )
}
