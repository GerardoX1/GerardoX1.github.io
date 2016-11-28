//Creacion del el alfil


//definicion de las figuras que generan nuestra pieza

//tallo


var tallo = [];

for ( var i = 0; i < 30; i ++ ) {
	tallo.push(new THREE.Vector2(
			Math.sin(i*0.2 )*15 +100 ,
				(i - 5)*2) );
}
for ( i = 31; i < 40; i ++ ) {
	tallo.push(new THREE.Vector2(
			60 ,
				(i - 5)*2) );
}
for ( i = 41; i < 160; i ++ ) {
	tallo.push(new THREE.Vector2(
			Math.sin(i*0.025 )*15 +40 ,
				(i - 5)*2) );
}

tallo.push(new THREE.Vector2(0,161));

//Campanana

var Bolita = new THREE.SphereGeometry( 20, 32, 32 );

//generamos las formas el tallo

var forma = new THREE.LatheGeometry(tallo);

//Generacion de mallas y movimientos
Bolita.translate(0,320,0);

var talloMalla = new THREE.Mesh(forma);
var BolitaMalla = new THREE.Mesh(Bolita);

//Creamos la Geometria Final

var Alfil = new THREE.Geometry();

//Unimos las mallas

Alfil.merge(talloMalla.geometry,talloMalla.matrix);
Alfil.merge(BolitaMalla.geometry,BolitaMalla.matrix);





