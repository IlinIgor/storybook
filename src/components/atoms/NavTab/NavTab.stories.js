import React from 'react'
import {MemoryRouter} from 'react-router-dom'

import NavTabComponent from '.'

export default {
    title: 'Design System/Atoms/Nav Tab',
    component: NavTabComponent,
    decorators: [
        (Story) => (
            <MemoryRouter initialEntries={["/login", "/signup"]} initialIndex={0}>
                <Story/>
            </MemoryRouter>
        ),
    ],
}

export const Default = (args) => {
    return (
        <NavTabComponent {...args} />
    )
}

Default.args = {
    to: "/signup",
    children: 'Sign Up'
}

export const Active = (args) => {
    return (
        <NavTabComponent {...args} />
    )
}

Active.args = {
    to: "/login",
    children: 'Login'
}
