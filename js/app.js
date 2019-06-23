var operacion;
var num1;
var num2;
var e = 0;
var cont ="";
 cont2 = "";

var teclado = document.getElementById('teclado');
teclado.addEventListener("click", iniciar);


function iniciar(){

  var display =  document.getElementById('display');
  var on =  document.getElementById('on');
  var igual =  document.getElementById('igual');
  var punto =  document.getElementById('punto');
  var sign =  document.getElementById('sign');
  var raiz =  document.getElementById('raiz');
  var dividido =  document.getElementById('dividido');
  var resta =  document.getElementById('menos');
  var suma =  document.getElementById('mas');
  var multiplica =  document.getElementById('por');
  var nueve =  document.getElementById('9');
  var ocho =  document.getElementById('8');
  var siete =  document.getElementById('7');
  var seis =  document.getElementById('6');
  var cinco =  document.getElementById('5');
  var cuatro =  document.getElementById('4');
  var tres =  document.getElementById('3');
  var dos =  document.getElementById('2');
  var uno =  document.getElementById('1');
  var cero =  document.getElementById('0');
  


  if(display.textContent ==  0 && display.textContent.length <= 1){

  	uno.onclick = function(e){
    display.textContent =  1;

   
  }
   dos.onclick = function(e){
    display.textContent = 2;

  }
   tres.onclick = function(e){
    display.textContent =  3;
 
  }
   cuatro.onclick = function(e){
    display.textContent = 4;
  }
   cinco.onclick = function(e){
    display.textContent =  5;
  }
   seis.onclick = function(e){
    display.textContent =  6;
  }
   siete.onclick = function(e){
    display.textContent =  7;
      siete.style.animation = "key 7s"
  }
   ocho.onclick = function(e){
    display.textContent = 8;
  }
   nueve.onclick = function(e){
    display.textContent =  9;
  }
  cero.onclick = function(e){
  	display.textContent = display.textContent;
  }

 }
 else if(display.textContent.length > 0 && display.textContent.length <= 8){
  uno.onclick = function(e){
    display.textContent = display.textContent + 1;
  }
   dos.onclick = function(e){
    display.textContent = display.textContent + 2;
  }
   tres.onclick = function(e){
    display.textContent = display.textContent + 3;
  }
   cuatro.onclick = function(e){
    display.textContent = display.textContent + 4;
  }
   cinco.onclick = function(e){
    display.textContent = display.textContent + 5;
  }
   seis.onclick = function(e){
    display.textContent = display.textContent + 6;
  }
   siete.onclick = function(e){
    display.textContent = display.textContent + 7;
 
  }
   ocho.onclick = function(e){
    display.textContent = display.textContent + 8;
  }
   nueve.onclick = function(e){
    display.textContent = display.textContent + 9;
  }
   cero.onclick = function(e){
    display.textContent = display.textContent + 0;
  }
   punto.onclick = function(e){
   		for (var i = 0; display.textContent.length > i; i++) {
  		if(display.textContent[i].charCodeAt(i) == 46){
  		 cont = cont +	display.textContent[i];
  			if(cont2.length > 1){
  				   	  display.textContent[i] = display.textContent[i-i];
             console.log(cont + " , ");
  			}
  	     }else if(display.textContent.charCodeAt(i) != 46 && cont2.length < 1){
  	     	 display.textContent = display.textContent + '.';
  	     	 cont2 = cont2 + ".";
  	     }
      }
   }  
  sign.onclick = function(e){
  	if(display.textContent != 0 && display.textContent.indexOf("-") == -1 ){
  	display.textContent = '-' + display.textContent;  	
    }
     else if( display.textContent.indexOf("-") == 0){
          display.textContent = parseInt(display.textContent) * -1;
    }
  }

 }else if(display.textContent.length > 8){ 
    for (var i = 0; display.textContent.length > i; i++) {
    	  
    	 if(i < 7){ 
          e  =  display.textContent[i];  	 	
    	 	i++;
    	 }else{   	 	
    	 	uno.onclick = "";
    	 	dos.onclick = "";
    	 	tres.onclick = "";
    	 	cuatro.onclick = "";
    	 	cinco.onclick = "";
    	 	seis.onclick = "";
    	 	siete.onclick = "";
    	 	ocho.onclick = "";
    	 	nueve.onclick = "";
    	 	cero.onclick = "";
    	 	sign.onclick = "";
    	 }	 
    }
    
 }

    on.onclick = function(e){
    reset();
  }
   suma.onclick = function(e){
    num1 = display.textContent;
    operacion = "+";
    cont2 ="";
    cont="";
    limpiar();

  }
   resta.onclick = function(e){
    num1 = display.textContent;
    operacion = "-";
    cont2 ="";
    cont="";
    limpiar();
  }
   multiplica.onclick = function(e){
    num1 = display.textContent;
    operacion = "*";
    cont2 ="";
    cont="";
    limpiar();
  }
   dividido.onclick = function(e){
    num1 = display.textContent;
    operacion = "/";
    cont2 ="";
    cont="";
    limpiar();
  }
  igual.onclick = function(e){
  	num2 = display.textContent;
  	resolver();
  }

  uno.click = function(e){
  	console.log("ddd");
  }
}

function limpiar(){
	display.textContent = "";
}

function reset(){
	display.textContent = 0;
	num1 = 0;
	num2 = 0;
	cont = "";
	cont2 = "";
	operacion = "";
}

function resolver(){
	var res = 0;
	switch(operacion){
		case "+":
		res = parseFloat(num1) + parseFloat(num2);
		break;

		case "-":
		res = parseFloat(num1) - parseFloat(num2);
		break;

		case "*":
		res = parseFloat(num1) * parseFloat(num2);
		break;

		case "/":
		res = parseFloat(num1) / parseFloat(num2);
		break
	}
	reset();
	if(res >= 99999999 || res.toString().length >= 9){
		display.textContent = display.textContent = "ERROR";
		console.log(res.toString().length);
	}else{
	display.textContent = res;
	
   }

}



