import React from "react";
import { MembershipOro } from '../components/membership/MembershipCardOro'
import {MembershipBronce} from '../components/membership/MemberShipCardBronce'
import { MembershipPlata} from '../components/membership/MembershipCardPlata'

function MembershipsPage (){

    return(
        <section className='memberships'>
            <h2 className='memberships-title' >Adquiere tu membresia</h2>
            <div className="memberships-container">
                <MembershipBronce/>
                <MembershipOro/>
                <MembershipPlata/>
            </div>
        </section>
    )
}

export default MembershipsPage