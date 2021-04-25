/*nombre = prompt("ingrese su nombre");*/

/*
if (nombre == "martin") /*IF FUNCIONA CUANDO SE CUMPLE
   
    {
       alert("su nombre es con minusculas");
    }


  else if (nombre == "MARTIN") cualquier nombre que sea desigual a martin estara mal y se ejecutara

         {   alert("su nombre tiene mayusculas")};
         
         else if (nombre == "Pablo")

               { alert("su nombre es pablo"); }
         

 else 
 { alert("su nombre es una porqueria")};


  acordarse que el else funciona CUANDO NO SE CUMPLE*/








/*ARRAYS*/
/*
let nombres =[ "martin","victor","orellano","numero3"] ;

document.write( nombres[5]); */

/*arrays con backtips*/

/*
let documentos = {

nombre:"martin",

apellido:"orellano",

edad:"veinticinco",

} ;



let nombre = documentos["nombre"];

let apellido = documentos ["apellido"];

let edad = documentos ["edad"];



frase =` su nombramiento es :<b> ${nombre}  </b> <br>
 su apellidato es: <b>  ${apellido} </b>  <br>
 su edad es de: <b>  ${edad}  </b> <br>`

 document.write(frase);*/








 /*sentenciawhile*/
 /*
let numero = 0;

 while(numero < 15) {

numero ++, 
/*le tenemos que agregar un numero cada vezque se cumpla
entonces,cuando llegue a 10,deja de cumplirse la funcion while,porque el proximo seria 11,por lo tanto
daria falso;/*

  document.write(numero);   }
 
*/


/*sentencia dowhile*/

/*
let numero= 0;

do {
  document.write(numero);primera ejecucion
  
  numero ++;

} 
while (numero <= 20);pregunta:es menor o igual a 20? SI,ENTONCES SE EJECUTA HASTA QUE SEA FALSO*/


/*BREACK*/
/*TERMINACION DE SENTENCIA CON BREACK
let numero = 0 ;

while ( numero < 100) {

  numero++

  document.write (numero)

if (numero == 19)  
        { breack ; }     */










/*                   FOR 
ESTA SENTENCIA SIRVE PARAHACER LOS BUCLES QUE QUERRAMOS DE UNA MANETRA MAS CORTA*/
/*

for(let i=30; i > 10; i-- )

  { document.write(i  + "<br>");}


*/



/*RELOJ ECHO CON IF ELSE 
var hora = prompt ("indique la hora");

hora = parseInt(hora);

 
 
     if (hora >= 8 &&  hora <= 12 ) 

     {document.write("es temprano") }



     else if  (hora >= 12 && hora <= 19)
   {document.write ("es tarde") }

      else if  (hora >= 20 && hora <= 24) 
  {document.write ("es noche") }


 
else 
     {document.write ("es de madrugada") }*/
  


/* RECORRIENDO UN ARRAY CON FOR:  "MOSTRANDO EL CONTENIDO"*/
/*
     let nombre = ["pablo","aisa","cubo","otto"];
 
     for (let nombres in nombre)
     
      { document.write(nombres) };

document.write("<br>");

 
      for (let nombres of nombre)
      
       { document.write(nombres) + breack }; */
      


/*   ESTADOS DE ANIMO*/ 
/*

let animo = prompt("hola tincho,como fue tu dia?");

 if (animo == "muy bien")
{ document.write("me alegro mucho") }

    else if (animo == "masomenos")
    {document.write("bueno,tranquilo")}

    else if (animo =="mal") 
    {document.write("que pena")}

else 
{document.write("bueno matate") } 
*/

  /*FUNCTION Y RETURN*/
 /*
  function buendia() {

    document.write("hola buenos dias")
    return " todo ok"   /*nos retorna solo esto cuando la llamamos nuevamente
  } 
  */
/*
let saludo = buendia();

document.write(saludo + "<br>"); hola buenos dias todo ok" /se ejecuta con la funcion*/
/*   document.write(saludo + "<br>");  "todo ok"*/
/*   document.write(saludo + "<br>");       "todo ok"*/
/*   document.write(saludo + "<br>");    /   "todo ok"*/

/*funciones aritmeticas*/

/*
function sumar(num1,num2) {

  let res= num1+num2;

  document.write(res)
  
  document.write("<br>");
}
sumar(1,1);



function restar(num3,num4) {

  let res= num3-num4;

  document.write(res)
  
  document.write("<br>");
}
restar(20,10)


function dividir(num5,num6) {

  let res= num5/num6;

  document.write(res)
  
  document.write("<br>");
}

dividir(50,2)

function multiplicar(num7,num8) {

  let res= num7*num8;

  document.write(res)
  
  document.write("<br>");
}

multiplicar(2,10);*/

//SALUDO CON FUNCTION

//   let nombre = prompt("Hola buen dia decime tu nombre");



// function saludando (nombre){

//   let frase = `!HOLA BUENOS DIAS ${nombre} COMO ESTAS?`;

// document.write(frase);
// }
// saludando(nombre);
   /*FUNCION FLECHA
let nombre = prompt("Hola buen dia decime tu nombre");

let frase = `!HOLA BUENOS DIAS ${nombre} COMO ESTAS?`;

const saludoflecha = (nombre) => {


document.write(frase); }


saludoflecha();
*/

















































