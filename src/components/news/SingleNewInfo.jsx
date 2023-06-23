import React from 'react'
import { useSelector } from 'react-redux'

function SingleNewInfo(props){
    const user = useSelector(state => state.user.user)
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

            {
                props.content === false
                    ? null
                    :   <article className={newPremium} >
                            <div dangerouslySetInnerHTML={{__html: props.content}}></div>
                        </article>
            }  
        </section>
    )
}

export { SingleNewInfo }
