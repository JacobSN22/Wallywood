import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Plakater } from '../../pages/plakater'
import { Home } from '../../pages/home'
import { Om_os } from '../../pages/om_os'
import { Kontakt } from '../../pages/kontakt'
import { Login } from '../../pages/login'

export const Router = () => {
  return (
    <Routes>
        <Route index element={<Home/>} />
        <Route path='/plakater' element={<Plakater/>} />
        <Route path='/om_os' element={<Om_os/>} />
        <Route path='/kontakt' element={<Kontakt/>} />
        <Route path='/login' element={<Login/>} />
    </Routes>
    )
}