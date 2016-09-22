//Pre-Eventos funciones 
//en JavaScrip las funciones son objetos de primer orden = "un valor" 

//Dicotomia Dato/Proceso son cosas diferentes

//Dato es el valor que trabajamos y la otra es el proceso que estoy realizando
//la cuestion es que en java script no existe esto
//LISP maneja las funciones como valores

//Funciones pueden no ser un parametro Pueden no tener nombre

//comenzamos

//Primera forma de expresar una funcion "la clasica"

function init(P){
  var malla =new THREE.Mesh(new THREE.BoxGeometry(P,P,P), new THREE.MeshNormalMaterial());

 escena= new THREE.Scene();
 escena.add(malla);

 camara = new THREE.PerspectiveCamera();
 renderizador = new THREE.WebGLRenderer();

renderizador.setSize(900,700);
document.body.appendChild( renderizador.domElement );
camara.position.z=5*P;
malla.rotateX( Math.PI/6 );
malla.rotateY( Math.PI/6 );
malla.rotateZ( Math.PI/6 );
  
}


//Siguiente forma "Tomamos como un valor la funcion antes generada"

var main = function(P){
  P(1);
renderizador.render(escena,camara);
}
//Como estas variables son glovales no le colo VAR pero tenemos que hacerlo para poder utuilizarlas en todo el programa
var escena,camara,renderizador;
//con esto ejecutamos
main(init);
