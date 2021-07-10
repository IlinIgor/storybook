import React from 'react'
import PropTypes from 'prop-types'

import NavTab from '../../atoms/NavTab'

import styles from './AuthTabs.module.css'

const AuthTabs = ({tabs}) => {
    return (
        <div className={styles.tabs}>
            {tabs.map(tab => (
                <NavTab key={tab.to} to={tab.to}>
                    {tab.text}
                </NavTab>
            ))}
        </div>
    )
}

AuthTabs.propTypes = {
    tabs: PropTypes.arrayOf(
        PropTypes.shape({
            to: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
        })
    ).isRequired
}

export default AuthTabs