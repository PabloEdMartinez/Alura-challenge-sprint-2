const palabras = ["HTML", "CSS", "CANVAS", "JAVASCRIPT", "FUNCION", "CONSTANTE"];
var letras = [];
var palabraCorrecta = "";
var palabraSecreta = "";
var errores = 9;
let patron = /[A-Za-z]/;

function sortearPalabras() {
  var palabra = palabras[Math.floor(Math.random() * palabras.length)];
  palabraSecreta = palabra;
  return palabraSecreta;
}

function verificarLetraClicada(key) {
  if (letras.length < 1 || letras.indexOf(key) < 0) {
    letras.push(key);
    return false;
  } else {
    letras.push(key);
    return true;
  }
}

function adicionarLetraCorrecta(i) {
  palabraCorrecta += palabraSecreta[i].toUpperCase();
}

function adicionarLetraIncorrecta(letter) {
  if (palabraSecreta.indexOf(letter) <= 0) {
    errores -= 1;
  }
}

function pulsarTecla() {
  document.onkeyup = (e) => {
    let letra = e.key.toUpperCase();
    if (letra.match(patron) && letra.length < 2) {
      if (!verificarLetraClicada(e.key)) {
        if (palabraSecreta.includes(letra)) {
          for (let i = 0; i < palabraSecreta.length; i++) {
            if (palabraSecreta[i] === letra) {
              escribirLetraCorrecta(i);
              adicionarLetraCorrecta(i);
              if (palabraCorrecta.length == palabraSecreta.length) {
                swal("ganaste!", "", "success");
                break;
              }
            }
          }
        } else {
          if (!verificarLetraClicada(e.key)) return;
          adicionarLetraIncorrecta(letra);
          escribirLetraIncorrecta(letra, errores);
          fallos();
        }
      }
    }
  };
}
