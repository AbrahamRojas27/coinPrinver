import React, { useEffect, useState } from 'react';
import { NewsContainer } from '../containers/NewsContainers';
import { UserPanelNews } from '../containers/UserPanelNews';
import { MobileMenu } from '../containers/MobileMenu';
import { useSelector, useDispatch } from 'react-redux';
import { setLoading } from '../actions';
import SearchIcon from '../components/SearchIcon';
import getAPI from '../api'

const api = 'https://coinpinver.com/Subastaexchange/api/getNoticiaNewStructure'

function News(){
    const loading = useSelector(state => state.loading)

    const [search, setSearch] = useState("")
    const searchLower = search.toLowerCase()

    const [news, setNews] = useState([]) 
    const dispatch = useDispatch()

    const handleInputChange = (e) =>{
        setSearch(e.target.value)
    }

    const searchNews = (e) =>{
        e.preventDefault;
        const searchedNews = news.filter(news => news.nne_titulo.toLowerCase().includes(searchLower))
        setNews(searchedNews)
    }

    useEffect(() =>{
        if(search.length === 0){
            const fetchNews = async () =>{
                dispatch(setLoading(true))
                const news = await getAPI(api)
                setNews(news.data)
                dispatch(setLoading(false))
            }
            fetchNews()
        }
    }, [search])
    return(
            <div className='news'>
                <div className='search-news-mobile'>
                    <input className='input-news-mobile' type="text" value={search} onChange={handleInputChange}/>
                    <button className='button-search-news-mobile' onClick={searchNews}>
                        <SearchIcon/>
                    </button>
                </div>
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