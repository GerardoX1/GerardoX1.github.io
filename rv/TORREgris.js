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
var material = new THREE.MeshBasicMaterial( {color: 0x888888} );
var basse = new THREE.Mesh( forma,material );
escena.add( basse );

var geometry2 = new THREE.CylinderGeometry( 16, 12, 30, 32 );
var material2 = new THREE.MeshBasicMaterial( {color: 0x888888} );
var cylinder2 = new THREE.Mesh( geometry2,material2);

cylinder2.position.x=35;
cylinder2.position.y=332;
cylinder2.position.z=60.62;
escena.add( cylinder2 )


var geometry3 = new THREE.CylinderGeometry( 16, 12, 30, 32 );
var material3 = new THREE.MeshBasicMaterial( {color: 0x888888} );
var cylinder3 = new THREE.Mesh( geometry3,material3 );
cylinder3.position.x=70;
cylinder3.position.y=332;
cylinder3.position.z=0;
escena.add( cylinder3 )

var geometry4 = new THREE.CylinderGeometry( 16, 12, 30, 32 );
var material4 = new THREE.MeshBasicMaterial( {color: 0x888888} );
var cylinder4 = new THREE.Mesh( geometry4, material4 );
cylinder4.position.x=35;
cylinder4.position.y=332;
cylinder4.position.z=-60.62;
escena.add( cylinder4 )

var geometry5 = new THREE.CylinderGeometry( 16, 12, 30, 32 );
var material5 = new THREE.MeshBasicMaterial( {color: 0x888888} );
var cylinder5 = new THREE.Mesh( geometry5,material5 );
cylinder5.position.x=-35;
cylinder5.position.y=332;
cylinder5.position.z=-60.62;
escena.add( cylinder5 )

var geometry6 = new THREE.CylinderGeometry( 16, 12, 30, 32 );
var material6 = new THREE.MeshBasicMaterial( {color: 0x888888} );
var cylinder6 = new THREE.Mesh( geometry6,material6 );
cylinder6.position.x=-70;
cylinder6.position.y=332;
cylinder6.position.z=0;
escena.add( cylinder6 )

var geometry7 = new THREE.CylinderGeometry( 16, 12, 30, 32 );
var material7 = new THREE.MeshBasicMaterial( {color: 0x888888} );
var cylinder7 = new THREE.Mesh( geometry7,material7);
cylinder7.position.x=-35;
cylinder7.position.y=332;
cylinder7.position.z=60.62;
escena.add( cylinder7 )

renderizador.render( escena,camara );    
