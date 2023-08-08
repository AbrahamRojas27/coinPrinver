import React, {useRef } from 'react'
import { MembershipOro } from '../components/membership/MembershipCardOro'
import {MembershipBronce} from '../components/membership/MemberShipCardBronce'
import { MembershipPlata} from '../components/membership/MembershipCardPlata'
import {fetchApi} from '../api'
import { useQuery } from 'react-query'

function Memberships(){
    const element = useRef()

    const {data, isLoading, error} = useQuery('membershipData', () =>(fetchApi('https://coinpinver.com/Subastaexchange/api/beneficiosMembresias')))

    const info = data?.data
    const infoOro = info?.filter(info => info.tipo_membresia === "Membresia Oro")
    const infoPlata = info?.filter(info => info.tipo_membresia === "Membresia Plata")
    const infoBronce = info?.filter(info => info.tipo_membresia === "Membresia Bronce")
            
       
    
    return(
            <section ref={element} className='memberships lg:grid lg:grid-flow-row justify-items-center mt-44'>       
                <h3 className='memberships-title'>SE PARTE DE NUESTRO GRUPO EXCLUSIVO</h3>
                <div>
                    <p className='membership-subtitle'>¿Tardas horas y horas en hacer tus análisis, antes de cada inversión?</p>
                    <p className='membership-info'>Ahorramos muchísimo tiempo y dinero a cientos de inversores, encargándonos de hacer la investigación y elaborar los análisis de inversión por ellos, y siempre de las 15 mejores oportunidades del mercado de criptomonedas y acciones.</p>
                </div>
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

export default Memberships 