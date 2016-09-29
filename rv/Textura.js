var TEXTURA = new Object();

TEXTURA.retrollamada = function( textura ){
    var material=new THREE.MeshBasicMaterial({map: texture});
    TEXTURA.malla = new THREE.Mesh( new THREE.SphereGeometry(1),material);
    TEXTURA.escena.add(TEXTURA.malla);
    }
    
TEXTURA.setup = function(){

    TEXTURA.escena = new THREE.Scene();
    var cargador = new THREE.TextureLoader();
    cargador.load("earth_atmos_2048.jpg",TEXTURA.retrollamada);
    
    TEXTURA.camara = new THREE.PesrpectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
    TEXTURA.camara,position.z = 5;
    
    var lienzo = document.getElementById("ejemplo-textura");
    TEXTURA.renderizador = new THREE.WebGLRenderer();
    TEXTURA.renderizador.setSize(600,600);
    document.body.appendChild( TEXTURA.renderizador.domElement );
    }
 
TEXTURA.loop = function (){
  requestAnimationFrame(TEXTURA.loop);
  
  if (TEXTURA.malla !== undedined ) {
    TEXTURA.malla.rotateX( 0.01 );
    TEXTURA.malla.rotateY( 0.01 );
  }
  TEXTURA.renderizador.render( TEXTURA.escena, TEXTURA.camara);
}  
  TEXTURA.setup();
  TEXTURA.loop();

  
