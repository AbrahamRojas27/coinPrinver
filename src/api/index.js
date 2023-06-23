import axios from 'axios'
import { useEffect } from 'react'

export const fetchApi = (api) =>{
    return axios.get(api)
        .then(res => res.data)
        .catch(err => console.log(err))

}

export const getUser = (jwt) => {
    return axios.get('https://www.coinpinver.com/coinpinverapi/api/jwt', {
        params:{
            'jwt':jwt
        }
    }) .then(res =>  res.data.data)
        .catch(err => err)
}

