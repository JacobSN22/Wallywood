import React from 'react'
import { PageHeader } from '../App/pageHeader/pageHeader'
import { HomeStyle } from '../Style/home.style'

export const Home = () => {
  return (
    <>
    <PageHeader title="Velkommen"/>
    <HomeStyle>
      <img src={require('../images/curtain.jpg')} alt="Wallywood" />
    
      <h2>Sidste nyt...</h2>
    </HomeStyle>
    </>
  )
}
