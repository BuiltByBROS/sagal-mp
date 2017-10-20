import React from 'react';

import { TextField, SelectField, RadioButtonGroup } from 'material-ui';

import "./renderField.scss"

export const renderField = ({
  input,
  label,
  type,
  placeholder,
  meta: { touched, error }
}) =>
  <div className='text-field'>
    <TextField
      {...input}
      floatingLabelText={placeholder}
      type={type}
      errorText={touched ? error : ""}
      errorStyle={{position: 'absolute', top: '67px'}}
    />
  </div>

export const renderSelectField = ({ input, label, meta: { touched, error }, children }) => (
  <SelectField
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    onChange={(event, index, value) => input.onChange(value)}
    children={children}/>
)

export const renderRadioGroup = ({ input, ...rest }) => (
  <RadioButtonGroup {...input} {...rest}
    floatingLabelText={"bocaditos"}
    valueSelected={input.value}
    onChange={(event, value) => input.onChange(value)}/>
)
