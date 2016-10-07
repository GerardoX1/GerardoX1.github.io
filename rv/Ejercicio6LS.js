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

//Creamos luces
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
escena.add(luzPuntual);
escena.add(luzPuntual1);
escena.add(luzPuntual2);
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
