import React from 'react';
import MarginLayout from '../../Layouts/MarginLayout';
import { CgMenu } from 'react-icons/cg';
import log_teletiquete from "../../Resources/Logs/log_teletiquete.jpg";
import "../../Styles/NavS/Nav.scss"

export const Nav = () => {
  return (
    <nav className='navbar'>
        <MarginLayout>
            <div className='nav_content'>
                <div className='i_menu'>
                    <CgMenu/>
                </div>
                <div className='log_teletequite'>
                    <img src={log_teletiquete} alt="Teletiquete" />
                </div>
            </div>
        </MarginLayout>
    </nav>
  )
}
