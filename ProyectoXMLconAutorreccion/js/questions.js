var formElement=null;

var respuestaInput=null;
var respuestaInput2=null;

var respuestaSelect=null;
var respuestaSelect2=null;

var respuestasCheckbox = [];
var respuestasCheckbox2 = [];

var respuestasMultiple = [];
var respeustasMultiple2 = [];

var respuestaRadio = null;
var respuestaRadio2 = null;

var nota = 0;

//Después de cargar la página (onload) se definen los eventos sobre los elementos entre otras acciones.
window.onload = function(){ 
  presentacion();
  document.getElementById("empezar").onclick=function(){empezarExamen();};

  //CORREGIR al apretar el botón
  formElement=document.getElementById('myform');
  formElement.onsubmit=function(){
    corregirText();
    corregirText2();

   corregirSelect();
   corregirSelect2();

   corregirCheckbox();
   corregirCheckbox2();

   corregirMultiple();
  corregirMultiple2();

  corregirRadio();
  corregirRadio2();

    presentarNota();

    return false;
  }
   var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     gestionarXml(this);
    }
   };
   xhttp.open("GET", "xml/questions.xml", true);
   xhttp.send();
 }
 
 //LEER XML de xml/preguntas.xml


function presentacion(){
  document.getElementById("instruccionesIniciales").className="";
}
function empezarExamen(){
  document.getElementById("instruccionesIniciales").className="oculto";
  document.getElementById("general").className="";
}

// Recuperamos los datos del fichero XML xml/preguntas.xml
// xmlDOC es el documento leido XML. 
function gestionarXml(dadesXml){
   var xmlDoc = dadesXml.responseXML; //Parse XML to xmlDoc
   
   //TEXT
   //Recuperamos el título y la respuesta correcta de Input, guardamos el número secreto
    var tituloInput1=xmlDoc.getElementsByTagName("text")[0].innerHTML;
    ponerDatosInputHtml(tituloInput1,1);
    respuestaInput=parseInt(xmlDoc.getElementsByTagName("answer")[0].innerHTML);
   
    var tituloInput2=xmlDoc.getElementsByTagName("text")[1].innerHTML;
    ponerDatosInputHtml(tituloInput2,2);
    respuestaInput2=parseInt(xmlDoc.getElementsByTagName("answer")[1].innerHTML);

   //SELECT
   //Recuperamos el título y las opciones, guardamos la respuesta correcta
   var tituloSelect1=xmlDoc.getElementsByTagName("text")[2].innerHTML;
   var opcionesSelect1 = [];
   var nopt = xmlDoc.getElementById("p3").getElementsByTagName('option').length;
    for (i = 0; i < nopt; i++) { 
      opcionesSelect1[i] = xmlDoc.getElementById("p3").getElementsByTagName('option')[i].innerHTML;
   }
   ponerDatosSelectHtml1(tituloSelect1,opcionesSelect1);
   respuestaSelect=parseInt(xmlDoc.getElementsByTagName("answer")[2].innerHTML);

   var tituloSelect2=xmlDoc.getElementsByTagName("text")[3].innerHTML;
   var opcionesSelect2 = [];
   var nopt = xmlDoc.getElementById("p4").getElementsByTagName('option').length;
    for (i = 0; i < nopt; i++) { 
      opcionesSelect2[i] = xmlDoc.getElementById("p4").getElementsByTagName('option')[i].innerHTML;
   }
   ponerDatosSelectHtml2(tituloSelect2,opcionesSelect2);
   respuestaSelect2=parseInt(xmlDoc.getElementsByTagName("answer")[3].innerHTML);

 //CHECKBOX
 //Recuperamos el título y las opciones, guardamos las respuestas correctas
 var tituloCheckbox = xmlDoc.getElementsByTagName("text")[4].innerHTML;
 var opcionesCheckbox = [];
 var nopt = xmlDoc.getElementById("p5").getElementsByTagName('option').length;
 for (i = 0; i < nopt; i++) { 
    opcionesCheckbox[i]=xmlDoc.getElementById("p5").getElementsByTagName('option')[i].innerHTML;
 }  
 ponerDatosCheckboxHtml(tituloCheckbox,opcionesCheckbox);
 var nres = xmlDoc.getElementById("p5").getElementsByTagName('answer').length;
 for (i = 0; i < nres; i++) { 
  respuestasCheckbox[i]=xmlDoc.getElementById("p5").getElementsByTagName("answer")[i].innerHTML;
 }

 var tituloCheckbox2 = xmlDoc.getElementsByTagName("text")[5].innerHTML;
 var opcionesCheckbox2 = [];
 var nopt = xmlDoc.getElementById("p6").getElementsByTagName('option').length;
 for (i = 0; i < nopt; i++) { 
    opcionesCheckbox2[i]=xmlDoc.getElementById("p6").getElementsByTagName('option')[i].innerHTML;
 }
 ponerDatosCheckboxHtml2(tituloCheckbox2,opcionesCheckbox2);
 var nres = xmlDoc.getElementById("p6").getElementsByTagName('answer').length;
 for (i = 0; i < nres; i++) { 
  respuestasCheckbox[i]=xmlDoc.getElementById("p6").getElementsByTagName("answer")[i].innerHTML;
 }

  //multiple
  var tituloMultiple = xmlDoc.getElementsByTagName("text")[6].innerHTML;
  var opcionesMultiple = [];
  var nopt = xmlDoc.getElementById("p7").getElementsByTagName('option').length;
  for (i = 0; i < nopt; i++) {
      opcionesMultiple[i] = xmlDoc.getElementById("p7").getElementsByTagName('option')[i].innerHTML;
  }
  ponerDatosMultipleHtml(tituloMultiple, opcionesMultiple);
  var nres = xmlDoc.getElementById("p7").getElementsByTagName('answer').length;
  for (i = 0; i < nres; i++) { 
    respuestasMultiple[i]=xmlDoc.getElementById("p7").getElementsByTagName("answer")[i].innerHTML;
  }

  var tituloMultiple2 = xmlDoc.getElementsByTagName("text")[7].innerHTML;
  var opcionesMultiple2 = [];
  var nopt2 = xmlDoc.getElementById("p8").getElementsByTagName('option').length;
  for (i = 0; i < nopt2; i++) {
      opcionesMultiple2[i] = xmlDoc.getElementById("p8").getElementsByTagName('option')[i].innerHTML;
  }
  ponerDatosMultipleHtml2(tituloMultiple2, opcionesMultiple2);
    var nres = xmlDoc.getElementById("p8").getElementsByTagName('answer').length;
  for (i = 0; i < nres; i++) { 
    respuestasMultiple[i]=xmlDoc.getElementById("p8").getElementsByTagName("answer")[i].innerHTML;
  }
//Radio
 var tituloRadio = xmlDoc.getElementsByTagName("text")[8].innerHTML;
 var opcionesRadio = [];
 var nopt = xmlDoc.getElementById("p9").getElementsByTagName('option').length;
 for (i = 0; i < nopt; i++) { 
    opcionesRadio[i]=xmlDoc.getElementById("p9").getElementsByTagName('option')[i].innerHTML;
 }  
 ponerDatosRadio(tituloRadio,opcionesRadio);
 var nres = xmlDoc.getElementById("p9").getElementsByTagName('answer').length;
 for (i = 0; i < nres; i++) { 
  //respuestasRadio[i]=xmlDoc.getElementById("p9").getElementsByTagName("answer")[i].innerHTML;
 }

 var tituloRadio2 = xmlDoc.getElementsByTagName("text")[9].innerHTML;
 var opcionesRadio2 = [];
 var nopt = xmlDoc.getElementById("p10").getElementsByTagName('option').length;
 for (i = 0; i < nopt; i++) { 
    opcionesRadio2[i]=xmlDoc.getElementById("p10").getElementsByTagName('option')[i].innerHTML;
 }  
 ponerDatosRadio2(tituloRadio2,opcionesRadio2);
 var nres = xmlDoc.getElementById("p10").getElementsByTagName('answer').length;
 for (i = 0; i < nres; i++) { 
  //respuestasRadio2[i]=xmlDoc.getElementById("p10").getElementsByTagName("answer")[i].innerHTML;
 }

//Preguntas multiple
function ponerDatosMultipleHtml(t,opt){
  document.getElementById("tituloMultiple1").innerHTML=t;
  var selectMultiple = document.getElementsByTagName("select")[2];
  for (i = 0; i < opt.length; i++) { 
    var option = document.createElement("option");
    option.text = opt[i];
    option.value=i+1;
    selectMultiple.options.add(option);
  } 
}
function ponerDatosMultipleHtml2(t,opt){
  document.getElementById("tituloMultiple2").innerHTML=t;
  var selectMultiple = document.getElementsByTagName("select")[3];
  for (i = 0; i < opt.length; i++) { 
    var option = document.createElement("option");
    option.text = opt[i];
    option.value=i+1;
    selectMultiple.options.add(option);
  } 
}
//****************************************************************************************************
// poner los datos recibios en el HTML
function ponerDatosInputHtml(t,pos){
 document.getElementById("tituloInput"+pos).innerHTML = t;
}
//datos select
function ponerDatosSelectHtml1(t,opt){
  document.getElementById("tituloSelect1").innerHTML=t;
  var select = document.getElementsByTagName("select")[0];
  for (i = 0; i < opt.length; i++) { 
    var option = document.createElement("option");
    option.text = opt[i];
    option.value=i+1;
    select.options.add(option);
  }
}
function ponerDatosSelectHtml2(t,opt){
  document.getElementById("tituloSelect2").innerHTML=t;
  var select = document.getElementsByTagName("select")[1];
  for (i = 0; i < opt.length; i++) { 
    var option = document.createElement("option");
    option.text = opt[i];
    option.value=i+1;
    select.options.add(option);
  }  
}
//datos checkbox
function ponerDatosCheckboxHtml(t,opt){ 
  var checkboxContainer=document.getElementById('checkboxDiv');
  document.getElementById('tituloCheckbox').innerHTML = t;
  for (i = 0; i < opt.length; i++) { 
    var input = document.createElement("input");
    var label = document.createElement("label");
    label.innerHTML=opt[i];
    label.setAttribute("for", "color_"+i);
    input.type="checkbox";
    input.name="color";
    input.id="color_"+i;
    checkboxContainer.appendChild(input);
    checkboxContainer.appendChild(label);
    checkboxContainer.appendChild(document.createElement("br"));
  }  
}
function ponerDatosCheckboxHtml2(t,opt){
  var checkboxContainer2=document.getElementById('checkboxDiv2');
  document.getElementById('tituloCheckbox2').innerHTML = t;
  for (i = 0; i < opt.length; i++) { 
    var input = document.createElement("input");
    var label = document.createElement("label");
    label.innerHTML=opt[i];
    label.setAttribute("for", "color_"+i);
    input.type="checkbox";
    input.name="color";
    input.id="color_"+i; 
    checkboxContainer2.appendChild(input);
    checkboxContainer2.appendChild(label);
    checkboxContainer2.appendChild(document.createElement("br"));
  }  
}


//Preguntas radio
function ponerDatosRadio(t,opt){
var radioContainer=document.getElementById('radioDiv');
document.getElementById('tituloRadio').innerHTML = t;
for (i = 0; i < opt.length; i++) { 
  var input = document.createElement("input");
  var label = document.createElement("label");
  label.innerHTML=opt[i];
  label.setAttribute("for", "rd_"+i);
  input.type="radio";
  input.name="rd";
  input.id="rd_"+i;   
  radioContainer.appendChild(input);
  radioContainer.appendChild(label);
  radioContainer.appendChild(document.createElement("br"));
}  
}
function ponerDatosRadio2(t,opt){
var radioContainer2=document.getElementById('radioDiv2');
document.getElementById('tituloRadio2').innerHTML = t;
for (i = 0; i < opt.length; i++) { 
  var input = document.createElement("input");
  var label = document.createElement("label");
  label.innerHTML=opt[i];
  label.setAttribute("for", "rd2_"+i);
  input.type="radio";
  input.name="rd2";
  input.id="rd2_"+i;;    
  radioContainer2.appendChild(input);
  radioContainer2.appendChild(label);
  radioContainer2.appendChild(document.createElement("br"));
}  
}
}
//****************************************************************************************************
//Gestionar la presentación de las respuestas
function darRespuestaHtml(r){
 var p = document.createElement("p");
 var node = document.createTextNode(r);
 p.appendChild(node);
 document.getElementById('resultadosDiv').appendChild(p);
}

//Correcciones de Text
function corregirText(){
  var s = formElement.elements[0].value;
  if (s.value=="") {
    s.elements[0].focus();
    alert("Debes introducir una fecha en la pregunta 1.");
    return false;
  }else if (s == respuestaInput){
    darRespuestaHtml("Pregunta 1 Correcta: 1 punto.");
    nota +=1;
  }else{
    darRespuestaHtml("Pregunta 1 Incorrecta: 0 puntos.");
  }
}
function corregirText2(){
  var s = formElement.elements[1].value;
  if (s.elements[1].value=="") {
    s.elements[1].focus();
    alert("Debes introducir una fecha en la pregunta 2.");
    return false;
  }else if (s == respuestaInput2){
    darRespuestaHtml("Pregunta 2 Correcta: 1 punto.");
    nota +=1;
  }else{
    darRespuestaHtml("Pregunta 2 Incorrecta: 0 puntos.");
  }
}

//Correccion de Select
function corregirSelect(){
var sel = document.getElementById("sel"); 
if (sel.selectedIndex-1==respuestaSelect) { //Comprueba que se haya introducido una opcion NO default
  darRespuestaHtml("Debes seleccionar una opción para la pregunta 3");
  return false
}else if(sel.selectedIndex-1 ==respuestaSelect){
 darRespuestaHtml("Pregunta 3 Correcta: 1 punto");
 nota += 1;
}else{
  darRespuestaHtml("Pregunta 3 Incorrecta: 0 puntos");
}
}
function corregirSelect2(){
var sel = document.getElementById("sel2"); 
if (sel.selectedIndex-1==respuestaSelect) { //Comprueba que se haya introducido una opcion NO default
  darRespuestaHtml("Debes seleccionar una opción para la pregunta 4");
  return false
}else if(sel.selectedIndex-1 ==respuestaSelect){
 darRespuestaHtml("Pregunta 4 Correcta: 1 punto");
 nota += 1;
}else{
  darRespuestaHtml("Pregunta 4 Incorrecta: 0 puntos");
}
}

//Correccion de Checkbox
function corregirCheckbox(){
var notaCheckbox = 0;
var f=formElement;
var esCorrecta = [];
for (i = 0; i < f.chckbx.length; i++) {  //"chckbx" es el nombre asignado a todos los checkbox
  if (f.chckbx[i].checked) {
    esCorrecta[i]=false;     
    for (j = 0; j < respuestasCheckbox.length; j++) {
      if (i==respuestasCheckbox[j]) esCorrecta[i]=true;
    }
    //si es correcta sumamos y ponemos mensaje, si no es correcta restamos y ponemos mensaje.
    if (esCorrecta[i]) {
      nota +=1.0/respuestasCheckbox.length;  //dividido por el número de respuestas posibles
      notaCheckbox +=1.0/respuestasCheckbox.length;
    } else {
      nota -=1.0/respuestasCheckbox.length;  //dividido por el número de respuestas posibles   
    }   
  }
}
if (notaCheckbox != 1){
  darRespuestaHtml("Pregunta 5: " + notaCheckbox + " puntos")
} else {darRespuestaHtml("Pregunta 5: " + notaCheckbox + " punto")

}
}
function corregirCheckbox2(){
var notaCheckbox = 0;
var f=formElement;
var esCorrecta = [];
for (i = 0; i < f.chckbx2.length; i++) {  //"chckbx" es el nombre asignado a todos los checkbox
  if (f.chckbx2[i].checked) {
  esCorrecta[i]=false;     
    for (j = 0; j < respuestasCheckbox2.length; j++) {
      if (i==respuestasCheckbox2[j]) esCorrecta[i]=true;
    }
    //si es correcta sumamos y ponemos mensaje, si no es correcta restamos y ponemos mensaje.
    if (esCorrecta[i]) {
      nota +=1.0/respuestasCheckbox2.length;  //dividido por el número de respuestas posibles
      notaCheckbox +=1.0/respuestasCheckbox2.length;
    } else {
      nota -=1.0/respuestasCheckbox2.length;  //dividido por el número de respuestas posibles   
    }   
  }
}
if (notaCheckbox != 1){
  darRespuestaHtml("Pregunta 6: " + notaCheckbox + " puntos")
} else darRespuestaHtml("Pregunta 6: " + notaCheckbox + " punto")
}

//Correccion de multiple
function corregirMultiple(){
var f = formElement;
var escorrecta = [];
var multiple = document.getElementById("selectMultiple");
var puntuacion = 0;
for (var i = 0; i<multiple.options.length; i ++){
  if (multiple.options[i].selected){
    for (var j = 0; j<respuestasMultiple.length; j++){
      if (multiple.options[i].value == respuestasMultiple[j]){
        escorrecta.push(multiple.options[i].value);
      }
    }
  }
}
if (escorrecta.length > 0){
  puntuacion = escorrecta.length / respuestasMultiple.length;
  nota += puntuacion;
}
if (puntuacion != 1 & puntuacion != 0){
  darRespuestaHtml("Pregunta 7: " + puntuacion.toFixed(1) + " puntos")
} else if (puntuacion == 0){
  darRespuestaHtml("Pregunta 7: 0 puntos");
}else darRespuestaHtml("Pregunta 7: 1 punto")
}
function corregirMultiple2(){
var f = formElement;
var escorrecta = [];
var multiple = document.getElementById("selectMultiple2");
var puntuacion = 0;
for (var i = 0; i<multiple.options.length; i ++){
  if (multiple.options[i].selected){
    for (var j = 0; j<respuestasMultiple2.length; j++){
      if (multiple.options[i].value == respuestasMultiple2[j]){
        escorrecta.push(multiple.options[i].value);
      }
    }
  }
}
if (escorrecta.length > 0){
  puntuacion = escorrecta.length / respuestasMultiple2.length;
  nota += puntuacion;
}
if (puntuacion != 1 & puntuacion != 0){
  darRespuestaHtml("Pregunta 8: " + puntuacion.toFixed(1) + " puntos")
} else if (puntuacion == 0){
  darRespuestaHtml("Pregunta 8: 0 puntos");
}else darRespuestaHtml("Pregunta 8: 1 punto")
}
//Correccion de radio
function corregirRadio(){
var notaRadio = 0;
var f=formElement;
var escorrecta = null;
for (i = 0; i < f.rd.length; i++) {  //"rd" es el nombre asignado a todos los radio.
  if (f.rd[i].checked) {
    escorrecta=false;   
    if (i==respuestaRadio) escorrecta=true;
    //si es correcta sumamos y ponemos mensaje, si no es correcta restamos y ponemos mensaje.
    if (escorrecta) {
      notaRadio +=1.0;  //dividido por el número de respuestas posibles
      nota +=1.0;
    }   
  }
}
if (notaRadio != 1){
  darRespuestaHtml("Pregunta 9: " + notaRadio + " puntos")
} else {darRespuestaHtml("Pregunta 9: " + notaRadio + " punto")
}
}
function corregirRadio2(){
var notaRadio = 0;
var f=formElement;
var escorrecta = null;
for (i = 0; i < f.rd2.length; i++) {  //"rd" es el nombre asignado a todos los radio.
  if (f.rd2[i].checked) {
    escorrecta=false;   
    if (i==respuestaRadio2) escorrecta=true;
    //si es correcta sumamos y ponemos mensaje, si no es correcta restamos y ponemos mensaje.
    if (escorrecta) {
      notaRadio +=1.0;  //dividido por el número de respuestas posibles
      nota +=1.0;
    }  
  }
}
if (notaRadio != 1){
  darRespuestaHtml("Pregunta 10: " + notaRadio + " puntos")
} else{ darRespuestaHtml("Pregunta 10: " + notaRadio + " punto")
}
}

function presentarNota(){
  document.getElementById("general").className="generalOculto";
  document.getElementById("resultadosDiv").className="";
}
