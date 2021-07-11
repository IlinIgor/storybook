import React, {useState} from 'react'

import CheckboxComponent from '.'

export default {
    title: 'Design System/Atoms/Checkbox',
    component: CheckboxComponent,
    argTypes: {
        value: {
          control: {
            disable: true,
          },
        },
    }
};

export const Checkbox = (args) => {
    const [values, setValues] = useState(args.value ?? false);
    return (
        <CheckboxComponent
            {...args}
            onChange={(name, value) => {
                args.onChange(name, value);
                setValues(val => ({...val, [name]: value}));
            }}
            value={values[args.name]}
        />
    )
};
Checkbox.args = {
    label: 'Remember me',
    name: 'rememberMe',
    value: false
};