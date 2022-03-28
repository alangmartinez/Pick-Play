import React, { useState } from 'react';
import '../App.css';

const Lista = ()=> {

    const [arrayNombres, setNombre] = useState([]);

    const addName = ()=> {
        const name = document.getElementById("list-name");
        const nameToAdd = name.value;

        setNombre(
            [...arrayNombres, nameToAdd]
        );
    }

    const deleteName = ()=> {
        const name = document.getElementById("list-name");
        const nameToDelete = name.value;

        setNombre(
            arrayNombres.filter(name => {
                return name.toLowerCase() !== nameToDelete.toLowerCase();
            })
        )
    }

    return(
        <>
            <div className="container">
            <ul id="list" className="list">List:
                {
                    arrayNombres.map( (nombre,index) => {
                        return <li className="list-item" key={index}>{nombre}</li>
                    })
                }
            </ul>
                <label htmlFor="list-name" className="form-label">Enter a new name:</label>
                <input 
                    type="text" 
                    name="name" 
                    id="list-name"
                    className="form-control col-md-1 me-auto w-50"
                    placeholder="Type here"
                    autoComplete="none"
                />
                <button 
                    onClick={addName}
                    className="btn btn-primary px-4 my-3 me-3"
                >
                    Add Name
                </button>
                <button 
                    onClick={deleteName}
                    className="btn btn-danger px-4 my-3 me-3"
                >
                    Delete Name
                </button>
            </div>
        </>
    )
}

export default Lista;