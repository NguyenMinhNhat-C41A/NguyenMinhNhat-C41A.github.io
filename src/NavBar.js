import {useRef} from "react"
//import {FaBars, FaTimes} from "react-icons/fa"
import "./Styles/main.css"
function NavBar() {
    const navRef = useRef();
    return (
        <header>
            <div className="HeaderClass"><h2>NGUYEN MINH NHAT</h2></div>
            
            <nav ref={navRef}>
                <a href="/#">Projects</a>
                <a href="/#">Cats</a>
            </nav>
        </header>
    );
}

export default NavBar;