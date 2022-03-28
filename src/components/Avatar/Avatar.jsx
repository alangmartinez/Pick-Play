import { useState } from 'react';
import './avatar.css';

const Avatar = (props) => {
    // JS
    const src = `https://randomuser.me/api/portraits/lego/${props.id}.jpg`;

    const [avatar, setAvatar] = useState(src);

    const changeAvatar = (e)=> {
        const avatarSelected = e.target.value;
        setAvatar(`https://randomuser.me/api/portraits/lego/${avatarSelected}.jpg`)
    }


    return(
        <>
            <div className="picture-container d-flex align-items-center">
                <picture className="picture">
                    <img className="avatar-img" src = { avatar } alt="lego-img"></img>
                    <p className="name">{ props.name }</p>
                </picture>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center">
            <label htmlFor="change-avatar" className="form-label fw-light d-block">Change your Avatar:</label>
                <select 
                name="change-avatar"
                id="change-avatar"
                className="form-select d-block avatar-select"
                onChange={
                    changeAvatar
                }
                >
                    <option value="1">Default</option>
                    <option value="2">Gentelman</option>
                    <option value="3">Doctor</option>
                    <option value="4">Mechanic</option>
                    <option value="5">Mr.</option>
                    <option value="6">Mexican</option>
                    <option value="7">Operator</option>
                    <option value="8">Chef</option>
                    <option value="9">Miss.</option>
                </select>
            </div>
        </>
    )
}

export default Avatar;