import React, { useEffect } from 'react';
import { NewsContainer } from '../containers/NewsContainers';
import { UserPanelNews } from '../containers/UserPanelNews';
import { MobileMenu } from '../containers/MobileMenu';
import { useSelector } from 'react-redux';
import { LoadingSkeleton } from '../components/news/LoadingSkeleton';

function News(){
    const loading = useSelector(state => state.loading)

    useEffect(() => {
        if(localStorage.getItem('username')){
            const userLocalStrage = {
                nombre: localStorage.getItem('username'),
                membresia: localStorage.getItem('membership'),
                imagen: localStorage.getItem('userImagen'),
                jwt: localStorage.getItem('userKey'),
            }
            info.setUser(userLocalStrage)
        } 
    }, [])

    return(
            <div className='news'>
                <MobileMenu />
                <section className='news-content'>
                    <UserPanelNews />
                    <NewsContainer/> 
                </section>
            </div>
    )
}

export default News 