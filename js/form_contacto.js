<form id="myForm" action="show_data.html" target="_blank" onsubmit="return validarFormulario()">

<script>
function validarFormulario() {
  // Obtener referencias a los campos del formulario
  var nombre = document.forms["myForm"]["firstname"].value;
  var direccion = document.forms["myForm"]["address"].value;
  var ciudad = document.forms["myForm"]["address"].value;
  var correo = document.forms["myForm"]["mail"].value;

  // Validar los campos requeridos
  if (nombre == "" || direccion == "" || ciudad == "" || correo == "") {
    alert("Por favor, complete todos los campos requeridos.");
    return false;
  }

  // Realizar cualquier otra validación adicional aquí

  // Si la validación se pasa, devolver true para enviar el formulario
  return true;
}
</script>
