import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './Input.module.css'

const Input = ({
    value,
    placeholder,
    onChange,
    onInvalid,
    hasError,
    type,
    name,
    required
}) => {
    return (
        <input
            className={classNames(styles.input, {
                [styles.inputError]: !!hasError
            })}
            type={type}
            name={name}
            onChange={e => onChange(e.target.name, e.target.value)}
            placeholder={placeholder}
            value={value}
            onInvalid={onInvalid}
            required={required}
        />
    )
}

Input.defaultProps = {
    value: '',
    placeholder: '',
    type: 'text',
    onChange: () => {},
    onInvalid: undefined,
    required: false
}

Input.propTypes = {
    onChange: PropTypes.func,
    onInvalid: PropTypes.func,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['text', 'password', 'email']),
    required: PropTypes.bool
}

export default Input