import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Poster, PosterDetails, PosterList } from '../../pages/Poster'
import { Home } from '../../pages/home'
import { Om_os } from '../../pages/om_os'
import { Kontakt } from '../../pages/kontakt'
import { Login } from '../../pages/login'

export const Router = () => {
  return (
    <Routes>
        <Route index element={<Home/>} />
        <Route path='/poster'>
          <Route index element={<Poster />}/>
          <Route path=':slug' element={<PosterList />}>
            <Route path=':id' element={<PosterDetails />}/>
          </Route>
        </Route>

        
        <Route path='/om_os' element={<Om_os/>} />
        <Route path='/kontakt' element={<Kontakt/>} />
        <Route path='/login' element={<Login/>} />
    </Routes>
    )
}