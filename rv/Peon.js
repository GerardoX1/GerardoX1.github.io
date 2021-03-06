//Creacion del Peon

//definicion de las figuras que generan nuestra pieza
//tallo

var tallo = [];

for ( var i = 0; i < 30; i ++ ) {
	tallo.push(new THREE.Vector2(
			Math.sin(i*0.2 )*15 +60 ,
				(i - 5)*2) );
}
for ( i = 31; i < 40; i ++ ) {
	tallo.push(new THREE.Vector2(
			55 ,
				(i - 5)*2) );
}
for ( i = 41; i < 121; i ++ ) {
	tallo.push(new THREE.Vector2(
			Math.sin((i+65)*0.025 )*15 +40 ,
				(i - 5)*2) );
}
////
for ( i = 121; i < 126; i ++ ) {
	tallo.push(new THREE.Vector2(
			50 ,
				(i - 5)*2) );
}



tallo.push(new THREE.Vector2(0,242));


//gorrito
var bolita=new THREE.SphereGeometry( 29, 32, 32 );

//generamos las formas el tallo
var forma = new THREE.LatheGeometry(tallo);

//Generacion de mallas y movimientos
bolita.translate(0,259,0);

var talloMalla = new THREE.Mesh(forma);
var bolitaMalla = new THREE.Mesh(bolita);

//Creamos la Geometria Final

var Peon = new THREE.Geometry();

//Unimos las mallas

Peon.merge(talloMalla.geometry,talloMalla.matrix);
Peon.merge(bolitaMalla.geometry,bolitaMalla.matrix);
