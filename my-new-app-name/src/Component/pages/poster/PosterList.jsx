import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { PosterListStyled } from './PosterList.style'
import { AddToCartButton } from '../../App/Cart/AddToCartButton'

export const PosterList = () => {
    const [ data, setData ] = useState([])
    const { genre } = useParams()
    
    useEffect(() => {
      const getData = async () => {
        const result = await axios.get(`http://localhost:4000/poster/list/${genre}`)
        setData(result.data);
        result.data.sort(function(a, b) {
          let x = a.name.toLowerCase();
          let y = b.name.toLowerCase();
          if(x < y) { return -1; }
          if(x > y) { return 1; }
          return 0;
       });
      }
      getData()
    }, [genre]);
    
    return(
        <PosterListStyled>
                {data && data.map(poster => {
                    return(
                        <div key={poster.id}>
                            <figure>
                            <Link to={`/poster/${genre}/${poster.slug}`}>
                                <img src={poster.image} alt=""/>
                            </Link>
                            </figure>
                            <p>
                                <Link to={`/poster/details/${poster.slug}`}>
                                {poster.name}
                                </Link>
                            </p>
                            <p>DKK {poster.price},00</p>
                            <p><AddToCartButton id={poster.id}>Læg i kurv</AddToCartButton></p>
                        </div>
                    )
                })}
        </PosterListStyled>
    )
  
  }