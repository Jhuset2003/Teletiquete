import {React,useState} from 'react';
import MarginLayout from '../../Layouts/MarginLayout';
import log_teletiquete from "../../Resources/Logs/log_teletiquete.jpg";
import "../../Styles/NavS/Nav.scss"


import { CgMenu } from 'react-icons/cg';
import { FaUserCircle,FaCoins } from 'react-icons/fa';
import { ButtonsMenu } from '../Buttons/Buttons_Menu/ButtonsMenu';


export const Nav = () => {
    const [Menu,setMenu] = useState();
    const openMenu = () => {
        setMenu(true);
      };
      const closeMenu = () => {
        setMenu(false);
      };
    
    const items = [
        {
            id:1,
            icon_menu:<FaUserCircle/>,
            title:"Informacion Usuario",  
            information:[
                {infoTitle:"Nombre",infoType:"text",infoText:"Albert"},
                {infoTitle:"Nombre",infoType:"text",infoText:"Albert"},
                {infoTitle:"Nombre",infoType:"text",infoText:"Albert"},
                {infoTitle:"Nombre",infoType:"text",infoText:"Albert"},
            ],
            actions:[
                {actText:"Editar"},
                {actText:"Historial"},
                {actText:"Cerrar"},
            ]
        },
        {
            id:2,
            icon_menu:<FaCoins/>,
            title:"Monedero Virtual",
            information:[
                {infoTitle:"Dinero",infoType:"number",infoText:1000},
               
                
            ], 
            actions:[
                {actText:"Recargar"}
            ]
           
        }
    ]

  return (
    <>
    <nav className='navbar'>
        <MarginLayout>
            <div className='nav_content'>
                <div className='i_menu' onClick={openMenu}>
                    <CgMenu/>
                </div>
                <div className='log_teletequite'>
                    <img src={log_teletiquete} alt="Teletiquete" />
                </div>
            </div>
        </MarginLayout>
        {Menu &&
        <div className='menu_container' >
            <div className='back_menu'onClick={closeMenu}/>
            <div className='menu'>
                <section className='menu_user_section'>
                   <ButtonsMenu items={items}/>
                </section>
                <section className='menu_admin_section'>

                </section>
                <section className='menu_page_section'>

                </section>
            </div>
        </div>   
    }
    </nav>
    </>
  )
}
