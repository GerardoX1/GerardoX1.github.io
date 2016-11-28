//Creacion del Rey


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
for ( i = 41; i < 112; i ++ ) {
	tallo.push(new THREE.Vector2(
			Math.sin((i+40)*0.025 )*15 +40 ,
				(i - 5)*2) );
}
/////////
for ( i = 112; i < 117; i ++ ) {
	tallo.push(new THREE.Vector2(
			55 ,
				(i - 5)*2) );
}

for ( i = 117; i < 123; i ++ ) {
	tallo.push(new THREE.Vector2(
			50 ,
				(i - 5)*2) );
}

for ( i = 123; i < 143; i ++ ) {
	tallo.push(new THREE.Vector2(
			Math.sin((i+40)*0.025 )*15 +40 ,
				(i - 5)*2) );
}

for ( i = 143; i < 148; i ++ ) {
	tallo.push(new THREE.Vector2(
			50 ,
				(i - 5)*2) );
}
////// ultimo anillo 
for ( i = 148; i < 169; i ++ ) {
	tallo.push(new THREE.Vector2(
			i*0.27 ,
				(i - 5)*2) );
}

tallo.push(new THREE.Vector2(0,328));

//Campanana

var cubo1 = new THREE.BoxGeometry( 15, 15, 15 );
var cubo2 = new THREE.BoxGeometry( 15, 15, 15 );
var cubo3 = new THREE.BoxGeometry( 15, 15, 15 );
var cubo4 = new THREE.BoxGeometry( 15, 15, 15 );
var cubo5 = new THREE.BoxGeometry( 15, 15, 15 );
var cubo6 = new THREE.BoxGeometry( 15, 15, 15 );

//generamos las formas el tallo

var forma = new THREE.LatheGeometry(tallo);

//Generacion de mallas y movimientos

cubo1.translate(0,336,0);
cubo2.translate(0,351,0);
cubo3.translate(0,366,0);
cubo4.translate(0,381,0);

cubo5.translate(-15,366,0);
cubo6.translate(15,366,0);

var talloMalla = new THREE.Mesh(forma);

var cubo1Malla = new THREE.Mesh(cubo1);
var cubo2Malla = new THREE.Mesh(cubo2);
var cubo3Malla = new THREE.Mesh(cubo3);
var cubo4Malla = new THREE.Mesh(cubo4);
var cubo5Malla = new THREE.Mesh(cubo5);
var cubo6Malla = new THREE.Mesh(cubo6);

//Creamos la Geometria Final

var Alfil = new THREE.Geometry();

//Unimos las mallas

Alfil.merge(talloMalla.geometry,talloMalla.matrix);

Alfil.merge(cubo1Malla.geometry,cubo1Malla.matrix);
Alfil.merge(cubo2Malla.geometry,cubo2Malla.matrix);
Alfil.merge(cubo3Malla.geometry,cubo3Malla.matrix);
Alfil.merge(cubo4Malla.geometry,cubo4Malla.matrix);
Alfil.merge(cubo5Malla.geometry,cubo5Malla.matrix);
Alfil.merge(cubo6Malla.geometry,cubo6Malla.matrix);
