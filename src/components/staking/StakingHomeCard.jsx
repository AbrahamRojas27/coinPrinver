import React from "react";
import { Btn } from '../Btn'

function StakingHomeCard(props){
    return(
        <div key={`${props.id}-staking`} className="min-w-[360px] h-full flex flex-col items-center p-8 space-y-4 rounded-[18px] bg-terteary">
            <p className="text-xl font-bold">{props.title}</p>
            <Btn text='See more...'/>
        </div>
    )
}

export { StakingHomeCard }