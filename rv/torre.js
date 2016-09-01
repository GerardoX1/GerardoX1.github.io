var puntos = [];

for ( var i = 0; i < 30; i ++ ) {
	puntos.push(new THREE.Vector2(
			Math.sin(i*0.2 )*15 +100 ,
				(i - 5)*2) );
}
for ( i = 31; i < 40; i ++ ) {
	puntos.push(new THREE.Vector2(
			60 ,
				(i - 5)*2) );
}
for ( i = 41; i < 150; i ++ ) {
	puntos.push(new THREE.Vector2(
			Math.cos(i.1)*30,
				(i - 5)*2) );
}


var forma = new THREE.LatheGeometry(puntos);
var material = new THREE.MeshNormalMaterial();

var malla = new THREE.Mesh( forma, material );
malla.rotateX( Math.PI/6 );

var escena = new THREE.Scene();
escena.add( malla );

var camara = new THREE.PerspectiveCamera();
camara.position.z = 1000;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95,
                      window.innerHeight*.95);
document.body.appendChild( renderizador.domElement );
renderizador.render( escena,camara );    
