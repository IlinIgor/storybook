import React from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'

import styles from './NavTab.module.css'

const NavTab = ({children, to}) => {
    return (
        <NavLink
            className={styles.tabItem}
            activeClassName={styles.active}
            to={to}
        >
            {children}
        </NavLink>
    )
}

NavTab.propTypes = {
    children: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired
}

export default NavTab