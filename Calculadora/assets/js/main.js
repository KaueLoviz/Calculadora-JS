var botoes_num = document.querySelectorAll(".calc_botao");
var botoes_op = document.querySelectorAll(".calc_botao_op");

botoes_num.forEach(e => {
  e.addEventListener("click", () => { add(e) });
});

botoes_op.forEach(e => {
  e.addEventListener("click", () => { add(e) });
});

function add(b) {
  document.querySelector("#res").value += b.innerText;
}

document.querySelector("#limpar").addEventListener("click", () => {
  document.querySelector("#res").value = "";
});

document.querySelector("#resp").addEventListener("click", () => {
  document.querySelector("#res").value = eval(document.querySelector("#res").value);
});

document.querySelector("#pow").addEventListener("click", () => {
  document.querySelector("#res").value += "**";
});

document.querySelector("#sqrt").addEventListener("click", () => {
  document.querySelector("#res").value = Math.sqrt(document.querySelector("#res").value);
});

document.querySelector("#round").addEventListener("click", () => {
  document.querySelector("#res").value = Math.round(document.querySelector("#res").value);
});