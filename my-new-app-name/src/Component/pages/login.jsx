import axios from 'axios'
import React from 'react'
import { PageHeader } from '../App/pageHeader/pageHeader'
import { useAuth } from '../Providers/AuthProvider'
import { LoginStyle } from '../Style/login.style'

export const Login = () => {

  const { loginData, setloginData } = useAuth()

  const submitHandle = async e => {
    const formdata = new URLSearchParams()
    formdata.append('username', e.target.form.username.value)
    formdata.append('password', e.target.form.password.value) 
    const endpoint = `http://localhost:4000/login`
    try {
      const result = await axios.post(endpoint, formdata)
      handleSessionData(result.data)
    } catch(err) {
      console.error(`Kunne ikke logge ind: ${err}`)
    }
  }

  const handleSessionData = data => {
    if(data) {
      sessionStorage.setItem('token', JSON.stringify(data))
      setloginData(data)
    }
  }

  const LogOut = () => {
    sessionStorage.removeItem('token')
    setloginData('')
  }

  return (
    <>
      <LoginStyle>
        <PageHeader title="Login" />
        { !loginData ? (
          <form method='POST'>
          <h2>Login</h2>

          <label htmlFor="username">Brugenavn: <span>*</span></label>
          <input type="text" name='username'/>

          <label htmlFor="password">Password: <span>*</span></label>
          <input type="password" name='password'/>

          <button type='button' onClick={e => submitHandle(e)}>Login</button>
          </form>
          
        ) : (
          <div>
            <p>Du er logget ind</p> 
            <button onClick={() => LogOut()}>Log ud</button>
          </div>
        )
        }
        
      </LoginStyle>
    </>
  )
}
