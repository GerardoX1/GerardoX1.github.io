var escena = new THREE.Scene();
var camara =new THREE.PerspectiveCamera();

camara.position.z = 20;
camara.position.y = -3;

var renderizador= new THREE.WebGLRenderer();

renderizador.setSize( window.innerHeight*.95,
                      window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );

var forma1 = new THREE.SphereGeometry( 3, 15, 15);
var material1 = new THREE.MeshNormalMaterial( {color: 0x808000} );
var sphere = new THREE.Mesh( forma1, material1 );

escena.add( sphere );

var forma2 = new THREE.CubeGeometry( 2, 7, 3);
var material2 = new THREE.MeshBasicMaterial();
var tronco = new THREE.Mesh( forma2, material2 );

escena.add( tronco );


renderizador.render( escena, camara );
