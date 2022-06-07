const palabraN = document.querySelector("#palabraNueva");
var seccion1 = document.querySelector(".s1");
var seccion2 = document.querySelector(".s2");
var seccion3 = document.querySelector(".s3");

seccion2.classList.add("oculto");
seccion3.classList.add("oculto");

function iniciarJuego() {
  palabraCorrecta = "";
  palabraSecreta = "";
  letras = [];
  errores = 9;
  LimpiarMunheco();
  limpiarDibujo();
  dibujarLineas(sortearPalabras());
  agregarOculto();
  seccion3.classList.remove("oculto");
  pulsarTecla();
}

function agregarPalabra() {
  agregarOculto();
  seccion2.classList.remove("oculto");
}

function GuardarYComenzar() {
  palabraCorrecta = "";
  palabraSecreta = "";
  letras = [];
  errores = 9;
  LimpiarMunheco();
  limpiarDibujo();
  palabraSecreta = palabraN.value.toUpperCase();
  dibujarLineas(palabraSecreta);
  palabraN.value = "";
  agregarOculto();
  seccion3.classList.remove("oculto");
  pulsarTecla();
}

function cancelar() {
  agregarOculto();
  seccion1.classList.remove("oculto");
}

function agregarOculto() {
  seccion1.classList.add("oculto");
  seccion2.classList.add("oculto");
  seccion3.classList.add("oculto");
}
