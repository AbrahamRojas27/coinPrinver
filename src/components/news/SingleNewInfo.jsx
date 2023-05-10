import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function SingleNewInfo(props){
    const navigate = useNavigate()
    const toMemberships = () => navigate('/memberships')
    const user = useSelector((state) => state.user)
    const newPremium = user ? user.membresia ? 'single-new-premium-content' : 'hidden' : 'hidden'
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

            <article className={newPremium} >
                 <div dangerouslySetInnerHTML={{__html: props.content}}></div>
            </article>

            <article className=''>
                <p className=''></p>
                <button className=''></button>
            </article>
        </section>
    )
}

export { SingleNewInfo }
