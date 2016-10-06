//Clonaremos las torres y las colocaremos conde deben de ir
var materialBlanca1=new THREE.MeshLambertMaterial({color: 0xEEEED8, transparent: true, opacity: 1});
var materialBlanca2=new THREE.MeshLambertMaterial({color: 0xEEEED8, transparent: true, opacity: 0.75});

var torreBlancaMalla1=new THREE.Mesh(TorreFB,materialBlanca1);
var torreBlancaMalla2=new THREE.Mesh(TorreFB,materialBlanca2);

var materialNegra1=new THREE.MeshLambertMaterial({color: 0x000000, transparent: true, opacity: 0.5});
var materialNegra2=new THREE.MeshLambertMaterial({color: 0x000000, transparent: true, opacity: 0.25});

var torreNegraMalla2=new THREE.Mesh(TorreFN,materialNegra1);
var torreNegraMalla2=new THREE.Mesh(TorreFN,materialNegra2);

var torre1B= torreBlancaMalla1.clone();
torre1B.position.x=10;
torre1B.position.y=10;
torre1B.position.z=3;

var torre2B= torreBlancaMalla2.clone();
torre2B.position.x=80;
torre2B.position.y=10;
torre2B.position.z=3;

var torre3N= torreNegraMalla2.clone();
torre3N.position.x=10;
torre3N.position.y=80;
torre3N.position.z=3;

var torre4N= torreNegraMalla2.clone();
torre4N.position.x=80;
torre4N.position.y=80;
torre4N.position.z=3;

//Creación de luces en la escena
var luzPuntual=new THREE.PointLight(0xFFFF00);//AMARILLO
var luzPuntual1=new THREE.PointLight(0xFF00FF);//ROSA
var luzPuntual2=new THREE.PointLight(0x00FFFF);//CYAN

//Posición de la iluminación
luzPuntual.position.x=10;
luzPuntual.position.y=90;
luzPuntual.position.z=60;
luzPuntual1.position.x=80;
luzPuntual1.position.y=90;
luzPuntual1.position.z=60;
luzPuntual2.position.x=100;
luzPuntual2.position.y=10;
luzPuntual2.position.z=60;

//agregamos todo a la escena

var escena=new THREE.Scene();
escena.add(tablero);
escena.add(torre1B);
escena.add(torre2B);
escena.add(torre3N);
escena.add(torre4N);

//colocamos la camara y mostramos

var camara=new THREE.PerspectiveCamera();
camara.position.z=150;
camara.position.x=45;
camara.position.y=45;

escena.rotateX(-Math.PI/4)
var renderizador=new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);

renderizador.shadowMap.enabled=true;

torre1B.castShadow=true;
torre2B.castShadow=true;
torre3N.castShadow=true;
torre4N.castShadow=true;

luzPuntual.castShadow=true;
luzPuntual1.castShadow=true;
luzPuntual2.castShadow=true;

renderizador.render(escena,camara);
