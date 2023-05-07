import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { SingleNewInfo } from '../components/news/SingleNewInfo';
import fetchApi from '../api';

const SINGLE_NEW = 'https://coinpinver.com/Subastaexchange/api/noticia/'

const loader = async ({params}) => {
    const id = params.id
    const response = await fetchApi(`${SINGLE_NEW}${id}`);
    const singleNew = response.data
    return { singleNew } 
}

function SingleNew(){
    const { singleNew } = useLoaderData()
    return(
                <div className='single-new'>
                    <SingleNewInfo 
                    title={singleNew[0].nne_titulo}
                    author={singleNew[0].Nombre}
                    img={singleNew[0].nne_imagen}
                    content={singleNew[0].nne_contenido}
                    freeContent={singleNew[0].contenidoGratis}
                    fecha={singleNew[0].nne_fechaInicio}
                    />
                </div>
    )
}

export { SingleNew, loader }