//mallas por extruccion

var figura = new THREE.Shape();

figura.moveTo(10, 10);
figura.lineTo(10, 40);
figura.lineTo(40, 40);
figura.lineTo(10, 10);

var forma = new THREE.ExtrudeGeometry( figura, {amount: 10} );

var material = new THREE.MeshNormalMaterial();
var malla = new Three.Mesh( forma, material );
malla.rotateX( Math.PI/4);

var escena = new THREE.Scene();
escena.add( malla );

var camara = new THREE.PerspectiveCamera();
camara.position.z = 500;

var renderizardor = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95,
                      window.innerHeight*.95);
document.body.appendChild( renderizador.domElement );
renderizador.render( escena,camara );    
