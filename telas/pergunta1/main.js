

var r_sim = document.getElementById("r_sim");
var r_nao = document.getElementById("r_nao");

var opc_one = document.getElementById("opc_one");
var opc_two = document.getElementById("opc_two");
var opc_three = document.getElementById("opc_three");

var tem_certeza = document.getElementById("tem_certeza");

var resposta_certa = 2;
var resposta = 0;

opc_one.addEventListener('click',(arg) => {
  opc_one.style.borderColor="blue";
  opc_one.style.borderWidth="2px";
  
  opc_two.style.borderColor = "red";
  opc_two.style.borderWidth = "1px";
  
  opc_three.style.borderColor = "red";
  opc_three.style.borderWidth = "1px";
  
  resposta = 1;
  certeza();
});
opc_two.addEventListener('click', (arg) => {
  opc_two.style.borderColor = "blue";
  opc_two.style.borderWidth = "2px";
  
  opc_one.style.borderColor = "red";
  opc_one.style.borderWidth = "1px";
  
  opc_three.style.borderColor = "red";
  opc_three.style.borderWidth = "1px";
  
  resposta = 2;
  certeza();
});
opc_three.addEventListener('click', (arg) => {
  opc_three.style.borderColor = "blue";
  opc_three.style.borderWidth = "2px";
  
  opc_two.style.borderColor = "red";
  opc_two.style.borderWidth = "1px";
  
  opc_one.style.borderColor = "red";
  opc_one.style.borderWidth = "1px";
  
  resposta = 3;
  certeza();
});

function certeza(){
  tem_certeza.style.display="block";
}

r_sim.addEventListener('click',(arg) => {
  if(resposta===resposta_certa){
    alert("correto, vamos para a próxima pergunta");
    window.location.replace("/./telas/pergunta2/index.html");
  }else{
    window.location.replace("/../index.html");
    alert("perdeu tudo !");
  }
});

r_nao.addEventListener('click',(arg) => {
  opc_three.style.borderColor = "red";
  opc_three.style.borderWidth = "1px";
  
  opc_two.style.borderColor = "red";
  opc_two.style.borderWidth = "1px";
  
  opc_one.style.borderColor = "red";
  opc_one.style.borderWidth = "1px";
  
  tem_certeza.style.display="none";
  
})