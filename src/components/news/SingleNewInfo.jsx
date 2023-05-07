import React from 'react'
import { useNavigate } from 'react-router-dom'

function SingleNewInfo(props){
    const navigate = useNavigate()
    const toMemberships = () => navigate('/memberships')
    
    return(
        <section>
            <div className='single-new-header'>
                <figure className='single-new-img'>
                    <img src={props.img} alt={props.title}/>
                </figure>
                <div className='single-new-header-text-container'>
                    <h2 className='single-new-title'>{props.title}</h2>
                    <p className='single-new-author'>{props.author}</p>
                    <p className='single-new-date'>{props.fecha}</p>
                </div>
            </div>

            <article className='single-new-free-content' >
                 <div dangerouslySetInnerHTML={{__html: props.freeContent}}></div>
            </article>

            <article className='single-new-premium-content' >
                 <div dangerouslySetInnerHTML={{__html: props.content}}></div>
            </article>

            <article className=''>
                <p className=''></p>
                <button className='bg-primary w-[200px] text-center px-4 py-2 text-lg font-semibold rounded-[40px]'></button>
            </article>
        </section>
    )
}

export { SingleNewInfo }
