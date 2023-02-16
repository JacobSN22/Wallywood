import React from 'react'
import { PageHeader } from '../App/pageHeader/pageHeader'
import { useAuth } from '../Providers/AuthProvider'
import { HomeStyle } from '../Style/home.style'

export const Home = () => {
  const { loginData } = useAuth()
  return (
    <>
    <PageHeader title="Velkommen"/>
    <HomeStyle>
      <img src={require('../images/curtain.jpg')} alt="Wallywood" />
    
      <h2>Sidste nyt...</h2>
      <p>{loginData ? 'Du er logget ind' : 'Du er IKKE logget ind'}</p>
    </HomeStyle>
    </>
  )
}
