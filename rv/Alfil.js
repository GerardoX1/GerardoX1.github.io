//Creacion del caballo

//definicion de las figuras que generan nuestra pieza
//Base
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

tallo.push(new THREE.Vector2(0,70));

//Busto de caballo

var PCaballo = new THREE.Shape();

PCaballo.moveTo( -55,70 );
PCaballo.lineTo(-92,115);
PCaballo.lineTo(-49,265);
PCaballo.lineTo(50,320);
PCaballo.lineTo(121,320);
PCaballo.lineTo(142,336);
PCaballo.lineTo(155,325);
PCaballo.lineTo(152,305);
PCaballo.lineTo(175,283);
PCaballo.lineTo(253,204);
PCaballo.lineTo(259,197);
PCaballo.lineTo(265,182);
PCaballo.lineTo(230,139);
PCaballo.lineTo(181,159);
PCaballo.lineTo(118,153);
PCaballo.lineTo(87,194);
PCaballo.lineTo(87,146);
PCaballo.lineTo(184,-20);
PCaballo.lineTo(174,-67);
PCaballo.lineTo(-55,-70);
PCaballo.lineTo( -55,-70);

var extrudeSettings = {
	steps: 2,
	amount: 16,
	bevelEnabled: true,
	bevelThickness: 1,
	bevelSize: 1,
	bevelSegments: 1
};

//generamos la forma de la base

var forma = new THREE.LatheGeometry(tallo);
var BCaballo = new THREE.ExtrudeGeometry( shape, data );

//Generacion de mallas y movimientos

BCaballo.translate(0,273,0);
var talloMalla = new THREE.Mesh(forma);
var CaballoMalla = new THREE.Mesh( BCaballo);

//Creamos la Geometria Final

var Alfil = new THREE.Geometry();

//Unimos las mallas

Alfil.merge(talloMalla.geometry,talloMalla.matrix);
Alfil.merge(CaballoMalla.geometry,CaballoMalla.matrix);

