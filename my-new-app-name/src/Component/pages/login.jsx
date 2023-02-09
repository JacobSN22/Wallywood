import axios from 'axios'
import React from 'react'
import { PageHeader } from '../App/pageHeader/pageHeader'
import { LoginStyle } from '../Style/login.style'

export const Login = () => {

  const submitHandle = async e => {
    const formdata = new URLSearchParams()
    formdata.append('username', e.target.form.username.value)
    formdata.append('password', e.target.form.username.value)

    const endpoint = `http://localhost:4000/login`
    try {
      const result = await axios.post(endpoint, formdata)
      handleSessionData(result)
    } catch(err) {
      console.error(`Kunne ikke logge ind: ${err}`)
    }
  }

  const handleSessionData = data => {
    if(data) {
      sessionStorage.setItem('token', JSON.stringify(data))
    }
  }

  return (
    <>
      <LoginStyle>
        <PageHeader title="Login" />
        <form method='POST'>
          <h2>Login</h2>

          <label htmlFor="username">Brugenavn: <span>*</span></label>
          <input type="text" name='username'/>

          <label htmlFor="password">Password: <span>*</span></label>
          <input type="password" name='password'/>

          <button type='button' onClick={e => submitHandle(e)}>Login</button>
          </form>
      </LoginStyle>
    </>
  )
}
