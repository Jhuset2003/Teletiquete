import {React,useState} from 'react'
import "../../../Styles/Buttons/Buttons_Menu/Buttons_Menu.scss";
import { AiFillCloseCircle } from 'react-icons/ai';

export const ButtonsMenu = ({items = []}) => {
    const [Info,setInfo] = useState(false);
    const [modalData, setModalData] = useState(null);
    const [Id_btn , setId_btn] = useState();


    const clickHandler = () => {
        setInfo(true);
      };
      const closeHandler = () => {
        setInfo(false);
      };

  return (
    <>
        <div className='BTNSContainer'>
            {items.map((item)=>{
                return(
                    <div className={`icons_menu ${Info && item.id === Id_btn ? "active" : "" }`} key={item.id} onClick={() => {clickHandler(true); setModalData(item); setId_btn(item.id)}}>
                        {item.icon_menu}  
                    </div>
                )
            })}
        </div>
        {Info &&
                    <div className='information' key={modalData.id} >
                        <div className='closeAndSee'>
                            <i className='see'>{modalData.icon_menu}</i>
                            <i className='close' onClick={closeHandler}><AiFillCloseCircle/></i>
                        </div>
                        <div className='allInfo'>
                            <h1>{modalData.title}</h1>
                            <form action="">
                               {modalData.information.map((more,index)=>{
                                return(
                                    <div className='inputs_user_container' key={index}>
                                        <h4 >{more.infoTitle}</h4>
                                        <input type={more.infoType} defaultValue={more.infoText} />
                                    </div>
                                )
                               })}
                            </form>
                        </div>
                        <div className='buttons_Info'>
                            {modalData.actions.map((more,index)=>{
                                return(
                                    <button key={index}>{more.actText}</button>
                                )
                            })}
                               
                        </div>
                    </div>
            
        }
            
             
            
    </>
  )
}
