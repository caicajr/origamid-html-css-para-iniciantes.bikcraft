// Items do orçamento

const parametros = new URLSearchParams(location.search);

parametros.forEach((produto) => {
  const param = document.getElementById(produto);
  if (param) param.checked = true;
});

// Faq perguntas
const perguntas = document.querySelectorAll(".perguntas button");

/** Modifica o ´aria-expanded´ da tag <dt>, e a visibilidade do <dd> respectivo
 *  de acordo com o valor presente no atributo ´aria-controls´ do <dt>
 *
 * @param {Event} event
 */
function handleClickFaq(event) {
  const texto = document.getElementById(
    event.target.getAttribute("aria-controls")
  );
  event.target.setAttribute(
    "aria-expanded",
    texto.classList.toggle("faq-ativo")
  );
}

perguntas.forEach((pergunta) => {
  pergunta.addEventListener("click", handleClickFaq);
});

// Galeria de bicicletas
/**
 * @param {Event} event
 * @param {Element} img
 * @param {Number} minWidth
 *  */
function imagemTroca(img, atributo, minWidth, event) {
  if (!matchMedia(`(min-width: ${minWidth})`).matches) return;

  let temp = img.getAttribute(atributo);
  img.setAttribute(atributo, event.target.getAttribute(atributo));
  event.target.setAttribute(atributo, temp);
}

/** Para cada atributo de cada elemento, adiciona um evento de 'click',
 *  que chama a função 'imagemTroca'
 *
 * @param {Array} galeria
 * @param {Element} mainImg
 * @param {Number} minWidth
 * */
function galeriaTroca(galeria, mainImg, minWidth) {
  galeria.forEach((elemento) => {
    Array.from(elemento.attributes).forEach((atributo) => {
      elemento.addEventListener(
        "click",
        imagemTroca.bind(null, mainImg, atributo.name, minWidth)
      );
    });
  });
}

const galeria = Array.from(document.querySelectorAll(".bicicleta-imagens img"));
const mainImg = galeria.shift();
const minWidth = "800px";

if (galeria.length && mainImg) galeriaTroca(galeria, mainImg, minWidth);
