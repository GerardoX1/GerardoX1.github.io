var forma = new THREE.Geometry();

//Colocacion espacial de los vertices de nuestro cubo


forma.vertices.push( new THREE.Vector3( 1, -1, 1 ) );     //Vector0
forma.vertices.push( new THREE.Vector3( 1, -1, -1 ) );    //Vector1
forma.vertices.push( new THREE.Vector3(-1, -1, -1 ) );    //Vector2
forma.vertices.push( new THREE.Vector3(-1, -1, 1 ) );     //Vector3

forma.vertices.push( new THREE.Vector3( 1, 1, 1 ) );      //Vector4
forma.vertices.push( new THREE.Vector3( 1, 1, -1 ) );     //Vector5
forma.vertices.push( new THREE.Vector3( -1, 1, -1 ) );    //Vector6
forma.vertices.push( new THREE.Vector3( -1, 1, 1 ) );     //Vector7



//Generaremos las caras de nuestro cubo uniendo los vertices
//para esto con dos triangulos haremos una cara
//Cara 1 Adelante
//Cara 2 Atras
//Cara 3 Izquierda
//Cara 4 Derecha
//Cara 5 Arriba
//Cara 6 Abajo



//Caras de adelante y atras
forma.faces.push( new THREE.Face3(0,4,5)); //Cara 1
forma.faces.push( new THREE.Face3(5,1,0)); //Cara 1

forma.faces.push( new THREE.Face3(3,7,6)); //Cara 2
forma.faces.push( new THREE.Face3(6,2,3)); //Cara 2


//Caras de izquierda y derecha
forma.faces.push( new THREE.Face3(0,1,2)); //Cara 3
forma.faces.push( new THREE.Face3(2,3,0)); //Cara 3

forma.faces.push( new THREE.Face3(4,5,6)); //Cara 4
forma.faces.push( new THREE.Face3(6,7,4)); //Cara 4


//Caras de Arriba abajo
forma.faces.push( new THREE.Face3(3,0,4)); //Cara 5
forma.faces.push( new THREE.Face3(4,7,3)); //Cara 5

forma.faces.push( new THREE.Face3(1,5,6)); //Cara 6
forma.faces.push( new THREE.Face3(6,2,1)); //Cara 6


//necesitamos calcular los vectores normales a las caras 
//para poder visualizar el objeto
forma.computeBoundingSphere();
forma.computeFaceNormals();

//Asignamos material normal al objeto
var material=new THREE.MeshNormalMaterial();
var malla=new THREE.Mesh(forma,material);
malla.rotateX(Math.PI/4);
malla.rotateY(Math.PI/4);

//definimos nuestra escena

var escena=new THREE.Scene();
escena.add(malla);

var camara=new THREE.PerspectiveCamera();
camara.position.z=6;

var renderizador=new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);

document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);




