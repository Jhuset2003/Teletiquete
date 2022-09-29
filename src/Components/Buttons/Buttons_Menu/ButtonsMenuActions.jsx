import {React,useState} from 'react'
import "../../../Styles/Buttons/Buttons_Menu/Buttons_Menu_reactions.scss";
import { AiFillCloseCircle } from 'react-icons/ai';
import { motion,useDragControls } from "framer-motion"

export const ButtonsMenuActions = ({itemsA = []}) => {
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
            {itemsA.map((itemA)=>{
                return(
                    <div className={`icons_menu2 ${Info && itemA.id === Id_btn ? "active" : "" }`} key={itemA.id} onClick={() => {clickHandler(true); setModalData(itemA); setId_btn(itemA.id)}}>
                        {itemA.icon_menu}  
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
                    </motion.div>
            
        }
            
             
            
    </>
  )
}
