import React from 'react'
import { NewsCard } from '../components/news/NewsCard'
import { LoadingSkeleton } from '../components/news/LoadingSkeleton'

function NewsContainer(props){
    const news = props.news
    const loading = props.loading

    return(
        <>
            {
            loading
                ? <LoadingSkeleton/>
                :   <section className='news-container'>
                        {
                        news.map(item =>(
                        <NewsCard 
                            key={`${item.nne_id}_news_container`}
                            title={item.nne_titulo}
                            description= {item.nne_descripcion}
                            img={item.nne_imagenPreview}
                            author={item.Nombre}
                            content={item.nne_contenido}
                            slug={item.nne_id}
                        />
                        ))  
                        }
                    </section>
            }
        </>
        )
    }

export { NewsContainer }