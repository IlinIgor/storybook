import React from 'react'
import PropTypes from 'prop-types'

import styles from './Button.module.css'

const Button = ({children, onClick}) => {
    return (
        <button className={styles.button} onClick={onClick}>{children}</button>
    )
}

Button.propTypes = {
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func
}

Button.defaultProps = {
    onClick: undefined
}

export default Button