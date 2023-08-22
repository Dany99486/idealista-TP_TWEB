function clickButton(element) {
  Array.from(document.querySelectorAll(".button.comprar-arrendar")).forEach(
    function (el) {
      el.classList.remove("active");
    }
  );
  element.classList.toggle("active");
}

function clickbotao(element) {
  
  Array.from(document.querySelectorAll(".botao.menu")).forEach(
    function (el) {
      el.classList.remove("ativo");
    }
  );
  element.classList.toggle("ativo");
}


function simular(){

  var area = document.getElementById("area_").value;
  var idade = document.getElementById("idade_").value;

  
    if(document.getElementById('tp_nao').checked = true){
      var garagem =0.95;
    }
    else{
      var garagem=1;
    }
  
  
    if(document.getElementById('bus_nao').checked = true){
      var transportes =0.9;
    }
    else{
      var transportes=1;
    }
  
  
    if(idade>10){
      var idade_js =0.9;
    }
    else if(idade>5){
      var idade_js=0.95;
    }
    else {
      var idade_js=1;
    }
  
  
  var zona_1 ;
  zona_1=area*1200*garagem*transportes*idade_js;
  var zona_2;
  zona_2=area*2000*garagem*transportes*idade_js;
  var zona_3;
  zona_3=area*2500*garagem*transportes*idade_js;
  document.getElementById("num_zona1").innerHTML =zona_1
  document.getElementById("num_zona2").innerHTML =zona_2
  document.getElementById("num_zona3").innerHTML =zona_3

  document.getElementById("num_area1").innerHTML =area
  document.getElementById("num_idade1").innerHTML =idade
  document.getElementById("num_area2").innerHTML =area
  document.getElementById("num_idade2").innerHTML =idade
  document.getElementById("num_area3").innerHTML =area
  document.getElementById("num_idade3").innerHTML =idade
  
  
  
  
  
  
}






function financiar(){
  if(document.getElementById("bancos").style.display=="none"){
    document.getElementById("bancos").style.display="block";
  }
  else{
    document.getElementById("bancos").style.display="none";
  }
  var tx_base=0.5;

  var montante_financiado = document.getElementById("financiado").value;
  var entrada_inicial = document.getElementById("inicial").value;
  var prazo = document.getElementById("prazo_anos").value;

  var spread1 = Math.round((Math.random() * (5 - 1) + 1)*100) / 100;
  var tx_total = tx_base+spread1;
  var val_emprestimo1 = Math.round(((montante_financiado-entrada_inicial)*((spread1/100)+1))*100)/100 ;
  var prestacao_mensal1 =Math.round( (val_emprestimo1/(prazo*12))*100)/100;
  document.getElementById("montante1").innerHTML=montante_financiado;
  document.getElementById("entrada_inicial1").innerHTML=entrada_inicial;
  document.getElementById("valor_do_emprestimo1").innerHTML=val_emprestimo1;
  document.getElementById("spread1").innerHTML=spread1;
  document.getElementById("taxa_de_juro_global1").innerHTML=Math.round(tx_total*100)/100 ;
  document.getElementById("prestaçao_mensal1").innerHTML=prestacao_mensal1;

  var spread2 = Math.round((Math.random() * (5 - 1) + 1)*100) / 100;
  var tx_total2 = tx_base+spread2;
  var val_emprestimo2 =Math.round(((montante_financiado-entrada_inicial)*((spread2/100)+1))*100)/100 ;
  var prestacao_mensal2 =Math.round( (val_emprestimo2/(prazo*12))*100)/100;
  document.getElementById("montante2").innerHTML=montante_financiado;
  document.getElementById("entrada_inicial2").innerHTML=entrada_inicial;
  document.getElementById("valor_do_emprestimo2").innerHTML=val_emprestimo2;
  document.getElementById("spread2").innerHTML=spread2;
  document.getElementById("taxa_de_juro_global2").innerHTML=Math.round(tx_total2*100)/100 ;
  document.getElementById("prestaçao_mensal2").innerHTML=prestacao_mensal2;

  var spread3 = Math.round((Math.random() * (5 - 1) + 1)*100) / 100;
  var tx_total3 = tx_base+spread3;
  var val_emprestimo3 = Math.round(((montante_financiado-entrada_inicial)*((spread3/100)+1))*100)/100 ;
  var prestacao_mensal3 =Math.round( (val_emprestimo3/(prazo*12))*100)/100;
  document.getElementById("montante3").innerHTML=montante_financiado;
  document.getElementById("entrada_inicial3").innerHTML=entrada_inicial;
  document.getElementById("valor_do_emprestimo3").innerHTML=val_emprestimo3;
  document.getElementById("spread3").innerHTML=spread3;
  document.getElementById("taxa_de_juro_global3").innerHTML=Math.round(tx_total3*100)/100 ;
  document.getElementById("prestaçao_mensal3").innerHTML=prestacao_mensal3;

  
  
  console.log (montante_financiado );
  console.log(entrada_inicial );
  console.log(val_emprestimo3 );
  console.log (spread3 );
  console.log(tx_total3 );
  console.log(prestacao_mensal3 );

}

function esconder(){

  if(document.getElementById("img_div1").style.display=="none"){
    document.getElementById("img_div1").style.display="flex"
  }
  else{
    document.getElementById("img_div1").style.display="none"
  }
  
}


