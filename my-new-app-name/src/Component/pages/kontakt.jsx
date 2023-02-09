import React from 'react'
import { PageHeader } from '../App/pageHeader/pageHeader'
import { KontaktStyle } from '../Style/kontakt.style'


export const Kontakt = () => {
  return (
    <>
    <PageHeader title="Kontakt"/>
    <KontaktStyle>
      <h2>Kotakt os</h2>

      <label htmlFor="">Dit navn: <span>*</span></label>
      <input type="text" />

      <label htmlFor="">Din email: <span>*</span></label>
      <input type="email" />

      <label htmlFor="">Din besked <span>*</span></label>
      <textarea name="" id="" cols="48" rows="10"></textarea>

      <button>Send</button>
    </KontaktStyle>
    </>
  )
}
