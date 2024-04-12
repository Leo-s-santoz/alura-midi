function tocaSom(idElementAudio) {
  document.querySelector(idElementAudio).play();
}

const listaDeTeclas = document.querySelectorAll(`.tecla`);

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`;

  tecla.onclick = function () {
    tocaSom(idAudio);
  };

  tecla.onkeydown = function (e) {
    if (e.code === `Space` || e.code === `Enter`) {
      tecla.classList.add(`ativa`);
    }
  };

  tecla.onkeyup = function () {
    tecla.classList.remove(`ativa`);
  };
}
