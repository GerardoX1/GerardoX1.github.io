//Creacion Reyna


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

for ( i = 112; i < 120; i ++ ) {
	tallo.push(new THREE.Vector2(
			50 ,
				(i - 5)*2) );
}


for ( i = 120; i < 160; i ++ ) {
	tallo.push(new THREE.Vector2(
			Math.sin((i+40)*0.025 )*15 +40 ,
				(i - 5)*2) );
}

for ( i = 160; i < 169; i ++ ) {
	tallo.push(new THREE.Vector2(
			60 ,
				(i - 5)*2) );
}


tallo.push(new THREE.Vector2(0,328));

//Campanana

var Bolita = new THREE.SphereGeometry( 25, 32, 32 );

//generamos las formas el tallo

var forma = new THREE.LatheGeometry(tallo);

//Generacion de mallas y movimientos
Bolita.translate(0,352,0);

var talloMalla = new THREE.Mesh(forma);
var BolitaMalla = new THREE.Mesh(Bolita);

//Creamos la Geometria Final

var Reina = new THREE.Geometry();

//Unimos las mallas

Reina.merge(talloMalla.geometry,talloMalla.matrix);
Reina.merge(BolitaMalla.geometry,BolitaMalla.matrix);


