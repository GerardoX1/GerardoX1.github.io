//Creacion del alfil


//definicion de las figuras que generan nuestra pieza

//tallo


var tallo = [];

for ( var i = 0; i < 30; i ++ ) {
	tallo.push(new THREE.Vector2(
			Math.sin(i*0.2 )*15 +80 ,
				(i - 5)*2) );
}
for ( i = 31; i < 40; i ++ ) {
	tallo.push(new THREE.Vector2(
			55 ,
				(i - 5)*2) );
}
for ( i = 41; i < 121; i ++ ) {
	tallo.push(new THREE.Vector2(
			Math.sin((i+60)*0.025 )*15 +40 ,
				(i - 5)*2) );
}
////
for ( i = 121; i < 126; i ++ ) {
	tallo.push(new THREE.Vector2(
			35 ,
				(i - 5)*2) );
}

for ( i = 126; i < 131; i ++ ) {
	tallo.push(new THREE.Vector2(
			30 ,
				(i - 5)*2) );
}

for ( i = 131; i < 136; i ++ ) {
	tallo.push(new THREE.Vector2(
			25 ,
				(i - 5)*2) );
}

tallo.push(new THREE.Vector2(0,262));


//gorrito

var Cono = new THREE.ConeGeometry( 25, 65, 32 );
var bolita=new THREE.SphereGeometry( 11, 32, 32 );

//generamos las formas el tallo

var forma = new THREE.LatheGeometry(tallo);

//Generacion de mallas y movimientos

Cono.translate(0,295,0);
bolita.translate(0,332,0);

var talloMalla = new THREE.Mesh(forma);

var ConoMalla = new THREE.Mesh(Cono);
var bolitaMalla = new THREE.Mesh(bolita);

//Creamos la Geometria Final

var Alfil = new THREE.Geometry();

//Unimos las mallas

Alfil.merge(talloMalla.geometry,talloMalla.matrix);

Alfil.merge(ConoMalla.geometry,ConoMalla.matrix);
Alfil.merge(bolitaMalla.geometry,bolitaMalla.matrix);
