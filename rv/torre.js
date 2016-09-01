var escena = new THREE.Scene();

var camara = new THREE.PerspectiveCamera();
camara.position.z = 1000;

var renderizador = new THREE.WebGLRenderer();

renderizador.setSize( window.innerHeight*.95,
                      window.innerHeight*.95);
document.body.appendChild( renderizador.domElement );

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
		40,
				(i - 5)*2) );
}
for ( i = 151; i < 170; i ++ ) {
	puntos.push(new THREE.Vector2(
		50,
				(i - 5)*2) );
}

var forma = new THREE.LatheGeometry(puntos);
var material = new THREE.MeshNormalMaterial();
var malla = new THREE.Mesh( forma, material );
malla.rotateX( Math.PI/6 );
//escena.add( malla );

var geometry = new THREE.CylinderGeometry( 5, 5, 20, 32 );
var material1 = new THREE.MeshNormalMaterial();
var cylinder = new THREE.Mesh( geometry, material1 );
escena.add( cylinder );



escena.add( lathe );

renderizador.render( escena,camara );    
