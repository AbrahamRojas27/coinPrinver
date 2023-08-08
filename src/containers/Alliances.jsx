import img from '/asssets/full-bitget-logo (1).png'

function Alliances (){
    return(
        <section className='alliances'>
            <div className='alliance-info-img-container'>
                <figure className='alliance-info-img'>
                    <img src='https://www.coinpinver.com/Subastaexchange/public/uploads/news/img/coin.png' alt="biget"/>
                </figure>
            </div>

            <div className='alliance-info'> 
                <h3 className='alliance-title'> 
                    Alianzas de Coinpinver
                </h3>
                <p>
                    Las alianzas que aceptamos siempre seran considerando un valor
                    extra para nuestros usuarios, las empresas que confian en nosotros 
                    deben obligatoriamente cumplir con requisitos de seguridad y
                    confianza, priorizamos a nuestros usuarios por encima de todo.
                </p>

                <div className='alliances-container'>
                    <p className='alliances-title'>Alianzas</p>
                    <div className='alliances-list'>
                        <div className='alliance-container'>
                            <figure className='alliance-img'>
                                <img src={img} alt="biget" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Alliances