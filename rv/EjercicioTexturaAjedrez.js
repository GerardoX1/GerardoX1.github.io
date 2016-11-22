//Puntos de la torre
var setupdone=false;
var textura1=false;
var textura2=false;
var textura3=false;
var textura4=false;
var textura5=false;

//CLONAMOS LAS PIEZAS
var torre1= TorreFB.clone();
var torre2=TorreFB.clone();


var torre3N= torreMallaN.clone();
torre3N.position.x=10;
torre3N.position.y=80;
torre3N.position.z=3;

var torre4N= torreMallaN.clone();
torre4N.position.x=80;
torre4N.position.y=80;
torre4N.position.z=3;

        //Declaración del objeto
var TEXTURA=new Object();
//Declaración de las retrollamadas

//Marmol blanco
TEXTURA.retrollamadamblanco=function(textura){
  var material=new THREE.MeshBasicMaterial({map:textura});
  
  TEXTURA.torre1B=new THREE.Mesh(torre1,material);
  TEXTURA.torre2B=new THREE.Mesh(torre2,material);
  
  TEXTURA.torre1B.position.x=10;
  TEXTURA.torre1B.position.y=10;
  TEXTURA.torre1B.position.z=3;
  
  TEXTURA.torre2B.position.x=80;
  TEXTURA.torre2B.position.y=10;
  TEXTURA.torre2B.position.z=3;
        
  TEXTURA.torre1B.scale.set(0.05,0.05,0.05)
  TEXTURA.torre1B.rotateX(Math.PI/2);
        
  TEXTURA.torre2B.scale.set(0.05,0.05,0.05)
  TEXTURA.torre2B.rotateX(Math.PI/2);
  
textura1=true;

TEXTURA.escena.add(tablero);
TEXTURA.escena.add(TEXTURA.torre1B);
TEXTURA.escena.add(TEXTURA.torre2B);
TEXTURA.escena.add(torre3N);
TEXTURA.escena.add(torre4N);        
}

TEXTURA.setup=function(){
  
  //Creación de la escena
  TEXTURA.escena=new THREE.Scene();
  
  //Cargadores de las texturas
  var cargador=new THREE.TextureLoader();
  
  //Configuración de las imagenes
  cargador.load("marmol blanco 2.jpg",TEXTURA.retrollamadamblanco);
  
  //Creación de la cámara
  TEXTURA.camara=new THREE.PerspectiveCamera();
  TEXTURA.camara.position.z=130;
  TEXTURA.camara.position.x=45;
  TEXTURA.camara.position.y=45;
  TEXTURA.escena.rotateX(-Math.PI/4)
  //Creación del lienzo y renderizador
  var lienzo= document.getElementById("Tablero-ajedrez");
  TEXTURA.renderizador=new THREE.WebGLRenderer({canvas:lienzo,antialias:true});
  TEXTURA.renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95)


}
 TEXTURA.loop=function(){
 requestAnimationFrame(TEXTURA.loop);
 if(textura1==true){
    if(setupdone==false){
     TEXTURA.setup();
     setupdone=true;
    }
  TEXTURA.renderizador.render(TEXTURA.escena,TEXTURA.camara);
  } 
}
TEXTURA.setup();
TEXTURA.loop();
