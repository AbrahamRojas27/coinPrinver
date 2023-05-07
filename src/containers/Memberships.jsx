import React from 'react'
import { MembershipOro } from '../components/membership/MembershipCardOro'
import {MembershipBronce} from '../components/membership/MemberShipCardBronce'
import { MembershipPlata} from '../components/membership/MembershipCardPlata'

function Memberships(){
    return(
            <section className='memberships lg:grid lg:grid-flow-row justify-items-center mt-44'>
                <h3 className='memberships-title'>SE PARTE DE NUESTRO GRUPO EXCLUSIVO</h3>
                <div className='memberships-container'>
                    <MembershipPlata />
                    <MembershipOro/>
                    <MembershipBronce/>
                </div>
            </section>
    )
}

export { Memberships }