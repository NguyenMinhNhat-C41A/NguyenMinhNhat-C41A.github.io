import {useRef} from "react"
//import {FaBars, FaTimes} from "react-icons/fa"
import "./Styles/main.css"
function NavBar() {
    const navRef = useRef();
    return (
        <header>
            <h2>NGUYEN MINH NHAT</h2>
            <nav ref={navRef}>
                <a href="/#">Home</a>
                <a href="/#">Cats</a>
            </nav>
        </header>
        
    );
}

export default NavBar;