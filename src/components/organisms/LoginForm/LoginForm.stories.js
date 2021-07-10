import React from 'react'
import {MemoryRouter} from 'react-router-dom'

import LoginFormComponent from '.'

export default {
    title: 'Design System/Organisms/Login Form',
    component: LoginFormComponent,
    decorators: [
        (Story) => (
            <MemoryRouter>
                <Story/>
            </MemoryRouter>
        ),
    ],
}

export const LoginForm = (args) => (
    <LoginFormComponent {...args} />
)

LoginForm.args = {

}