import React, { useEffect, useState } from "react";
import { NewsCard } from '../components/news/NewsCard'
import getAPI from '../api'

const items = [] 
function NewsPreview(){
    const [news, setNews] = useState([]);
    const api = 'https://coinpinver.com/Subastaexchange/api/noticiasDestacadas'

    useEffect(() =>{
        const fetchNews = async () =>{
            const news = await getAPI(api);
            setNews(news.data)
        }

        fetchNews()
    }, [])
    return(
        <section className="news-preview">
                <h3 className='news-preview-title'>INFÓRMATE PARA TOMAR BUENAS DECISIONES EN TUS INVERSIONES</h3>
            <div className="news-preview-slide-container">
                <div className="news-preview-slide">
                    {
                        news.map(item => (
                            <NewsCard 
                                key={item.nne_id}
                                title={item.nne_titulo}
                                description= {item.nne_descripcion}
                                img={item.nne_imagenPreview}
                                author={item.Nombre}
                                content={item.nne_contenido}
                                slug={`news/${item.nne_id}`}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export { NewsPreview }