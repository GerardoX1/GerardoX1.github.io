//Camara perspective

//Clonaremos las torres y las colocaremos conde deben de ir

var torre1B= torreMallaB.clone();
torre1B.position.x=10;
torre1B.position.y=10;
torre1B.position.z=3;

var torre2B= torreMallaB.clone();
torre2B.position.x=80;
torre2B.position.y=10;
torre2B.position.z=3;

var torre3N= torreMallaN.clone();
torre3N.position.x=10;
torre3N.position.y=80;
torre3N.position.z=3;

var torre4N= torreMallaN.clone();
torre4N.position.x=80;
torre4N.position.y=80;
torre4N.position.z=3;

//agregamos todo a la escena

var escena=new THREE.Scene();
escena.add(tablero);
escena.add(torre1B);
escena.add(torre2B);
escena.add(torre3N);
escena.add(torre4N);

//colocamos la camara y mostramos

var camara=new THREE.PerspectiveCamera();
camara.position.z=130;
camara.position.x=45;
camara.position.y=45;
escena.rotateX(-Math.PI/4)
var renderizador=new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
