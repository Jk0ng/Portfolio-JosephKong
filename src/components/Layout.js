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
                <Link to="/" className="site-title">dev</Link>
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
    // useResolved - react hook to resolve relative and absolute paths as absolute paths. // 
    const resolvedPath = useResolvedPath(to)

    // useMatch - compares the given path to the current path. "End: true" make sure path names find a 100% match rather than partial match. // 
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