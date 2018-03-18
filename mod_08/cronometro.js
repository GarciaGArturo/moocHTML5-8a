﻿$(function(){
localStorage.c = (localStorage.c || "0.00");

var t, cl = $("#crono"), instante = $("#instante"), inf = $("#info"), minut = 0;

function mnts()     { if (+localStorage.c >= 60) {minut = ++minut; localStorage.c="0.00";} };
function addZero(n)  {if (+n < 10) n = ("0"+ n); return n; };
function incr()     { localStorage.c = +localStorage.c + 0.01; mnts();};
function mostrar()  { cl.html(minut + ":" + addZero((+localStorage.c).toFixed(2)) ); };
function arrancar() { t=setInterval(function(){incr(); mostrar()}, 10); };
function parar()    { clearInterval(t);  t=undefined; inf.html("&nbsp;"); };
function cambiar()  { inf.html("&nbsp;"); if (!t) arrancar(); else parar(); };

function inicializa() { cl.html("0:00.00"); instante.html(""); inf.html("&nbsp;"); localStorage.c="0.00"; minut = 0;  mostrar(); };

if ("ontouchstart" in document.documentElement){
	loadcssfile ("movil.css");  // Añadimos el estilo //
	inf.html("<i>Un toque para Arrancar/Parar <br>y deslice para Inicializar</i>");
} 


$("#cuerpo").on('tap', cambiar);
$("#cuerpo").on('swipe', function(){ if (t) inf.html("<mark>Debe parar antes el cronómetro</mark>"); else inicializa(); });


$("#cambiar").on('click', cambiar);
$("#inicializar").on('click', function(){ if (t) inf.html("<mark>Debe parar antes el cronómetro</mark>"); else inicializa(); });

});

