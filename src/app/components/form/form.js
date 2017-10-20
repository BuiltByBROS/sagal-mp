import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { buttonContainer, button } from "./form.scss";

import { validate } from "../../utils/validate";
import { renderField, renderSelectField, renderRadioGroup } from "../renderField/renderField";

import CircularProgress from 'material-ui/CircularProgress';
import { MenuItem, RadioButton} from 'material-ui';

import "./form.scss";

import {
  FlatButton,
  RaisedButton
} from 'material-ui';

const options = [
  {value: "opcion1", text: "opcion1"},
  {value: "opcion2", text: "opcion2"},
  {value: "opcion3", text: "opcion3"},
  {value: "opcion4", text: "opcion4"},
  {value: "opcion5", text: "opcion5"},
  {value: "opcion6", text: "opcion6"},
  {value: "opcion7", text: "opcion7"},
  {value: "opcion8", text: "opcion8"},
  {value: "opcion9", text: "opcion9"}
]

let PurchaseForm = props => {
  const { handleSubmit, pristine, reset, submitting, renderButtons, item, title, intro } = props
  return (
    <div className='center'>
      <img src={"http://hoytequiero.com.uy/assets/images/hoytequiero.svg"} />
      <h1>{title}</h1>
      <p>{intro}</p>
      <form className='center' onSubmit={props.handleSubmit(props.submitForm)}>
        <Field name="sabor1" component={renderSelectField} label="Sabor 1">
          { options.map(option => <MenuItem key={option.value} value={option.value} primaryText={option.text} />) }
        </Field>
        <Field name="sabor2" component={renderSelectField} label="Sabor 2">
          { options.map(option => <MenuItem key={option.value} value={option.value} primaryText={option.text} />) }
        </Field>
        <Field name="sabor3" component={renderSelectField} label="Sabor 3">
          { options.map(option => <MenuItem key={option.value} value={option.value} primaryText={option.text} />) }
        </Field>
        <Field name="sabor4" component={renderSelectField} label="Sabor 4">
          { options.map(option => <MenuItem key={option.value} value={option.value} primaryText={option.text} />) }
        </Field>
        {
          item === "cajax7" ?
          <div className='center'>
            <Field name="sabor5" component={renderSelectField} label="Sabor 5">
            { options.map(option => <MenuItem key={option.value} value={option.value} primaryText={option.text} />) }
            </Field>
            <Field name="sabor6" component={renderSelectField} label="Sabor 6">
            { options.map(option => <MenuItem key={option.value} value={option.value} primaryText={option.text} />) }
            </Field>
            <Field name="sabor7" component={renderSelectField} label="Sabor 7">
            { options.map(option => <MenuItem key={option.value} value={option.value} primaryText={option.text} />) }
            </Field>
          </div>
          : null
        }
        <p>¿Los querés en bocaditos?</p>
        <Field name="snacks" component={renderRadioGroup}>
            <RadioButton value="Si" label="Si"/>
            <RadioButton value="No" label="No"/>
        </Field>
        <Field
          name="addresseeName"
          component={renderField}
          type="text"
          placeholder="Nombre de Destinatario"
        />
        <Field
          name="addresseePhone"
          component={renderField}
          type="text"
          placeholder="Teléfono de envío"
        />
        <Field
          name="addresseeEmail"
          component={renderField}
          type="text"
          placeholder="Email de contacto"
        />
        <Field
          name="shippingAddress"
          component={renderField}
          type="text"
          placeholder="Dirección de envío"
        />
        <Field
          name="addresseeNeighborhood"
          component={renderField}
          type="text"
          placeholder="Barrio"
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
    </div>

  )
}

PurchaseForm = reduxForm({
  // a unique name for the form
  form: 'purchaseForm',
  validate
})(PurchaseForm)

export default PurchaseForm;
