import React, {useState} from 'react'
import selfy from '../img/stojan1600.jpg';

export default function NavLeftContainer({ pages }) {

    const [show, setShow] = useState(false);

    const buttonClicked = () => {
        const getEle = document.getElementById("navHamburger");
        if (!show) {
            getEle.className += " show";
        } else {
            getEle.className = "navbar";
        }
        setShow(prevState => !prevState);
    }

    const menuItemClicked = () => {
        const getEle = document.getElementById("navHamburger");
        getEle.className = "navbar";
        setShow(prevState => !prevState);
    }

    return (
        <React.Fragment>
            <div className="nav-top" >
                <div className="nav-name">
                    <p>Stojan Zajc</p>
                </div>
                <div id="hamburger" className="social-icons-top" onClick={buttonClicked}>
                    <a className="soc-img-top" >
                        <i className="fas fa-bars"></i>
                    </a>
                </div>
            </div>
            <div className="inner-nav">
                <img className="image-nav" src={selfy} alt="Photography" />
            </div>
            <nav className="navbar" id="navHamburger">
                <ul className="nav flex-sm-column">
                    {
                        pages.map(page => (
                            <li className="nav-item" key={page.text}>
                                <a className="nav-link" 
                                    id={page.id} 
                                    href={"#" + page.text} 
                                    onClick={menuItemClicked} >{page.text}</a>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </React.Fragment>
    )
}
