import axios from 'axios'

const USER_API = 'https://www.coinpinver.com/coinpinverapi/api/login'

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
    }) .then(res =>  {
        return res.data.data
    })
        .catch(err => err)
}

export const userLogin = (userEmail, userPassword) =>{
    return axios.post(USER_API, {
                username: userEmail,
                password: userPassword
            })
            .then((res) => res)
            .catch((err) => console.log(err))
        }

