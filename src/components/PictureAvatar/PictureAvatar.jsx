import './pictureAvatar.css';

const ImgAvatar = (props)=>{

    const avatar = `https://randomuser.me/api/portraits/lego/${props.id}.jpg`;

    return(
        <>
            <picture className="picture">
                <img className="avatar-img" src = {avatar} alt="lego-img"></img>
            </picture>
        </>
    )
}

export default ImgAvatar;