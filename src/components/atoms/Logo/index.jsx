import React from 'react'

import logo from '../../../assets/images/logo-akvelon.png';
import styles from './Logo.module.css'

const Logo = () => (
    <img className={styles.logo} src={logo} alt="akvelon logo" />
)

export default Logo