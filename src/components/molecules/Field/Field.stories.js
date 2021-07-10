import React, {useState} from 'react'

import FieldComponent from '.'

export default {
    title: 'Design System/Molecules/Field',
    component: FieldComponent,
    argTypes: {
        value: {
            control: {
                disable: true,
            },
        },
    },
};

export const Field = (args) => {
    const [value, setValue] = useState(args.value ?? '');
    return (
        <form onSubmit={e => e.preventDefault()}>
            <FieldComponent
                {...args}
                onChange={(name, value) => {
                    args.onChange(name, value);
                    setValue(val => value);
                }}
                value={value}
            />
            <button>Submit</button>
        </form>
    )
}

Field.args = {
    name: 'email',
    placeholder: 'Email',
    type: 'email',
    required: true
};