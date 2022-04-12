import { useState } from 'react';
import './form.css'

const Form = ()=> {
    
    const [userData, setUserData] = useState({
        name: '',
        surname: ''
    })

    const handleInputChange = (e)=>{
        setUserData({
            ...userData,
            [e.target.name] : e.target.value
        })
        console.log(userData);
    }

    const dataSumbit = (e)=> {
        e.preventDefault();
        e.target.reset();

        JSON.stringify(localStorage.setItem("userData", userData));
    }


    return(
        <> 
            <form 
                className="d-flex form-control gap-4 align-items-center p-4 container mb-3 form-container"
                onSubmit={dataSumbit}
            >
                <h3 className="col-md-2"><i className="fas fa-sign-in-alt me-3"></i>Login :</h3>
                <div className="form-floating col-md-3 form-input">
                    <input 
                        type="text" 
                        name="name" 
                        id="name"
                        className="form-control"
                        placeholder="Name"
                        onChange={handleInputChange}
                    />
                    <label htmlFor="name" className="form-label fw-light">Name</label>
                </div>
                <div className="form-floating col-md-3 form-input">
                    <input 
                        type="text" 
                        name="surname" 
                        id="surname"
                        className="form-control" 
                        placeholder="Surname"
                        onChange={handleInputChange}
                    />
                    <label htmlFor="surname" className="form-label fw-light">Surname</label>
                </div>
                <div className="d-flex justify-content-center align-items-center col-md-3 btn-container">
                    <button 
                        className="btn btn-primary px-4"
                        type="submit"
                    >Submit</button>
                </div>
            </form>
        </>
    )
}

export default Form;