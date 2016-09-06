//Estrella
var  figura = new THREE.Shape();

figura.moveTo(-37, 92); 
figura.lineTo(15.45, 47.55); 
figura.lineTo(76.91, 63.91); 
figura.lineTo(50, 0); // 
figura.lineTo(84.55, -53.4);
figura.lineTo(15.45, -47.55);
figura.lineTo(-24.65, -96.91); // 
figura.lineTo(-40.45, -29.39);
figura.lineTo(-99.79, -6.5);
figura.lineTo(-40.45, 29.39); // 
figura.lineTo(-37, 92);


var forma = new THREE.ShapeGeometry(figura);
var malla = new THREE.Mesh(forma);

var escena = new THREE.Scene();
escena.add(malla);

var camara =new THREE.PerspectiveCamera();
camara.position.z= 230;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95,window.innerHeight*.95 );
		      
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
