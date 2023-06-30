import { useQuery } from 'react-query'
import { fetchApi } from '../api'
import TeamCard from '../components/team/TeamCard'
import { useState } from 'react'
import { LoadingSkeleton } from '../components/news/LoadingSkeleton'

function TeamContainer(){
    const {data, error, isLoading} = useQuery('teamData', () => (fetchApi('https://www.coinpinver.com/coinpinverapi/api/getIntegrantes')))

    if(isLoading){
        return (
            <LoadingSkeleton/>
        )
    }

    return(
        <div className='team-container'>
            {
                data.data.map((member) =>(
                    <TeamCard
                        img = {member.foto}
                        fullName = {member.nombreCompleto}
                        description={member.descripcion}
                        linkedin={member.linkend}
                        position={member.puesto}
                    />
                ))
            }
        </div>
    )
}

export default TeamContainer