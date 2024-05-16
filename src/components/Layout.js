import { Outlet, Link, useResolvedPath, useMatch } from "react-router-dom";
import './layout.css'
import React, { useState } from "react"

const Layout = () => {
    const [themeIsDark, setThemeIsDark] = useState(false)

    const handleChange = (() => {
        setThemeIsDark(!themeIsDark)
    })
    return (
        <div className={themeIsDark ? "web-dark-theme" : "web"}>
            <nav className={themeIsDark ? "nav-dark-theme" : "nav"}>
                <Link to="/" className="site-title">Joseph Kong</Link>
                <ul>
                    <CustomLink to="/">Home</CustomLink>
                    <CustomLink to="/blog">Blog</CustomLink>
                    <CustomLink to="/projects">Projects</CustomLink>
                    <CustomLink to="/contact">Contact</CustomLink>
                    <button id="theme-button" onClick={handleChange}>Change Theme</button>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}

const CustomLink = ({ to, children, ...props }) => {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to}{...props}>
                {children}
            </Link>
        </li>
    )
}
export default Layout