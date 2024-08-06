import { NavLink, Outlet } from "react-router-dom";
import "../styles/index.css";

function RootLayout () {
    return (
        <>
            <nav className="mark">
                <ul className="menu-list">
                    <li>
                        <NavLink className={({ isActive, isPending}) => isActive ? "active" : isPending ? "pending" : ""} to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive, isPending}) => isActive ? "active" : isPending ? "pending" : ""} to="/blog">Blog</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive, isPending}) => isActive ? "active" : isPending ? "pending" : ""} to="/about">About</NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    );   
}

export default RootLayout;