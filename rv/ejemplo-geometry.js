var forma = new THREE.Geometry();

//Estructura de datos buscar colas y pilas
//el metodo push empuja elementos al arreglo "los pone al principio"

forma.vertices.push( new THREE.Vector3( 1, 0, 1 ) );
forma.vertices.push( new THREE.Vector3( 1, 0, -1 ) );
forma.vertices.push( new THREE.Vector3(-1, 0, -1 ) );
forma.vertices.push( new THREE.Vector3(-1, 0, 1 ) );
forma.vertices.push( new THREE.Vector3( 0, 1, 0 ) );

//Existe otro arreglo que inicialmente tambien esta vacio

forma.faces.push( new THREE.Face3( 3, 2, 1)); //Cara 0
forma.faces.push( new THREE.Face3( 3, 1, 0)); //Cara 1
forma.faces.push( new THREE.Face3( 3, 0, 4)); //Cara 2
forma.faces.push( new THREE.Face3( 0, 1, 4)); //Cara 3
forma.faces.push( new THREE.Face3( 1, 2, 4)); //Cara 4
forma.faces.push( new THREE.Face3( 2, 3, 4)); //Cara 5

//TOpologia =forma mas general de la geometria
//la minima esfera que encierra el objeto

forma.computeBoundingSphere();

//necesitamos calcular los vectores normales a las caras 
//para poder visualizar el objeto
forma.computeFaceNormals();

var material = new THREE.MeshNormalMaterial();
var malla = new THREE.Mesh ( forma, material );
malla.rotateX(Math.PI/4);

//definimos nuestra escena
// no afecta la ubicacion mientras este antes del renderizado

var escena = new THREE.Scene();
escena.add( malla );

var camara = new THREE.PerspectiveCamera();
camara.position.z = 5;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95,
                      window.innerHeight*.95);
document.body.appendChild( renderizador.domElement );
renderizador.render( escena,camara );                      
