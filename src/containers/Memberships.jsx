import React, { useEffect, useState } from 'react'
import { MembershipOro } from '../components/membership/MembershipCardOro'
import {MembershipBronce} from '../components/membership/MemberShipCardBronce'
import { MembershipPlata} from '../components/membership/MembershipCardPlata'
import fetchApi from '../api'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading } from '../actions'
import { LoadingSkeleton } from '../components/news/LoadingSkeleton'

function Memberships(){
    const dispatch = useDispatch()
    const loading = useSelector(state => state.loading)

    const [info, setInfo] = useState([])
    const [infoOro, setInfoOro] = useState([])
    const [infoPlata, setInfoPlata] = useState([])
    const [infoBronce, setInfoBronce] = useState([])

    useEffect(() =>{
        const getInfo = async () =>{
            const info = await fetchApi('https://coinpinver.com/Subastaexchange/api/beneficiosMembresias')
            const data = await info.data
            setInfo(data)
            setInfoOro(data.filter(info => info.tipo_membresia === "Membresia Oro"))
            setInfoPlata(data.filter(info => info.tipo_membresia === "Membresia Plata"))
            setInfoBronce(data.filter(info => info.tipo_membresia === "Membresia Bronce"))
            
        }
        getInfo()
    }, [])
    
    return(
            <section className='memberships lg:grid lg:grid-flow-row justify-items-center mt-44'>
                <h3 className='memberships-title'>SE PARTE DE NUESTRO GRUPO EXCLUSIVO</h3>
                <div className='memberships-container'>
                    <MembershipPlata 
                        info = {infoPlata}
                    />
                    <MembershipOro
                        info = {infoOro}
                    />
                    <MembershipBronce
                        info = {infoBronce}
                    />
                </div>
            </section>
    )
}

export { Memberships }