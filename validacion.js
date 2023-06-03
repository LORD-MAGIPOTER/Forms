function formatPhoneNumber(input) {
  // Obtener el valor del campo de entrada y eliminar los espacios existentes
  const inputValue = input.value.replace(/\s/g, '');

  // Aplicar el formato deseado utilizando una expresión regular
  // Los grupos de tres dígitos se separan con espacios
  const formattedInput = inputValue.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3');

  // Actualizar el valor del campo de entrada con el número formateado
  input.value = formattedInput;
}
