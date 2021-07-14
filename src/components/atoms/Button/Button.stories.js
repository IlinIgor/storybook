import React from 'react'

import ButtonComponent from '.'

export default {
    title: 'Design System/Atoms/Button',
    component: ButtonComponent,
    argTypes: {
        onClick: {
          control: {
            disable: true,
          },
        },
    }
};

export const Button = (args) => (
    <ButtonComponent {...args}/>
);
Button.args = {
    children: 'Sign In',
};