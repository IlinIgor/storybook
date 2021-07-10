import React from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'

import styles from './Link.module.css'

const Link = ({children, to}) => {
    return (
        <NavLink className={styles.link} to={to}>{children}</NavLink>
    )
}

Link.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired
}

export default Link