export const validate = values => {
  const errors = {}
  errors.addresseeName = !values.addresseeName ? 'Por favor ingrese el nombre del destinatario' : ""
  errors.addresseePhone = !values.addresseePhone ? 'Por favor ingrese un teléfono de contacto del destinatario' : ""
  errors.addresseeEmail = !values.addresseeEmail || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.addresseeEmail) ? 'Por favor ingrese un email válido' : ""
  errors.shippingAddress = !values.shippingAddress ? 'Por favor ingrese la dirección del destinatario' : ""
  errors.addresseeNeighborhood = !values.addresseeNeighborhood ? 'Por favor ingrese el barrio del destinatario' : ""
  errors.sabor1 = !values.sabor1 ? 'Seleccione un sabor' : ""
  errors.sabor2 = !values.sabor2 ? 'Seleccione un sabor' : ""
  errors.sabor3 = !values.sabor3 ? 'Seleccione un sabor' : ""
  errors.sabor4 = !values.sabor4 ? 'Seleccione un sabor' : ""
  errors.sabor5 = !values.sabor5 ? 'Seleccione un sabor' : ""
  errors.sabor6 = !values.sabor6 ? 'Seleccione un sabor' : ""
  errors.sabor7 = !values.sabor7 ? 'Seleccione un sabor' : ""

  return errors
}
