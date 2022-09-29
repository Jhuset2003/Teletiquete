import React from 'react'
import { Link } from 'react-router-dom'
import "../../../Styles/Buttons/Btn_menu/Btn_History.scss"

export const BtnHistory = () => {
  return (
    <div className='BtnHistory'>
        <Link to="/History">
            <span>Historial</span>
        </Link>
    </div>
  )
}
