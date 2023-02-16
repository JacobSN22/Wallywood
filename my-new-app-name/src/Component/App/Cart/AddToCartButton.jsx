import axios from 'axios'
import React from 'react'
import { useAuth } from '../../Providers/AuthProvider'
import { AddToCartButtonStyle } from './AddToCartButton.style'

export const AddToCartButton = props => {
    const { loginData } = useAuth

    const clickHandle = async () => {
        const options = {
            headers: {
                Authorization: `Bearer ${loginData.access_token}`
            }
        }

        const formdata = new URLSearchParams()
        formdata.append('poster_id', props.id)
        formdata.append('quantity', 1)

        const endpoint = `http://localhost:4000/cart`
        const result = await axios.post(endpoint, formdata, options)
        console.log(result);
    }

  return (
    <AddToCartButtonStyle onClick={clickHandle}>
        {props.children}
    </AddToCartButtonStyle>
  )
}
