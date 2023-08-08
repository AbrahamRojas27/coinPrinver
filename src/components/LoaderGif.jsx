import img from '/asssets/gif-cpge.gif'


function LoaderGif(){
    return(
        <div className='loader-gif-container'>
            <figure className='loader-gif'>
                <img src={img} alt="" />
            </figure>
        </div>
    )
}

export default LoaderGif