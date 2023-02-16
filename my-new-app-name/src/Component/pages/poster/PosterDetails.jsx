import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { PosterDetailStyled } from './PosterDetails.style'

export const PosterDetails = () => {
    const [ data, setData ] = useState([])
    const { poster } = useParams()
    
    useEffect(() => {
      const getData = async () => {
        const result = await axios.get(`http://localhost:4000/poster/details/${poster}`)
        setData(result.data);
        console.log(result.data);
      }
      getData()
    }, [poster]);
    
    return(
        <PosterDetailStyled>
            <div>
                {data && (
                    <>
                        <h2>{data.name}</h2>
                        <p dangerouslySetInnerHTML={{__html: data.description}}></p>
                        <img src={data.image} alt={data.name} />  
                    </>
                )}
            </div>
        </PosterDetailStyled>
    )
  
  }