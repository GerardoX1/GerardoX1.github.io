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
for ( i = 41; i < 139; i ++ ) {
	tallo.push(new THREE.Vector2(
			Math.sin((i+40)*0.025 )*15 +40 ,
				(i - 5)*2) );
}
////
for ( i = 140; i < 146; i ++ ) {
	tallo.push(new THREE.Vector2(
			55 ,
				(i - 5)*2) );
}

for ( i = 146; i < 151; i ++ ) {
	tallo.push(new THREE.Vector2(
			50 ,
				(i - 5)*2) );
}

for ( i = 151; i < 156; i ++ ) {
	tallo.push(new THREE.Vector2(
			45 ,
				(i - 5)*2) );
}

tallo.push(new THREE.Vector2(0,302));


//gorrito

var Cono = new THREE.ConeGeometry( 20, 25, 32 );
var bolita=new THREE.SphereGeometry( 9, 32, 32 );

//generamos las formas el tallo

var forma = new THREE.LatheGeometry(tallo);

//Generacion de mallas y movimientos

Cono.translate(0,315,0);
bolita.translate(0,327,0);

var talloMalla = new THREE.Mesh(forma);

var ConoMalla = new THREE.Mesh(Cono);
var bolitaMalla = new THREE.Mesh(bolita);

//Creamos la Geometria Final

var Alfil = new THREE.Geometry();

//Unimos las mallas

Alfil.merge(talloMalla.geometry,talloMalla.matrix);

Alfil.merge(ConoMalla.geometry,ConoMalla.matrix);
Alfil.merge(bolitaMalla.geometry,bolitaMalla.matrix);
