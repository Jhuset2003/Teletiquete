import React,{useState,useEffect} from 'react'
export const InfoContext = React.createContext({})

export default function InfoProvider({children}) {
    const [Data,setData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [Save,setSave]= useState ([])

    useEffect(() => {
        if (isLoading) {
          fetch("/data.json")
            .then((response) => response.json())
            .then((info) => {
                setData(info.content.ida);
                setIsLoading(false);
            });
        }
      }, [isLoading]);
    return(
        <InfoContext.Provider value={{Data,setData,isLoading,setIsLoading,Save,setSave}}>
            {children}
        </InfoContext.Provider>
    )
}