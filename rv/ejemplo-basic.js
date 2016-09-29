
var forma = new THREE.SphereGeometry(1);
var material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
var malla = new THREE.Mesh(forma,Material);

var escena = new THREE.Scene();
escena.add(malla);

var camara = new THREE.PerspectiveCamera();
camara.position.z =5;


var lienzo = document.getElementById("basicMaterial");
var renderizador = new THREE.WebGLRenderer();


renderizador.setSize(600,600);
document.body.appendChild( renderizador.domElement );
renderizador.render(escena,camara);
