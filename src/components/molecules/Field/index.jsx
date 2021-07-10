import React, {useState} from 'react'
import PropTypes from 'prop-types'

import Input from '../../atoms/Input'

import styles from './Field.module.css'

const getErrorMessage = ({typeMismatch, valueMissing}) => {
    if (typeMismatch) return `Value isn't correct`
    if (valueMissing) return  `Field is required`
}

const Field = ({
    onChange,
    ...props
}) => {
    const [error, setError] = useState('');
    return (
        <div className={styles.container}>
            <Input
                hasError={!!error}
                onChange={(...props) => {
                    setError('')
                    onChange(...props)
                }}
                onInvalid={(e) => {
                    const {typeMismatch, valueMissing} = e.target.validity
                    if (typeMismatch || valueMissing) {
                        e.preventDefault()
                        setError(getErrorMessage({typeMismatch, valueMissing}))
                    }
                }}
                {...props}
            />
            {error && (
                <div className={styles.error}>
                    <span className={styles.errorText}>{error}</span>
                </div>
            )}
        </div>
    )
}

Field.defaultProps = {
    onChange: () => {},
}

Field.propTypes = {
    onChange: PropTypes.func,
}

export default Field