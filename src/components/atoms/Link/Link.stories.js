import React from 'react'
import {MemoryRouter} from 'react-router-dom'

import LinkComponent from '.'

export default {
    title: 'Design System/Atoms/Link',
    component: LinkComponent,
    decorators: [
        (Story) => (
            <MemoryRouter>
                <Story/>
            </MemoryRouter>
        ),
    ],
}

export const Link = (args) => (
    <LinkComponent {...args} />
)
Link.args = {
    children: 'Forgot your password?',
    to: '/'
}