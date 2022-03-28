
const SelectGame = (props)=> {

    return(
        <>
            <div className="container">
                <picture>
                    <img src="../../assets/img/play-station.jpg" alt="computer games" />
                    <h5>{props.title}</h5>
                </picture>
            </div>
        </>
    )
}

export default SelectGame;