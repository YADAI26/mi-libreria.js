# Librería Enlace de repositorio: validadorForm EQUIPO 10


**validadorForm** 
La librería validadorForm (o cualquier librería con un nombre similar) generalmente se utiliza para validar formularios en aplicaciones web o móviles. 
Su propósito principal es facilitar la validación de datos ingresados por los usuarios, asegurándose de que cumplan con ciertos criterios antes de ser procesados o enviados al servidor.
La librería validadorForm permite validar campos comunes de formularios HTML como usuario, nombre, correo electrónico, contraseña, teléfono y confirmación de contraseña.
Esta librería resuelve el problema de la validación manual en formularios web, evitando errores típicos como correos mal escritos, contraseñas inseguras o teléfonos incompletos.
Se puede utilizar en formularios de registro, encuestas, sitios web escolares o cualquier sistema donde se necesite validar datos antes de enviarlos al servidor, sin necesidad de frameworks externos

---

## 📦INSTALACIÓN
Puedes incluir la librería en tu proyecto HTML mediante una descarga directa del archivo:

🔹 Opción 1: Descarga directa

1.-Descarga el archivo validadorForm.js y colócalo en la misma carpeta de tu proyecto HTML.

2.-Luego inclúyelo así:
<script src="https://cdn.jsdelivr.net/npm/just-validate@4.2.0/dist/just-validate.production.min.js"></script>

---

## USO⚙️
La librería validadorForm proporciona funciones simples que puedes llamar directamente desde JavaScript para validar campos de un formulario. 
Cada función recibe un valor como argumento y devuelve true si es válido o false si no lo es.

## Ejemplo de implementación CODIGO ESENCIAL

#### JavaScript
```javascript
const validation = new JustValidate('#formulario');

validation
  .addField('#usuario', [
    {
      rule: 'required',
      errorMessage: 'El usuario es obligatorio',
    },
    {
      rule: 'customRegexp',
      value: /^[A-Za-z0-9_]{8,16}$/,
      errorMessage: 'Debe tener entre 8 y 16 caracteres, letras, números o guion bajo',
    },
  ])
  .addField('#nombre', [
    {
      rule: 'required',
      errorMessage: 'El nombre es obligatorio',
    },
    {
      rule: 'customRegexp',
      value: /^[A-ZÁÉÍÓÚÑ\s]+$/,
      errorMessage: 'Solo mayúsculas y espacios. Ej: PÉREZ LÓPEZ JUAN',
    },
  ])
  .addField('#password', [
    {
      rule: 'required',
      errorMessage: 'La contraseña es obligatoria',
    },
    {
      rule: 'customRegexp',
      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#\$%\^&\*\-_])[A-Za-z\d!@#\$%\^&\*\-_]{8,}$/,
      errorMessage: 'Contraseña insegura o mal formada',
    },
  ])
  .addField('#confirmar', [
    {
      validator: (value, fields) => value === fields['#password'].elem.value,
      errorMessage: 'Las contraseñas no coinciden',
    },
  ])
  .addField('#correo', [
    {
      rule: 'required',
      errorMessage: 'Correo obligatorio',
    },
    {
      rule: 'email',
      errorMessage: 'Correo inválido',
    },
  ])
  .addField('#telefono', [
    {
      rule: 'required',
      errorMessage: 'Teléfono obligatorio',
    },
    {
      rule: 'customRegexp',
      value: /^[0-9]{10}$/,
      errorMessage: 'Debe contener exactamente 10 dígitos',
    },
  ])
  .addField('#terminos', [
    {
      rule: 'required',
      errorMessage: 'Debes aceptar los términos',
    },
  ])
  .onSuccess((event) => {
    alert('Formulario enviado correctamente');
    event.target.reset();
  });

```

## FORMULARIO VALIDADO
Imagen:
![image](https://github.com/user-attachments/assets/ef939461-111f-457e-8d40-e3b2fd311bf7)



