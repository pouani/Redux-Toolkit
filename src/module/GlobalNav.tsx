import React from 'react'
import { NavLink } from 'react-router-dom'
import Style from './GlobalNavStyle.module.css'

const GlobalNav = () => {

    const navLinks = [
        { id: 1, to: '/', label: 'Dashboard' },
        { id: 2, to: '/add', label: 'Add User' }
    ]

  return(
    <nav className={Style.container}>
        {navLinks.map((link) => {
            return (
                <NavLink 
                    key={link.id}
                    to={link.to}
                    className={({ isActive }) => (isActive ? Style.active : '')}
                >{link.label}</NavLink>
            )
        })}
    </nav>
  )
}

export default GlobalNav 