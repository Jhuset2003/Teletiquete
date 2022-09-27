import {React,useState} from 'react'

export const ButtonsMenu = ({items = []}) => {
    const [Info,setInfo] = useState(false);

    const clickHandler = () => {
        setInfo(true);
      };
     

  return (
    <>
        <div className='BTNSContainer'>
            {items.map((item,index)=>{
                return(
                    <div className='icons_menu' key={index} onClick={clickHandler}>
                        {item.icon_menu}
                    </div>
                )
            })}
        </div>
        {Info &&
            <div className='info_container'>
                {items.map((item,index)=>{
                    return(
                        <div className='information' key={index} >
                            <div className='closeAndSee'>
                                <i>{item.icon_menu}</i>
                                <i>close</i>
                            </div>
                            <div className='allInfo'>
                                <form action="">
                                    {item.information.map((more,index)=>{
                                        return(
                                         <div className='inputs_container' key={index}>
                                            <h3>{more.infoTitle}</h3>
                                            <input type={item.infoType} value={more.infoText}/>
                                         </div>   
                                        )
                                    })}
                                </form>
                            </div>
                            <div className='buttons'>
                                {items.map((item,index)=>{
                                    return(
                                        <div className='actions' key={index}>
                                            {item.actions}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        }
    </>
  )
}
