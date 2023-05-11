import {useRef} from "react"
//import {FaBars, FaTimes} from "react-icons/fa"
import "./Styles/main.css"
function NavBar() {
    // const navRef = useRef();
    return (
        <header>
            <div className="HeaderClass">
                    
                <nav>
                    <h2>
                         
                        <a href="/">NGUYEN MINH NHAT</a>
                    </h2>   
                    <ul>
                        <li>
                            <a className="headerLinks" href="/projects">Projects</a>
                        </li>
                        <li>
                            <a className="headerLinks" href="/cats">Cats</a>
                        </li>
                    
                    </ul> 
                    
                </nav>
            </div>
            
            
        </header>
    );
}

export default NavBar;