import {React} from 'react'
import "../../../Styles/Buttons/Buttons_Menu/Buttons_Menu_reactions.scss";
import { useLocation,Link } from "react-router-dom";
import "../../../Styles/Buttons/Buttons_Menu/Buttons_Menu_reactions.scss";



export const ButtonsMenuLinks = ({itemsL = []}) => {
    const location = useLocation()

  return (
    <>
        <div className='BTNSContainer'>
            {itemsL.map((item)=>{
                return(
                    <Link to={item.link}>
                        <div className={`icons_menuL ${ location.pathname === item.link ? "active" : "" }`} key={item.id}>
                            {item.icon_menu}  
                        </div>
                    </Link>
                )
            })}
        </div>         
    </>
  )
}
