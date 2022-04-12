import { useState } from 'react';

export const Count = ({stock})=>{
    const [count, setCount] = useState(0);

    const plus =()=>{
        if(count < stock){
            setCount(count + 1);
        }
    }
    const decrease = ()=> {
        if(count > 0){
            setCount(count - 1)
        }
    }

    return(
        <>
            <div className="d-flex justify-content-center align-items-center gap-2 col">
                <button className='btn btn-outline-warning' onClick={decrease}>-</button>
                <span className='count' style={{color: '#000'}}>{count}</span>
                <button className={count == stock ? 'btn btn-outline-warning disabled' : 'btn btn-outline-warning'} onClick={plus}>+</button>
            </div>
        </>
    )
}