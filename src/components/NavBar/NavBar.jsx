import './navBar.css';
import Search from '.././Search/Search';
import CartWidget from './../CartWidget/CartWidget';

const NavBar = ()=>{

    const menu = ['Home', 'PC', 'Play Station', 'Contact Us'];

    return(
        <>
            <nav className="nav-bar d-flex justify-content-center align-items-center">
                <Search/>
                <CartWidget quantity={[]}/>
                <ul className="menu-list d-flex justify-content-end align-items-center gap-5">
                    {
                        menu.map((item, index)=>{
                            return <a 
                                        className="link" 
                                        key={index}
                                    >
                                        <li className="list-item">{item}</li>
                                    </a>
                        })
                    }
                </ul>
                <i className="fa-solid fa-right-to-bracket"></i>
            </nav>
        </>
    )
}

export default NavBar;