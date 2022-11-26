function calcularIMC() {
  var nombre = document.getElementById('raza').value;
  var alturaEnCentimetros = parseInt(document.getElementById('edad').value);
  var alturaEnMetros = alturaEnCentimetros / 100;
  var pesoEnKilos = parseInt(document.getElementById('peso').value);

  var imc = Math.round(pesoEnKilos * 130);

  var respuesta = 'Hola, Tu perro de raza ' + nombre + ' necesita ' + imc + ' Kcal/dia por dia ';
}
