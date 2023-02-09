import React, { useState } from 'react'
import { PageHeader } from '../App/pageHeader/pageHeader'
import { PlakaterStyled } from '../Style/plakater.style'
import { useState } from 'react'
import axios from 'axios'

export const Plakater = () => {
  return (
    <>
    <PageHeader title="Plakater" />
    <PlakaterStyled>
      <div><GenreList /></div>
      <div>Plakatliste</div>
    </PlakaterStyled>
    </>
    )
}

const GenreList = () => {
  const [ data, setData ] = useState([])
}