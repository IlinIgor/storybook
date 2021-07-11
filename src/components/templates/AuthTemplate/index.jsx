import React, {useMemo} from 'react'
import { Route, Redirect, Switch, useLocation } from 'react-router-dom';

import Logo from '../../atoms/Logo'

import AuthTabs from '../../molecules/AuthTabs'

import LoginForm from '../../organisms/LoginForm'
import SignupForm from '../../organisms/SignupForm'

import styles from './AuthTemplate.module.css'

const AUTH_TABS = [{
    to: 'login',
    text: 'Login'
}, {
    to: 'signup',
    text: 'Sign Up'
}]

const AuthTemplate = ({match}) => {
    const {pathname} = useLocation();
    const hasNavTabs = useMemo(() => (
        pathname === match.path ||
        pathname === `${match.path}/login` ||
        pathname === `${match.path}/signup`
    ), [pathname, match.path])

    return (
        <div className={styles.page}>
            <div className={styles.content}>
                <div className={styles.logo}>
                    <Logo />
                </div>
                {hasNavTabs && (
                    <AuthTabs tabs={AUTH_TABS} />
                )}
                <Switch>
                    <Redirect exact from={match.path} to={`${match.path}/login`} />
                    <Route path={`${match.path}/login`} component={LoginForm} />
                    <Route path={`${match.path}/signup`} component={SignupForm} />
                </Switch>
            </div>
        </div>
    )
}

export default AuthTemplate