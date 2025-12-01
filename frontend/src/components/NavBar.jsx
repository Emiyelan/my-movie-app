import { Link } from "react-router-dom"
import "../css/Navbar.css"

function NavBar(){
    return  <nav className="navbar">
        <div className="navbar-brand">
           <Link to="/">Movie App</Link>
        </div>
        <nav className="navbar-links">
           <Link to="/"className="navbar-links">Home</Link>
           <Link to="/favorites"className="navbar-links">Favorites</Link>  
        </nav>
    </nav>
}

export default NavBar