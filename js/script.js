// Items do orçamento

const parametros = new URLSearchParams(location.search);

parametros.forEach((produto) => {
  const param = document.getElementById(produto);
  if (param) param.checked = true;
});
