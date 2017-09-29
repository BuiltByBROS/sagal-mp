import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { buttonContainer, button } from "./form.scss";

import { validate } from "../../utils/validate";
import { renderField } from "../renderField/renderField";

import CircularProgress from 'material-ui/CircularProgress';

import "./form.scss";

import {
  FlatButton,
  RaisedButton
} from 'material-ui';

let PurchaseForm = props => {
  const { handleSubmit, pristine, reset, submitting, renderButtons } = props
  return (
    <form className='form' onSubmit={props.handleSubmit(props.submitForm)}>
      <Field
        name="name"
        component={renderField}
        type="text"
        placeholder="Nombre"
      />
      <Field
        name="email"
        component={renderField}
        type="text"
        placeholder="Email"
      />
      <Field
        name="phone"
        component={renderField}
        type="text"
        placeholder="Teléfono"
      />
      <Field
        name="addresseeName"
        component={renderField}
        type="text"
        placeholder="Nombre Destinatario"
      />
      <Field
        name="shippingAddress"
        component={renderField}
        type="text"
        placeholder="Dirección envío"
      />
      <Field
        name="addresseePhone"
        component={renderField}
        type="text"
        placeholder="Teléfono envío"
      />
      <Field
        name="comments"
        component={renderField}
        type="text"
        placeholder="Comentarios"
      />
      {
        renderButtons ?
          <div className='button-container'>
            <RaisedButton className='button' type="submit" disabled={pristine || submitting}>
              Enviar
            </RaisedButton>
            <RaisedButton className='button' disabled={pristine || submitting} onClick={reset}>
              Limpiar
            </RaisedButton>
          </div>
        :
        <CircularProgress />
      }

    </form>
  )
}

PurchaseForm = reduxForm({
  // a unique name for the form
  form: 'purchaseForm',
  validate
})(PurchaseForm)

export default PurchaseForm;
