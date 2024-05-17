function cambiarTabPromociones(claseTab) {
  //Formateo
  var tabPrevio = document.getElementsByClassName('tabActive')[0];
  var imagentabPrevio = tabPrevio.getElementsByClassName('img-TabPromocion')[0];
  var imagentabPrevioInactiva = tabPrevio.attributes.imagenInactiva.nodeValue;

  imagentabPrevio.src = imagentabPrevioInactiva;
  tabPrevio.classList.remove('tabActive');

  var cards = document.getElementsByClassName('cardPromocion');
  var cardsTab = document.getElementsByClassName(claseTab);

  for (var i = 0; i < cards.length; i++) {
      cards[i].classList.remove('visible')
  }

  //Activación
  var maxCards = 9;
  if (cardsTab.length < 9) {
      maxCards = cardsTab.length;
      document.getElementById("btnVerMasCardsPromociones").style.display = "none";
  }
  else {
      document.getElementById("btnVerMasCardsPromociones").style.display = "block";
  }

  for (var i = 0; i < maxCards; i++) {
      cardsTab[i].classList.add('visible')
  }

  var tabActual = document.getElementById(claseTab);
  var imagentabActual = tabActual.getElementsByClassName('img-TabPromocion')[0];
  var imagentabActualActiva = tabActual.attributes.imagenActiva.nodeValue;
  imagentabActual.src = imagentabActualActiva;
  tabActual.classList.add('tabActive');
}

function mostrarMasCardsPromociones() {
  var idTabActual = document.getElementsByClassName('tabActive')[0].id;
  var cards = document.getElementsByClassName(idTabActual);
  var contCardsRestantes = 0;
  var contCardsQueAparecen = 0;
  for (var i = 0; i < cards.length; i++) {
      if (!cards[i].classList.contains('visible')) {
          if (contCardsQueAparecen < 3) {
              cards[i].classList.add('visible');
              contCardsQueAparecen++;
          }
          else {
              contCardsRestantes++;
          }
      }
  }

  if (contCardsRestantes == 0) {
      document.getElementById("btnVerMasCardsPromociones").style.display = "none";
  }
}

function moverCategorias(direction) {
  var container = document.getElementById('listadoCategoriasPromociones');
  scrollCompleted = 0;
  var slideVar = setInterval(function () {
      if (direction == 'left') {
          container.scrollLeft -= 15;
      } else {
          container.scrollLeft += 10;
      }
      scrollCompleted += 10;
      if (scrollCompleted >= 100) {
          window.clearInterval(slideVar);
      }
  }, 50);
}