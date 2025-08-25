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
