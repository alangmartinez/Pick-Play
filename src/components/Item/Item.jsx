import './Item.css';
import { Count } from './../Count/Count';
import { useEffect } from 'react';

export const Item = ({id, title, img, price, stock})=>{

    useEffect(()=>{
        console.log('Se ha montado el componente !');
    },[])

    console.log('Se va montar el componente...');

    return(
        <>
            <div className="card shadow-lg" key={id}>
                <img src={img} className="card-img-top img-fluid" alt={title}/>
                <div className="card-body shadow-lg">
                    <h5 className="card-title">{title}</h5>
                    <span className='price ms-auto me-0' style={{color: '#000', fontSize: '.9rem'}}>{price}</span>
                    <hr className='hr'/>
                    <p className="card-text" style={{color: '#000'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className='row'>
                        <Count stock={stock}></Count>
                        <a className="btn btn-warning me-3 col-5">
                            View Details
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}