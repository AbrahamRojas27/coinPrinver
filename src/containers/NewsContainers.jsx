import React, { useEffect } from 'react'
import { NewsCard } from '../components/news/NewsCard'
import { LoadingSkeleton } from '../components/news/LoadingSkeleton'
import { useDispatch, useSelector } from 'react-redux'
import getAPI from '../api'
import { setLoading, setNews } from '../actions'

const api = 'https://coinpinver.com/Subastaexchange/api/getNoticiaNewStructure'

function NewsContainer(){
    const news = useSelector(state => state.news)
    const loading = useSelector(state => state.loading)
    const dispatch = useDispatch()

    useEffect(() =>{
        const fetchNews = async () =>{
            dispatch(setLoading(true))
            const news = await getAPI(api)
            dispatch(setNews(news.data))
            dispatch(setLoading(false))
        }

        fetchNews()
    }, [])

    
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