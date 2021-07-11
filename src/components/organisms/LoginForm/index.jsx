import React, {useState} from 'react'

import Checkbox from '../../atoms/Checkbox'
import Link from '../../atoms/Link'
import Button from '../../atoms/Button'

import Field from '../../molecules/Field'

import styles from './LoginForm.module.css'

const LoginForm = () => {
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
                placeholder="Email"
                type="email"
                name="email"
                onChange={onChange}
                value={values.email}
                required
            />
            <Field
                placeholder="Password"
                name="password"
                type="password"
                onChange={onChange}
                value={values.password}
                required
            />
            <div className={styles.row}>
                <Checkbox
                    name="rememberMe"
                    label="Remember me"
                    value={values.rememberMe}
                    onChange={onChange}
                />
                <Link to="password">Forgot your password?</Link>
            </div>
            <Button>Sign In</Button>
        </form>
    )
}

export default LoginForm