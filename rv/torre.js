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
var basse = new THREE.Mesh( forma );


var geometry2 = new THREE.CylinderGeometry( 16, 12, 30, 32 );
var cylinder2 = new THREE.Mesh( geometry2 );
cylinder2.position.x=35;
cylinder2.position.y=332;
cylinder2.position.z=60.62;

var geometry3 = new THREE.CylinderGeometry( 16, 12, 30, 32 );
var cylinder3 = new THREE.Mesh( geometry3 );
cylinder3.position.x=70;
cylinder3.position.y=332;
cylinder3.position.z=0;

var geometry4 = new THREE.CylinderGeometry( 16, 12, 30, 32 );
var cylinder4 = new THREE.Mesh( geometry4 );
cylinder4.position.x=35;
cylinder4.position.y=332;
cylinder4.position.z=-60.62;


var geometry5 = new THREE.CylinderGeometry( 16, 12, 30, 32 );
var cylinder5 = new THREE.Mesh( geometry5 );
cylinder5.position.x=-35;
cylinder5.position.y=332;
cylinder5.position.z=-60.62;


var geometry6 = new THREE.CylinderGeometry( 16, 12, 30, 32 );
var cylinder6 = new THREE.Mesh( geometry6 );
cylinder6.position.x=-70;
cylinder6.position.y=332;
cylinder6.position.z=0;

var geometry7 = new THREE.CylinderGeometry( 16, 12, 30, 32 );
var cylinder7 = new THREE.Mesh( geometry7);
cylinder7.position.x=-35;
cylinder7.position.y=332;
cylinder7.position.z=60.62;

////////////////////////////////////////////////////////////////////////Union de mallas

var Torre = new THREE.Geometry();

Torre.merge(basse.geometry, basse.matrix);
Torre.merge(cylinder2.geometry, cylinder2.matrix);
Torre.merge(cylinder3.geometry, cylinder3.matrix);
Torre.merge(cylinder4.geometry, cylinder4.matrix);
Torre.merge(cylinder5.geometry, cylinder5.matrix);
Torre.merge(cylinder6.geometry, cylinder6.matrix);
Torre.merge(cylinder7.geometry, cylinder7.matrix);

var materialFinal = new THREE.MeshNormalMaterial();
var TorreMalla = new THREE.Mesh(Torre, materialFinal);
escena.add(TorreMalla);

renderizador.render( escena,camara );    
