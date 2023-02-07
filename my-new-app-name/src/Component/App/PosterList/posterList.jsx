import { createContext, useEffect, useState } from "react"
import axios from "axios"

const PosterContext = createContext()

export const PosterProvider = ({children}) => {
    const [ posterList, SetPosterList ] = useState([])

    useEffect(() => {
        if(sessionStorage.getItem('posterlist')) {
            SetPosterList(sessionStorage.getItem('posterlist'))
        } else {
            const getData = async () => {
                const result = await axios.get('http://localhost:4000/poster')
                console.log(result);
                
            }
            getData()
        }
    })


  return (
    <PosterContext.Provider value={{posterList, SetPosterList}}>
        {children}
    </PosterContext.Provider>
  )
}
