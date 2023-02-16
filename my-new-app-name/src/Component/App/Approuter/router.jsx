import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../../pages/home'
import { Om_os } from '../../pages/om_os'
import { Kontakt } from '../../pages/kontakt'
import { Login } from '../../pages/login'
import { Poster } from '../../pages/poster/Poster'
import { PosterList } from '../../pages/poster/PosterList'
import { PosterDetails } from '../../pages/poster/PosterDetails'

export const Router = () => {
  return (
    <Routes>
        <Route index element={<Home/>} />
        <Route path='/poster' element={<Poster />}>
          <Route path=':genre' element={<PosterList />}/>
          <Route path=':genre/:poster' element={<PosterDetails />}/>
        </Route>

        
        <Route path='/om_os' element={<Om_os/>} />
        <Route path='/kontakt' element={<Kontakt/>} />
        <Route path='/login' element={<Login/>} />
    </Routes>
    )
}