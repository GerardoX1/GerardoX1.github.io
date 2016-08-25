
//conoceremos un constructor nuevo1
var  figura = new THREE.Shape();
//tenemos el nuevo objeto que genera la figura

//figura
//forma

figura.moveTo(10, 10); // muevete a 10 10
figura.lineTo(10, 40); // genera una linea 40 40 desde esa localidad
figura.lineTo(40, 40); // lo mismo pa este
figura.lineTo(10, 10); // 

//comvertimos a una figura

var forma = new THREE.ShapeGeometry(figura);
var malla = new THREE.Mesh(forma);

//agregamos la escena la malla la camara 
// el renderizador el camvas 

var escena = new THREE.Scene();
escena.add(malla);

var camara =new THREE.PerspectiveCamera();
camara.position.z= 100;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95,
											window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
