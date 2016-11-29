//Creacion del caballo

//definicion de las figuras que generan nuestra pieza
//Base
var tallo = [];

for ( var i = 0; i < 30; i ++ ) {
	tallo.push(new THREE.Vector2(
			Math.sin(i*0.2 )*15 +90 ,
				(i - 5)*2) );
}
for ( i = 31; i < 50; i ++ ) {
	tallo.push(new THREE.Vector2(
			60 ,
				(i - 5)*2) );
}

tallo.push(new THREE.Vector2(0,90));

//Busto de caballo

var PCaballo = new THREE.Shape();


PCaballo.moveTo( -45,50 );
PCaballo.lineTo(-45,50);
PCaballo.lineTo(-55,70);
PCaballo.lineTo(-78,188);
PCaballo.lineTo(-49,289);
PCaballo.lineTo(17,326);
PCaballo.lineTo(63,325);
PCaballo.lineTo(77,336);
PCaballo.lineTo(86,329);
PCaballo.lineTo(84,314);
PCaballo.lineTo(101,300);
PCaballo.lineTo(151,249);
PCaballo.lineTo(155,242);
PCaballo.lineTo(157,234);
PCaballo.lineTo(136,206);
PCaballo.lineTo(102,220);
PCaballo.lineTo(63,216);
PCaballo.lineTo(41,240);
PCaballo.lineTo(41,210);
PCaballo.lineTo(104,126);
PCaballo.lineTo(148,70);
PCaballo.lineTo(138,50);
PCaballo.lineTo(-45,50);

//generamos la forma de la base

var forma = new THREE.LatheGeometry(tallo);
var BCaballo = new THREE.ExtrudeGeometry(PCaballo,{amount:40});

//Generacion de mallas y movimientos

BCaballo.translate(0,50,0);
var talloMalla = new THREE.Mesh(forma);
var CaballoMalla = new THREE.Mesh( BCaballo);

//Creamos la Geometria Final

var Alfil = new THREE.Geometry();

//Unimos las mallas

Alfil.merge(talloMalla.geometry,talloMalla.matrix);
Alfil.merge(CaballoMalla.geometry,CaballoMalla.matrix);

