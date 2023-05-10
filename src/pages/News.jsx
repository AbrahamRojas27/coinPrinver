import React, { useEffect, useState } from 'react';
import { NewsContainer } from '../containers/NewsContainers';
import { UserPanelNews } from '../containers/UserPanelNews';
import { MobileMenu } from '../containers/MobileMenu';
import { useSelector, useDispatch } from 'react-redux';
import { setLoading } from '../actions';
import getAPI from '../api'

const api = 'https://coinpinver.com/Subastaexchange/api/getNoticiaNewStructure'

function News(){
    const loading = useSelector(state => state.loading)

    const [search, setSearch] = useState("")

    const [news, setNews] = useState([]) 
    const dispatch = useDispatch()
    let newsData

    useEffect(() =>{
        if(search.length === 0){
            const fetchNews = async () =>{
                dispatch(setLoading(true))
                const news = await getAPI(api)
                newsData = news.data
                setNews(news.data)
                dispatch(setLoading(false))
            }
            fetchNews()
        }
    }, [search])

    return(
            <div className='news'>
                <MobileMenu />
                <section className='news-content'>
                    <UserPanelNews 
                        news = {news}
                        setNews = {setNews}
                        search = {search}
                        setSearch = {setSearch}
                    />
                    <NewsContainer
                        loading = {loading}
                        news = {news}
                    /> 
                </section>
            </div>
    )
}

export default News 