import './SelectGame.css'


const SelectGame = ({src, title})=> {

    return(
        <>
            <picture className='game'>
                <img src={src} alt="computer games" className='game-img shadow-lg'/>
                <h5 className='title'>{title}</h5>
            </picture>
        </>
    )
}

export default SelectGame;