import React, { useEffect, useMemo, useRef, useState } from 'react';
import { NewsContainer } from '../containers/NewsContainers';
import { UserPanelNews } from '../containers/UserPanelNews';
import  MobileMenu  from '../containers/MobileMenu';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import SearchIcon from '../components/SearchIcon';
import { setNews } from '../redux/newsSlice';
import LoginButton from '../components/LoginButton';
import { useQuery } from 'react-query';
import { fetchApi } from '../api';
import LoaderGif from '../components/LoaderGif';

function News(){
    const newsData = useSelector(state => state.news.news, shallowEqual)
    const isLoading = useSelector(state =>state.ui.loading)
    const dispatch = useDispatch()

    const [cripto, setCripto] = useState(false)
    const [stock,  setStock] = useState(false)

    const [search, setSearch] = useState("")
    const searchLower = search.toLowerCase()

    const searchedNews =  useMemo(() => 
        newsData ? newsData.data.filter(news => news.nne_titulo.toLowerCase().includes(searchLower)) : [],
    [search, newsData])

    const searchNews = useRef(null)
    const searchNewsMobile = useRef(null)

    const handleInputChange = () =>{
        setSearch(searchNewsMobile.current.value)
    }

    const newsStock = searchedNews.filter(news => news.diferenciador === 'Noticias de acciones/ Bolsa de valores')
    const newsCripto = searchedNews.filter(news => news.diferenciador === 'Noticias de criptomonedas')

    const news = cripto ? newsCripto : stock ? newsStock : searchedNews
    
    const { data, error, isLoading: loading} = useQuery('newsData', () =>(fetchApi('https://coinpinver.com/Subastaexchange/api/getNoticiaNewStructure')))

    useEffect(() =>{
        dispatch(setNews(data))
    }, [data])

    const stockClass = stock ? 'filter-button--active' : 'filter-button'
    const criptoClass = cripto ? 'filter-button--active' : 'filter-button'

    const handleCripto = () =>{
        setCripto(!cripto)
    }
    const handleStock = () =>{
        setStock(!stock)
    }

    isLoading && <LoaderGif/>
    
    return(
            <div className='news'>
                <div className='search-news-mobile'>
                    <input className='input-news-mobile' type="text" value={search} ref={searchNewsMobile} onChange={handleInputChange}/>
                    <div className='button-search-news-mobile'>
                        <SearchIcon/>
                    </div>
                </div>

                <div className='filter-container--mobile'>
                    <button className={criptoClass} onClick={handleCripto}>Criptomonedas</button>
                    <button className={stockClass} onClick={handleStock}>Acciones</button>
                </div>

                <MobileMenu />

                <section className='news-content'>
                    <UserPanelNews 
                        search = {search}
                        setSearch = {setSearch}
                        searchNews = {searchNews}
                        stock = {stock}
                        cripto = {cripto}
                        setStock = {setStock}
                        setCripto = {setCripto}
                        handleStock = {handleStock}
                        handleCripto = {handleCripto}
                    />
                    <NewsContainer
                        news = {news}
                        loading = {loading}
                    /> 
                    <LoginButton/>
                </section>
            </div>
    )
}

export default News 