import React from 'react';

import { TextField } from 'material-ui';

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
