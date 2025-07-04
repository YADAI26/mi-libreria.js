const validation = new JustValidate('#formulario');

validation
  .addField('.campo-usuario', [
    { rule: 'required', errorMessage: 'El usuario es obligatorio' },
    {
      rule: 'customRegexp',
      value: /^[A-Za-z0-9_]{8,16}$/,
      errorMessage: 'Debe tener entre 8 y 16 caracteres, letras, números o guion bajo',
    },
  ])
.addField('.campo-nombre', [
  {
    validator: (value) => {
      return value === '' || /^[A-ZÁÉÍÓÚÑ\s]+$/.test(value);
    },
    errorMessage: 'Solo mayúsculas y espacios. Ej: PÉREZ LÓPEZ JUAN',
  },
])

  .addField('.campo-password', [
    { rule: 'required', errorMessage: 'La contraseña es obligatoria' },
    {
      rule: 'customRegexp',
      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#\$%\^&\*\-_])[A-Za-z\d!@#\$%\^&\*\-_]{8,}$/,
      errorMessage: 'Contraseña insegura o mal formada',
    },
  ])
  .addField('.campo-confirmar', [
    {
      validator: (value, fields) => {
        return value === fields['.campo-password'].elem.value;
      },
      errorMessage: 'Las contraseñas no coinciden',
    },
  ])
  .addField('.campo-correo', [
    { rule: 'required', errorMessage: 'Correo obligatorio' },
    { rule: 'email', errorMessage: 'Correo inválido' },
  ])
  .addField('.campo-telefono', [
    { rule: 'required', errorMessage: 'Teléfono obligatorio' },
    {
      rule: 'customRegexp',
      value: /^[0-9]{10}$/,
      errorMessage: 'Debe contener exactamente 10 dígitos',
    },
  ])
  .addField('.campo-curp', [
    {
      validator: (value) => {
        return value === '' || /^[A-Z0-9]{18}$/.test(value);
      },
      errorMessage: 'CURP inválida. Debe tener 18 caracteres alfanuméricos',
    },
  ])
  .addField('.campo-terminos', [
    { rule: 'required', errorMessage: 'Debes aceptar los términos' },
  ])
  .onSuccess((event) => {
    alert('Formulario enviado correctamente');
    event.target.reset();
  });
