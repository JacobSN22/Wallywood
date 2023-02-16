import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { PosterGenreStyled } from './PosterGenre.style'

export const GenreList = () => {
    const [ data, setData ] = useState([])
  
    useEffect(() => {
      const getData = async () => {
        const result = await axios.get('http://localhost:4000/genre')
        setData(result.data);
        result.data.sort(function(a, b) {
          let x = a.title.toLowerCase();
          let y = b.title.toLowerCase();
          if(x < y) { return -1; }
          if(x > y) { return 1; }
          return 0;
       });
      }
      getData()
    }, [setData])
  
    return(
        <PosterGenreStyled>
            <ul>
                {data && data.map(genre => {
                return(
                    <li key={genre.id}>
                        <NavLink to={`/poster/${genre.slug}`}>{genre.title}</NavLink>
                    </li>
                )
                })}
            </ul>
        </PosterGenreStyled>
    )
  }