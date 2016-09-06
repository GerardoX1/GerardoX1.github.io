//conoceremos un constructor nuevo1
var  figura = new THREE.Shape();
//tenemos el nuevo objeto que genera la figura

//figura
//forma

figura.moveTo(100, 0); 
figura.lineTo(-80.9, -58.7); // genera una linea 40 40 desde esa localidad
figura.lineTo(30.9, 95.1); // lo mismo pa este
figura.lineTo(30.9, -95.1); // 
//figura.lineTo(-80.9, 58.7);
//figura.lineTo(100, 0);

//comvertimos a una figura

var forma = new THREE.ShapeGeometry(figura);
var malla = new THREE.Mesh(forma);

//agregamos la escena la malla la camara 
// el renderizador el camvas 

var escena = new THREE.Scene();
escena.add(malla);

var camara =new THREE.PerspectiveCamera();
camara.position.z= 230;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95,window.innerHeight*.95 );
		      
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
