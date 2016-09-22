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
 malla =new THREE.Mesh(new THREE.BoxGeometry(P,P,P), new THREE.MeshNormalMaterial());

 escena= new THREE.Scene();
 escena.add(malla);

 camara = new THREE.PerspectiveCamera();
 renderizador = new THREE.WebGLRenderer();

renderizador.setSize(900,700);
document.body.appendChild( renderizador.domElement );
camara.position.z=5*P;
step=0.01;
}

var loop = function(){

  requestAnimationFrame(loop);
  renderizador.render(escena,camara);
  
  malla.rotateY( 0.01 );
  //malla.rotateZ( 0.01 );
  //malla.rotateX( 0.01 );
  
  if (Math.abs(malla.position.x)>=5) {
    step=-step;
    malla.position.x+=step;
} 

}
//Como estas variables son glovales no le colo VAR pero tenemos que hacerlo para poder utuilizarlas en todo el programa
var escena,camara,renderizador,malla;
//con esto ejecutamos
init(1);
loop();
