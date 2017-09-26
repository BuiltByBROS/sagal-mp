export const validate = values => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Por favor ingrese su nombre'
  }
  if (!values.email) {
    errors.email = 'Por favor ingrese un email válido'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Email inválido'
  }

  if (!values.phone) {
    errors.phone = 'Por favor ingrese un teléfono de contacto'
  }
  if (!values.addresseeName) {
    errors.addresseeName = 'Por favor ingrese la dirección del destinatario'
  }
  if (!values.shippingAddress) {
    errors.shippingAddress = 'Por favor ingrese una dirección de envío'
  }
  if (!values.addresseePhone) {
    errors.addresseePhone = 'Por favor ingrese un teléfono de contacto del destinatario'
  }
  return errors
}
