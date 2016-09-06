var escena = new THREE.Scene();

var camara = new THREE.PerspectiveCamera();
camara.position.z = 1000;
camara.position.y = 200;


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
		50,
				(i - 5)*2) );
}
for ( i = 151; i < 170; i ++ ) {
	puntos.push(new THREE.Vector2(
		80,
				(i - 5)*2) );
}

puntos.push(new THREE.Vector2( 0 , 332 ));

var forma = new THREE.LatheGeometry(puntos);
var material = new THREE.MeshNormalMaterial();
var malla = new THREE.Mesh( forma, material );
escena.add( malla );

var geometry2 = new THREE.CylinderGeometry( 16, 16, 30, 32 );
var material2 = new THREE.MeshNormalMaterial();
var cylinder2 = new THREE.Mesh( geometry2, material2 );
cylinder2.position.x=72;
cylinder2.position.y=332;

escena.add( cylinder2 );


renderizador.render( escena,camara );    
