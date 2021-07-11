import React from 'react'
import {MemoryRouter} from 'react-router-dom'

import AuthTemplateComponent from '.'

export default {
    title: 'Design System/Templates/Auth Template',
    component: AuthTemplateComponent,
    decorators: [
        (Story) => (
            <MemoryRouter initialEntries={["/auth/login"]} initialIndex={0}>
                <Story/>
            </MemoryRouter>
        ),
    ],
    argTypes: {
        match: {
            control: {
                disable: true,
            },
        },
    },
    parameters: {
        layout: 'fullscreen'
    }
}

export const AuthTemplate = (args) => (
    <AuthTemplateComponent {...args} />
)

AuthTemplate.args = {
    match: {
        path: '/auth'
    }
}