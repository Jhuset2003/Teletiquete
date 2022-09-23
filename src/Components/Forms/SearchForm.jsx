import React from 'react'
import '../../Styles/FormsS/SearchForm.scss'

export const SearchForm = () => {
  return (
    <div className='form_container'>
        <form className='search_form'>
            <ul className='container_input_list'>
                <li className='input_text'>
                    <h3>Ciudad Destion</h3>
                    <input type="text" placeholder='Destino'/>
                </li>
                <li className='input_text'>
                    <h3>Ciudad Origen</h3>
                    <input type="text" placeholder='Origen'/>
                </li>
                <li className='input_text'>
                    <h3>Empresa</h3>
                    <input type="text" placeholder='Empresa'/>
                </li>
                <li className='input_date'>
                    <h3>Fechas</h3>
                    <input type="date" />
                    <input type="date" />
                </li>    
            </ul>
            <div className='input_submit_container'>
            <input type="submit" className='input_submit' value='Buscar'/> 

            </div>
        </form>

    </div>
  )
}
