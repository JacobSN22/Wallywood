import React from 'react'
import { Route, Routes } from 'react-router-dom'
import home from '../pages/home'

export const router = () => {
  return (
    <Routes>
        <Route index element={<home/>}></Route>
    </Routes>
    )
}