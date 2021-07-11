import React, {useState} from 'react'

import Button from '../../atoms/Button'

import Field from '../../molecules/Field'

import styles from './SignupForm.module.css'

const SignupForm = () => {
    const [values, setValues] = useState({})

    const onChange = (name, value) => {
        setValues(val => ({...val, [name]: value}))
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(values, 'login')
    }

    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <Field
                placeholder="First name"
                name="firstName"
                onChange={onChange}
                value={values.firstName}
                required
            />
            <Field
                placeholder="Last name"
                name="lastName"
                onChange={onChange}
                value={values.lastName}
                required
            />
            <Field
                placeholder="Email"
                name="email"
                type="email"
                onChange={onChange}
                value={values.email}
                required
            />
            <Field
                placeholder="Password(6 digits at least, case sensitive)"
                name="password"
                type="password"
                onChange={onChange}
                value={values.password}
                required
            />
            <Field
                placeholder="Confirm password"
                name="confirmPassword"
                type="password"
                onChange={onChange}
                value={values.confirmPassword}
                required
            />
            <Button>Register</Button>
        </form>
    )
}

export default SignupForm