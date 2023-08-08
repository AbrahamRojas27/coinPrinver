import React, { useEffect, useRef, useState } from "react";
import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation, Pagination, Scrollbar } from 'swiper';
import 'swiper/css';
import "swiper/css/pagination";
import { NewsCard } from '../components/news/NewsCard'
import {fetchApi} from '../api'
import { useLazyLoad } from "../hooks/useLazy";
import { useQueries, useQuery } from "react-query";
import LoaderSpinner from "../components/LoaderSpinner";

const items = [] 
function NewsPreview(){
    const api = 'https://coinpinver.com/Subastaexchange/api/noticiasDestacadas'

    const {data, isLoading, error} = useQuery('newsPreview', () =>(fetchApi(api)))

    const element = useRef()
    const isIntersecting = useLazyLoad(element)
    return(
        <section ref={element} className="news-preview">
            {isIntersecting && (
                <>
                    <h3 className='news-preview-title'>INFÓRMATE PARA TOMAR BUENAS DECISIONES EN TUS INVERSIONES</h3>                    
                    <Swiper
                    loop= {true}
                    pagination={{
                        el: '.swiper-pagination'
                    }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        clickable: true
                    }}
                    breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 50,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    }}
                    modules={[Pagination, Navigation, Scrollbar]}
                    className="mySwiper"
                    > 
                    {
                        isLoading 
                            ? <LoaderSpinner/>
                            : data.data.map(item => (
                                    <SwiperSlide                                 
                                        key={item.nne_id}
                                    >
                                        <NewsCard 
                                            title={item.nne_titulo}
                                            description= {item.nne_descripcion}
                                            img={item.nne_imagenPreview}
                                            author={item.Nombre}
                                            content={item.nne_contenido}
                                            date={item.nne_fechaPublicacion}
                                            slug={`news/${item.nne_id}`}
                                        />
                                    </SwiperSlide>
        
                                ))
                    }

                    <button className="swiper-button-next">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            fill="currentColor"
                            className="bi bi-caret-right-fill"
                        >
                            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                        </svg>
                    </button>
                    <button className="swiper-button-prev">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            fill="currentColor"
                            className="bi bi-caret-left-fill"
                        >
                            <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                        </svg>                  
                    </button>

                    <div className="swiper-pagination"></div>
                    </Swiper>
                </>
            )}
        </section>
    )
}

export default NewsPreview 
