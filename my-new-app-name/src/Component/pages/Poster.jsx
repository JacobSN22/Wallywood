import React, { useEffect, useState } from 'react'
import { PageHeader } from '../App/pageHeader/pageHeader'
import { PosterStyled } from '../Style/Poster.style'
import axios from 'axios'
import { Link, NavLink, useParams } from 'react-router-dom'

export const Poster = () => {
  return (
    <>
    <PageHeader title="Poster" />
    <PosterStyled>
      <div><GenreList /></div>
      <div><PosterList /></div>
    </PosterStyled>
    </>
    )
}

const GenreList = () => {
  const [ data, setData ] = useState([])

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get('http://localhost:4000/genre')
      setData(result.data);
    }
    getData()
  }, [setData])

  return(
    <ul>
      {data && data.map(genre => {
        return(
          <li key={genre.id}>
            <NavLink to={`/poster/${genre.slug}`}>{genre.title}</NavLink>
          </li>
        )
      })}
    </ul>
  )
}


export const PosterList = () => {
  const [ data, setData ] = useState([])
  const { slug } = useParams()
  
  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(`http://localhost:4000/poster/list/${slug}`)
      setData(result.data);
    }
    getData()
  }, [slug]);
  
  return(
    <ul>
      {data && data.map(poster => {
        return(
          <li key={poster.id}>
            <Link to={`/poster/${slug}/${poster.id}`}>{poster.name}</Link>
          </li>
        )
      })}
    </ul>
  )

}


export const PosterDetails = () => {
  const [ data, setData ] = useState([])
  const { id } = useParams()
  
  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(`http://localhost:4000/poster/details/${id}`)
      setData(result.data);
    }
    getData()
  }, [id]);
  
  return(
    <ul>
      {data && data.map(poster => {
        return(
          <li key={poster.id}>
            Plakatdetails
          </li>
        )
      })}
    </ul>
  )

}