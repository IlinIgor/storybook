import React, {useState} from 'react'

import InputComponent from '.'

export default {
    title: 'Design System/Atoms/Input',
    component: InputComponent,
    argTypes: {
        value: {
            control: {
                disable: true,
            },
        },
    },
};

const Template = (args) => {
    const [value, setValue] = useState(args.value ?? '');
    return (
        <InputComponent
            {...args}
            onChange={(name, value) => {
                args.onChange(name, value);
                setValue(value);
            }}
            value={value}
        />
    )
};

export const Default = Template.bind({});;

Default.args = {
    name: 'name',
    placeholder: 'First name',
};

export const WithError = Template.bind({});

WithError.args = {
    name: 'email',
    placeholder: 'Email',
    type: 'email',
    hasError: true,
    required: true
};