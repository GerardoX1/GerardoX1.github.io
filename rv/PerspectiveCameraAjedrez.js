//Camara perspective

//Clonaremos las torres by las colocaremos conde deben de ir

var torre1B= torreMallaB.clone();
torre1B.translate(10,10,3);

var torre2B= torreMallaB.clone();
torre2B.translate(80,10,3);

var torre3N= torreMallaN.clone();
torre2N.translate(10,80,3);

var torre4N= torreMallaN.clone();
torre2N.translate(80,80,3);

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
