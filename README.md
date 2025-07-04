# Librería Enlace de repositorio: validadorForm EQUIPO 10


**validadorForm** La librería validadorForm permite validar campos comunes de formularios HTML como usuario, nombre, correo electrónico, contraseña, teléfono y confirmación de contraseña.

Esta librería resuelve el problema de la validación manual en formularios web, evitando errores típicos como correos mal escritos, contraseñas inseguras o teléfonos incompletos.

Se puede utilizar en formularios de registro, encuestas, sitios web escolares o cualquier sistema donde se necesite validar datos antes de enviarlos al servidor, sin necesidad de frameworks externos

---

## 📦INSTALACIÓN
Puedes incluir la librería en tu proyecto HTML mediante una descarga directa del archivo:
🔹 Opción 1: Descarga directa
1.-Descarga el archivo validadorForm.js y colócalo en la misma carpeta de tu proyecto HTML.
2.-Luego inclúyelo así:
<script src="https://cdn.jsdelivr.net/npm/just-validate@4.2.0/dist/just-validate.production.min.js"></script>

## USO⚙️
La librería validadorForm proporciona funciones simples que puedes llamar directamente desde JavaScript para validar campos de un formulario. 
Cada función recibe un valor como argumento y devuelve true si es válido o false si no lo es.

Ejemplo de implementación 
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Prueba de validadorForm</title>
  <script src="validadorForm.js"></script>
</head>
<body>
  <h2>Validar formulario</h2>

  <input type="text" id="usuario" placeholder="Usuario">
  <input type="text" id="correo" placeholder="Correo">
  <input type="password" id="password" placeholder="Contraseña">
  <input type="password" id="confirmar" placeholder="Confirmar contraseña">
  <button onclick="validarFormulario()">Validar</button>

  <script>
    function validarFormulario() {
      const usuario = document.getElementById("usuario").value;
      const correo = document.getElementById("correo").value;
      const pass = document.getElementById("password").value;
      const pass2 = document.getElementById("confirmar").value;

      if (!validadorForm.validarUsuario(usuario)) {
        alert("Usuario inválido");
        return;
      }

      if (!validadorForm.validarCorreo(correo)) {
        alert("Correo inválido");
        return;
      }

      if (!validadorForm.validarContrasena(pass)) {
        alert("Contraseña insegura");
        return;
      }

      if (!validadorForm.confirmarContrasena(pass, pass2)) {
        alert("Las contraseñas no coinciden");
        return;
      }

      alert("¡Formulario válido!");
    }
  </script>
</body>
</html>


