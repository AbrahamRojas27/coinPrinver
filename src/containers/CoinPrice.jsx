import React, { useEffect, useState } from 'react';
import { CoinPriceCard } from '../components/coinPrice/CoinPriceCard';
import fetchApi from '../api';

const api = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false';

function CoinPrice(){
    const [items, setItems] = useState([])

    useEffect(() =>{
        const fetchNews =async () => {
            const items = await fetchApi(api)
            setItems(items)
        }

        fetchNews()
    }, [])

    return(
            <section className='coin-price-container'>
                <article className='coin-price-slide'>
                    {/* {
                        items.map(item =>(
                            <CoinPriceCard 
                            coin={item.name}
                            key={item.id}
                            coinPrice={`$${item.current_price}`}
                            />
                        ))
                    } */}
                </article>
            </section>
    )
}

export { CoinPrice }