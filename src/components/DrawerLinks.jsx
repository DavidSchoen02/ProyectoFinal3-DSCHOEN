import React from 'react'
import { NavLink } from 'react-router-dom';

const DrawerLinks = (url, name) => {
    return (

        <li>
            <NavLink to={url}>{name}</NavLink>
        </li>
    )
}

export default DrawerLinks