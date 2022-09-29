import {React,useState} from 'react'
import "../../../Styles/Buttons/Buttons_Menu/Buttons_Menu_reactions.scss";
import { AiFillCloseCircle } from 'react-icons/ai';
import { motion,useDragControls  } from "framer-motion"

export const ButtonsMenuReactions = ({items = []}) => {
    const [Info,setInfo] = useState(false);
    const [modalData, setModalData] = useState(null);
    const [Id_btn , setId_btn] = useState();
    const controls = useDragControls()

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
                    <motion.div className='information' key={modalData.id} 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                    drag
                    dragListener={true}
                    dragControls={controls}
                    dragElastic={0}
                    dragMomentum={false}
                    
                    >
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
                                    <div className='actions_container' key={index}>
                                        {more.actText}
                                    </div>
                                )
                            })}
                               
                        </div>
                    </motion.div>
            
        }
            
             
            
    </>
  )
}
