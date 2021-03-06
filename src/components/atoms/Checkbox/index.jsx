import React from 'react'
import PropTypes from 'prop-types'

import styles from './Checkbox.module.css'

const Checkbox = ({label, value, name, onChange}) => {
    return (
        <label className={styles.label}>
            <input
                className={styles.checkbox}
                type="checkbox"
                name={name}
                checked={value}
                onChange={e => onChange(e.target.name, e.target.checked)}
            />
            <span className={styles.text}>{label}</span>
        </label>
    )
}

Checkbox.defaultProps = {
    value: false
}

Checkbox.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.bool,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

export default Checkbox