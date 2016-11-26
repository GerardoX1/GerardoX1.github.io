//Puntos de la torre
var setupdone=false;
var textura1=false;
var textura2=false;
var textura3=false;
var textura4=false;
var textura5=false;

//CLONAMOS LAS PIEZAS
var torre1= TorreFB.clone();
var torre2= TorreFB.clone();

var torre3= TorreFN.clone();
var torre4= TorreFN.clone();

//CLONAMOS LOS BORDES

var borde1= new THREE.BoxGeometry( 10, 90, 3 );
var borde2= new THREE.BoxGeometry( 10, 90, 3 );
var borde3= new THREE.BoxGeometry( 10, 90, 3 );
var borde4= new THREE.BoxGeometry( 10, 90, 3 );

        //Declaración del objeto
var TEXTURA=new Object();
//Declaración de las retrollamadas

//Marmol blanco
TEXTURA.retrollamadaBlanco=function(textura){
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

TEXTURA.escena.add(TEXTURA.torre1B);
TEXTURA.escena.add(TEXTURA.torre2B);       
}

//Marmol Negro
TEXTURA.retrollamadaNegro=function(textura){
  var material=new THREE.MeshBasicMaterial({map:textura});
  
  TEXTURA.torre3N=new THREE.Mesh(torre3,material);
  TEXTURA.torre4N=new THREE.Mesh(torre4,material);
  
  TEXTURA.torre3N.position.x=10;
  TEXTURA.torre3N.position.y=80;
  TEXTURA.torre3N.position.z=3;
  
  TEXTURA.torre4N.position.x=80;
  TEXTURA.torre4N.position.y=80;
  TEXTURA.torre4N.position.z=3;
        
  TEXTURA.torre3N.scale.set(0.05,0.05,0.05)
  TEXTURA.torre3N.rotateX(Math.PI/2);
        
  TEXTURA.torre4N.scale.set(0.05,0.05,0.05)
  TEXTURA.torre4N.rotateX(Math.PI/2);
  
textura2=true;

TEXTURA.escena.add(TEXTURA.torre3N);
TEXTURA.escena.add(TEXTURA.torre4N);       
}

//Madera
TEXTURA.retrollamadaMadera=function(textura){
  var material=new THREE.MeshBasicMaterial({map:textura});
  
  TEXTURA.Borde1M=new THREE.Mesh(borde1,material);
  TEXTURA.Borde2M=new THREE.Mesh(borde2,material);
  TEXTURA.Borde3M=new THREE.Mesh(borde3,material);
  TEXTURA.Borde4M=new THREE.Mesh(borde4,material);
  
  //posiciones de los elementos
  TEXTURA.Borde1M.position.x=0;
  TEXTURA.Borde1M.position.y=40;
       
  TEXTURA.Borde3M.position.x=90;
  TEXTURA.Borde3M.position.y=50;
  
  TEXTURA.Borde2M.rotateZ(Math.PI/2);
  TEXTURA.Borde4M.rotateZ(Math.PI/2); 
        
  TEXTURA.Borde2M.position.x=50;
  TEXTURA.Borde2M.position.y=0;
   
  TEXTURA.Borde4M.position.x=40;
  TEXTURA.Borde4M.position.y=90;
  
textura3=true;

TEXTURA.escena.add(TEXTURA.Borde1M);
TEXTURA.escena.add(TEXTURA.Borde2M);
TEXTURA.escena.add(TEXTURA.Borde3M);
TEXTURA.escena.add(TEXTURA.Borde4M);
}

//Definición de la geometría
var cubo=new THREE.BoxGeometry(10,10,3);

//Cuadrito blanca
TEXTURA.retrollamadaCuadroBlanco=function(textura){
  var material=new THREE.MeshBasicMaterial({map:textura});

        //Creación del grupo del tablero
  var tablero1=new THREE.Group();
  var k=0;
  for (var i=0;i<8;i++){
    for(var j=0;j<8;j++){
      if(k%2!==0){
        TEXTURA.malla1=new THREE.Mesh(cubo,material);
        TEXTURA.malla1.position.x=(j+1)*10;//Columnas
        TEXTURA.malla1.position.y=(i+1)*10;//Filas
        TEXTURA.malla1.matrixAutoUpdate=false;
        TEXTURA.malla1.updateMatrix();
        TEXTURA.malla1.receiveShadow=true;
        tablero1.add(TEXTURA.malla1);
      }
      k++;
    }
  k++;
  }
  textura4=true;
  TEXTURA.escena.add(tablero1);    
}

//cuadrito negra
TEXTURA.retrollamadaCuadroNegro=function(textura){
  var material=new THREE.MeshBasicMaterial({map:textura});
//Creación del grupo del tablero
  var tablero2=new THREE.Group();
  var k=0;
  for (var i=0;i<8;i++){
    for(var j=0;j<8;j++){
      if(k%2==0){
        TEXTURA.malla2=new THREE.Mesh(cubo,material);
        TEXTURA.malla2.position.x=(j+1)*10;//Columnas
        TEXTURA.malla2.position.y=(i+1)*10;//Filas
        TEXTURA.malla2.matrixAutoUpdate=false;
        TEXTURA.malla2.updateMatrix();
        TEXTURA.malla2.receiveShadow=true;
        tablero2.add(TEXTURA.malla2);
      }
      k++;
    }
  k++;
  }
  textura5=true;
  TEXTURA.escena.add(tablero2);    
}  

//TEXTURA.escena.add(tablero);   

TEXTURA.setup=function(){
  
  //Creación de la escena
  TEXTURA.escena=new THREE.Scene();
  
  //Cargadores de las texturas
  var cargador1=new THREE.TextureLoader();
  var cargador2=new THREE.TextureLoader();
  var cargador3=new THREE.TextureLoader();
  var cargador4=new THREE.TextureLoader();
  var cargador5=new THREE.TextureLoader();
       
  //Configuración de las imagenes
  cargador1.load("sp-152a-vidrio-spectrum.jpg",TEXTURA.retrollamadaBlanco);
  cargador2.load("bea17cc676ac235c0cbd140b58dbb9c0.jpg",TEXTURA.retrollamadaNegro);
  cargador3.load("textura-madera-roja.jpg",TEXTURA.retrollamadaMadera);
  cargador4.load("12910526-tela-brillante-textura-de-fondo-Foto-de-archivo.jpg",TEXTURA.retrollamadaCuadroBlanco);
  cargador5.load("bea17cc676ac235c0cbd140b58dbb9c0.jpg",TEXTURA.retrollamadaCuadroNegro);
        
  //Creación de la cámara
  TEXTURA.camara=new THREE.PerspectiveCamera();
        
  TEXTURA.camara.position.z=120;
  TEXTURA.camara.position.x=45;
  TEXTURA.camara.position.y=45;
  TEXTURA.escena.rotateX(-Math.PI/4)
  //Creación del lienzo y renderizador
  var lienzo= document.getElementById("Ajedrez");
  TEXTURA.renderizador=new THREE.WebGLRenderer({canvas:lienzo,antialias:true});
  TEXTURA.renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95)

}
 TEXTURA.loop=function(){
 requestAnimationFrame(TEXTURA.loop);
 if(textura1==true && textura2==true && textura3==true && textura4==true && textura5==true){
    if(setupdone==false){
     TEXTURA.setup();
     setupdone=true;
    }
  TEXTURA.renderizador.render(TEXTURA.escena,TEXTURA.camara);
  } 
}
TEXTURA.setup();
TEXTURA.loop();
