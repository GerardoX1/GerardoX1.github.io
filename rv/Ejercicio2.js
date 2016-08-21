var escena = new THREE.Scene();
var camara =new THREE.PerspectiveCamera();

camara.position.z = 5;
var renderizador= new THREE.WebGLRenderer();

renderizador.setSize( window.innerHeight*.95,
                      window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
var forma = new THREE.SphereGeometry( 1, 15, 15);
var material = new THREE.MeshBasicMaterial( {color: 0x808000} );
var sphere = new THREE.Mesh( sphere, material );

escena.add( sphere );

renderizador.render( escena, camara );
