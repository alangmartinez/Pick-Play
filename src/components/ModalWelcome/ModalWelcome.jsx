import ImgAvatar from '../PictureAvatar/PictureAvatar';
import './modalWelcome.css';

const NewComponent = (props)=>{

    return(
        <div className="container px-0">
            <div className="form-control my-4 container d-flex p-3 welcome-box-container position-relative ms-0">
                <ImgAvatar id={1} />
                <div className="media-body ms-4 py-4">
                    <h5 className="mt-0">Hi {props.name} ! </h5>
                    <p>I will be your Avatar. Welcome !</p>
                </div>
                <button className="btn btn-primary h-25 position-absolute bottom-0 end-0 mb-4 me-4 px-4">Start</button>
            </div>
        </div>
    )
}

export default NewComponent;