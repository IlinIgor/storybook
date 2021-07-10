import React from 'react'
import {MemoryRouter} from 'react-router-dom'

import AuthTabsComponent from '.'

export default {
    title: 'Design System/Molecules/Auth Tabs',
    components: AuthTabsComponent,
    decorators: [
        (Story) => (
            <MemoryRouter initialEntries={["/login", "/signup"]} initialIndex={0}>
                <Story/>
            </MemoryRouter>
        ),
    ],
}

export const AuthTabs = (args) => (
    <AuthTabsComponent {...args} />
)

AuthTabs.args = {
    tabs: [{
        to: '/login',
        text: 'Login'
    }, {
        to: '/signup',
        text: 'Sign Up'
    }]
}