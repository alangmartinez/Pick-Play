import './ItemListContainer.css';
import SelectGame from './../SelectGame/SelectGame';
import { ItemList } from './../ItemList/ItemList';

const ItemListContainer = ()=>{

    return(
        <>
            <h2 className='title'>Games</h2>
            <div className='d-flex justify-content-center align-items-center gap-3'>
                <SelectGame title='Play Station' src='./images/play-station.jpg'/>
                <SelectGame title='Computer Games' src='./images/computer.jpg'/>
            </div>
            <div className="container mt-5">
                <h3 className='subtitle mt-3' style={{color: '#000'}}>Newest</h3>
                <hr style={{color: '#000'}}/>
            </div>
            <ItemList/>
        </>
    )
}

export default ItemListContainer;