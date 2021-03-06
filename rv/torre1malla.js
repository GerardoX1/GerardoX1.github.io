//Torre (union por mallas)

//Generamos lo de siempre escena camara  

var escena=new THREE.Scene();
var camara=new THREE.PerspectiveCamera();
camara.position.z = 1000;
camara.position.y = 200;

var renderizador=new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);


//para la primera parte definimos las figuras que generan nuestra pieza

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
for ( i = 41; i < 150; i ++ ) {
	tallo.push(new THREE.Vector2(
		50,
				(i - 5)*2) );
}
for ( i = 151; i < 170; i ++ ) {
	tallo.push(new THREE.Vector2(
		80,
				(i - 5)*2) );
}

//conos superiores

var conotorre1 = new THREE.CylinderGeometry( 16, 12, 30, 32 );
var conotorre2 = new THREE.CylinderGeometry( 16, 12, 30, 32 );
var conotorre3 = new THREE.CylinderGeometry( 16, 12, 30, 32 );
var conotorre4 = new THREE.CylinderGeometry( 16, 12, 30, 32 );
var conotorre5 = new THREE.CylinderGeometry( 16, 12, 30, 32 );
var conotorre6 = new THREE.CylinderGeometry( 16, 12, 30, 32 );

//generamos las formas en el caso de los conos ya 
//las tiene asi que no necesitamos mas que para //el tallo

var forma = new THREE.LatheGeometry(tallo);

//realizamos el movimiento de las piezas para //generar la torre como la deseamos

conotorre1.translate(35,332,60.62);
conotorre2.translate(70,332,0);
conotorre3.translate(35,332,-60.62);
conotorre4.translate(-35,332,-60.62);
conotorre5.translate(-70,332,0);
conotorre6.translate(-35,332,60.62);

//generamos sus respectivas mallas

var talloMalla = new THREE.Mesh(forma);
var cono1Malla = new THREE.Mesh(conotorre1);
var cono2Malla = new THREE.Mesh(conotorre2);
var cono3Malla = new THREE.Mesh(conotorre3);
var cono4Malla = new THREE.Mesh(conotorre4);
var cono5Malla = new THREE.Mesh(conotorre5);
var cono6Malla = new THREE.Mesh(conotorre6);

//Creamos la geometria final

var TorreF = new THREE.Geometry();

//uniremos todas las mallas

TorreF.merge(talloMalla.geometry,talloMalla.matrix);
TorreF.merge(cono1Malla.geometry,cono1Malla.matrix);
TorreF.merge(cono2Malla.geometry,cono2Malla.matrix);
TorreF.merge(cono3Malla.geometry,cono3Malla.matrix);
TorreF.merge(cono4Malla.geometry,cono4Malla.matrix);
TorreF.merge(cono5Malla.geometry,cono5Malla.matrix);
TorreF.merge(cono6Malla.geometry,cono6Malla.matrix);

//Generaremos el objeto dandole material

var material=new THREE.MeshNormalMaterial();
var torreMallaF=new THREE.Mesh(TorreF,material);

//Lo mostramos en la escena
escena.add(torreMallaF);

renderizador.render(escena,camara);
