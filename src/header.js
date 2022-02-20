import React from "react"
import { NavLink } from "react-router-dom"

function Header(){
    return(
        <nav>
            <NavLink exact activeClassName="active" to="/">
                Home
            </NavLink>
            <NavLink exact activeClassName="active" to="/pages/member.js">
                Member
            </NavLink>
            <NavLink exact activeClassName="active" to="/pages/paket.js">
                Paket
            </NavLink>
            <NavLink exact activeClassName="active" to="/pages/user.js">
                User
            </NavLink>
        </nav>
    )
}

export default Header