var escena = new THREE.Scene();
var camara =new THREE.PerspectiveCamera();

camara.position.z = 20;
camara.position.y = -3;

var renderizador= new THREE.WebGLRenderer();

renderizador.setSize( window.innerHeight*.95,
                      window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
var forma = new THREE.SphereGeometry( 3, 15, 15);
var material = new THREE.MeshNormalMaterial( {color: 0x808000} );
var sphere = new THREE.Mesh( forma, material );

escena.add( sphere );

renderizador.render( escena, camara );
