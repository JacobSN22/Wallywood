import React from 'react'
import { PageHeader } from '../../App/pageHeader/pageHeader'
import { PosterStyled } from './Poster.style'
import { Outlet } from 'react-router-dom'
import { GenreList } from './PosterGenre'

export const Poster = () => {
  return (
    <>
    <PageHeader title="Poster" />
    <PosterStyled>
      <div><GenreList /></div>
      <div><Outlet /></div>
    </PosterStyled>
    </>
    )
}