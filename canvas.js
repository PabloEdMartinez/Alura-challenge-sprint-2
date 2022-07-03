let ctx = document.querySelector(".dibujo").getContext("2d");
let ctxd = document.querySelector(".dibujo00").getContext("2d");

function dibujarLineas() {
  ctx.lineWidth = 4;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.strokeStyle = "#011d7a";
  ctx.beginPath();
  var ancho = 600 / palabraSecreta.length;
  for (let i = 0; i < palabraSecreta.length; i++) {
    ctx.moveTo(40 + ancho * i, 80);
    ctx.lineTo(90 + ancho * i, 80);
  }
  ctx.stroke();
  ctx.closePath();
}

function escribirLetraCorrecta(index) {
  ctx.font = "bold 48px Source Serif Pro";
  ctx.lineWidth = 4;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.fillStyle = "#011d7a";
  var ancho = 600 / palabraSecreta.length;
  ctx.fillText(palabraSecreta[index], 48 + ancho * index, 68);
}

function escribirLetraIncorrecta(letra, errorsLeft) {
  ctx.font = "bold 40px Source Serif Pro";
  ctx.lineWidth = 4;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.fillStyle = "#712B75";
  ctx.fillText(letra, 135 + 40 * (10 - errorsLeft), 125, 60);
}

function limpiarDibujo() {
  ctx.clearRect(0, 0, 840, 150);
}

//muñeco

ctxd.fillStyle = "#011d7a";
ctxd.strokeStyle = "#011d7a";
ctxd.lineWidth = 8;
ctxd.stroke();

ctxd.fillRect(40, 300, 240, 8);
ctxd.fillRect(60, 40, 8, 260);

function f1() {
  ctxd.fillRect(60, 40, 120, 8);
}

function f2() {
  ctxd.fillRect(180, 40, 8, 60);
}

//cabeza
function f3() {
  ctxd.arc(184, 122, 25, 0, (Math.PI / 180) * 360, true);
  ctxd.stroke();
}

//torso
function f4() {
  ctxd.fillRect(180, 150, 8, 70);
}

//brazo izquierdo
function f5() {
  ctxd.translate(180, 160);
  ctxd.rotate(Math.PI / 4);
  ctxd.fillRect(0, 0, 8, 50);
}
//brazo derecho
function f6() {
  ctxd.rotate(Math.PI / 2);
  ctxd.fillRect(-5, -55, 8, 50);
}
//pierna izquierda
function f7() {
  ctxd.rotate(Math.PI / 2);
  ctxd.fillRect(-45, -85, 8, 50);
}
//pierna derecha
function f8() {
  ctxd.rotate(Math.PI / 2);
  ctxd.fillRect(-40, 40, 8, 50);
}

function fallos() {
  if (errores == 8) {
    f1();
  }
  if (errores == 7) {
    f2();
  }
  if (errores == 6) {
    f3();
  }
  if (errores == 5) {
    f4();
  }
  if (errores == 4) {
    f5();
  }
  if (errores == 3) {
    f6();
  }
  if (errores == 2) {
    f7();
  }
  if (errores == 1) {
    f8();
    swal("Perdiste!", "La palabra es: " + palabraSecreta, "error");
  }
}

function LimpiarMunheco() {
  ctxd.resetTransform();
  ctxd.clearRect(0, 0, 320, 320);
  ctxd.fillRect(40, 300, 240, 8);
  ctxd.fillRect(60, 40, 8, 260);
}
