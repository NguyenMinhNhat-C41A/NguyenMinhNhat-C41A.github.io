import "./Styles/NavBar.css"
function NavBar() {
    return (
        <header>
            <div className="HeaderClass">
                    
                <nav>
                    <h2>
                         
                        <a href="/web">NGUYEN MINH NHAT</a>
                    </h2>   
                    <ul>
                        <li>
                            <a className="headerLinks" href="/projects">Projects</a>
                        </li>
                        <li>
                            <a className="headerLinks" href="/cats">Cats</a>
                        </li>
                        <li>
                            <a className="headerLinks" href="/games">Games</a>
                        </li>
                    
                    </ul> 
                </nav>
            </div>
            
            
        </header>
    );
}

export default NavBar;