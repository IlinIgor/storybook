import React from 'react'
import {MemoryRouter} from 'react-router-dom'

import SignupFormComponent from '.'

export default {
    title: 'Design System/Organisms/Signup Form',
    component: SignupFormComponent,
    decorators: [
        (Story) => (
            <MemoryRouter>
                <Story/>
            </MemoryRouter>
        ),
    ],
}

export const SignupForm = (args) => (
    <SignupFormComponent {...args} />
)

SignupForm.args = {

}