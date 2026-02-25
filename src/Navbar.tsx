import { Link } from "react-router-dom";
import "./Navbar.css"
import logo from "/T1+red.png";

export default function Navbar() {
    return (
        <nav className="navbar">
            <ul className="logo-link">
                <li><img src={logo} alt="t1-logo" /></li>
                <li><Link to="/SBI-Archive/" className="nav-link"><h1>SBI Archive</h1></Link></li>
            </ul>
            
            <ul className="nav-links">
                <li><Link to="/SBI-Archive/SBI1" className="nav-link">SBI I</Link></li>
                <li><Link to="/SBI-Archive/SBI1" className="nav-link">SBI II</Link></li>
                <li><Link to="/SBI-Archive/SBI1" className="nav-link">SBI III</Link></li>
                <li><Link to="/SBI-Archive/SBI1" className="nav-link">SBI IV</Link></li>
                <li><Link to="/SBI-Archive/SBI1" className="nav-link">SBI V</Link></li>
                <li><Link to="/SBI-Archive/Players" className="nav-link">Players</Link></li>
                <li><Link to="/SBI-Archive/SBI1" className="nav-link">Teams</Link></li>
                <li><Link to="/SBI-Archive/SBI1" className="nav-link">Games</Link></li>
                <li><Link to="/SBI-Archive/SBI1" className="nav-link">Stats</Link></li>
            </ul>
        </nav>
    )
}
