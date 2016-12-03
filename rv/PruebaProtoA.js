//creamos nuestro constructor
var CONSTRUCTOR = new Object();

//metemos las piezas a un metodo del constructor
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//-___________________________________________________TORRE
CONSTRUCTOR.Torre=function(textura){    

    var torreForma = TorreFB.clone();
    THREE.Mesh.call(this, torreForma, new THREE.MeshLambertMaterial({map:textura}));
    this.castShadow=true;
    this.receiveShadow=true;
}
CONSTRUCTOR.Torre.prototype=new THREE.Mesh();
//-___________________________________________________CABALLO
CONSTRUCTOR.CaballoC=function(textura){    

    var CaballoCForma = Caballo.clone();
    THREE.Mesh.call(this, CaballoCForma, new THREE.MeshLambertMaterial({map:textura}));
    this.castShadow=true;
    this.receiveShadow=true;
}
CONSTRUCTOR.CaballoC.prototype=new THREE.Mesh();
//-___________________________________________________ALFIL
CONSTRUCTOR.AlfilC=function(textura){    

    var AlfilCForma = Alfil.clone();
    THREE.Mesh.call(this, AlfilCForma, new THREE.MeshLambertMaterial({map:textura}));
    this.castShadow=true;
    this.receiveShadow=true;
}
CONSTRUCTOR.AlfilC.prototype=new THREE.Mesh();
//-___________________________________________________PEON
CONSTRUCTOR.PeonC=function(textura){    

    var PeonCForma = Peon.clone();
    THREE.Mesh.call(this, PeonCForma, new THREE.MeshLambertMaterial({map:textura}));
    this.castShadow=true;
    this.receiveShadow=true;
}
CONSTRUCTOR.PeonC.prototype=new THREE.Mesh();
//-___________________________________________________REINA
CONSTRUCTOR.ReinaC=function(textura){    

    var ReinaCForma = Reina.clone();
    THREE.Mesh.call(this, ReinaCForma, new THREE.MeshLambertMaterial({map:textura}));
    this.castShadow=true;
    this.receiveShadow=true;
}
CONSTRUCTOR.ReinaC.prototype=new THREE.Mesh();
//-___________________________________________________REY
CONSTRUCTOR.ReyC=function(textura){    

    var ReyCForma = Rey.clone();
    THREE.Mesh.call(this, ReyCForma, new THREE.MeshLambertMaterial({map:textura}));
    this.castShadow=true;
    this.receiveShadow=true;
}
CONSTRUCTOR.ReyC.prototype=new THREE.Mesh();

//-___________________________________________________cubo
CONSTRUCTOR.Cubo=function(textura){    

    var CuboForma = new THREE.BoxGeometry( 10, 10, 10 );
    THREE.Mesh.call(this, CuboForma, new THREE.MeshLambertMaterial({map:textura}));
    this.castShadow=true;
    this.receiveShadow=true;
}
CONSTRUCTOR.Cubo.prototype=new THREE.Mesh();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
//-__________________________________________________Ventana
CONSTRUCTOR.listener = function(){
  CONSTRUCTOR.camara.aspect = window.innerWidth / window.innerHeight;
  CONSTRUCTOR.camara.updateProjectionMatrix();
  CONSTRUCTOR.renderizador.setSize( window.innerWidth, window.innerHeight);
}
*/
//-_________________________________________________SETUP
CONSTRUCTOR.setup = function(){
    
    var tipo_evento = 'resize';
    var cambioVentana = false;
    window.addEventListener( tipo_evento, CONSTRUCTOR.listener, cambioVentana);
    
    setupDone=true;
    
    var luz=new THREE.PointLight(0xCCCCCC);
    luz.position.z=80;
    luz.position.y=80;
    luz.position.x=80;
    
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////7 
    
    //En esta parte se generan las piezas   
    //Blancas
    var torre11 = new CONSTRUCTOR.Torre(CONSTRUCTOR.PiezaBlanca);
    var torre12 = new CONSTRUCTOR.Torre(CONSTRUCTOR.PiezaBlanca);
    
    torre11.position.x=10;
    torre11.position.y=3;
    torre11.position.z=0;
    torre11.scale.set(0.05,0.05,0.05)
    
    torre12.position.x=80;
    torre12.position.y=3;
    torre12.position.z=0;
    torre12.scale.set(0.05,0.05,0.05)
    
    var caballo11 = new CONSTRUCTOR.CaballoC(CONSTRUCTOR.PiezaBlanca);
    var caballo12 = new CONSTRUCTOR.CaballoC(CONSTRUCTOR.PiezaBlanca);
    
    caballo11.position.x=20;
    caballo11.position.y=3;
    caballo11.position.z=0;
    caballo11.scale.set(0.05,0.05,0.05)
    
    caballo12.position.x=70;
    caballo12.position.y=3;
    caballo12.position.z=0;
    caballo12.scale.set(0.05,0.05,0.05)
    
    var alfil11 = new CONSTRUCTOR.AlfilC(CONSTRUCTOR.PiezaBlanca);
    var alfil12 = new CONSTRUCTOR.AlfilC(CONSTRUCTOR.PiezaBlanca);
    
    alfil11.position.x=30;
    alfil11.position.y=3;
    alfil11.position.z=0;
    alfil11.scale.set(0.05,0.05,0.05)
    
    alfil12.position.x=60;
    alfil12.position.y=3;
    alfil12.position.z=0;
    alfil12.scale.set(0.05,0.05,0.05)
    
    var rey1 = new CONSTRUCTOR.ReyC(CONSTRUCTOR.PiezaBlanca);
    var reina1 = new CONSTRUCTOR.ReinaC(CONSTRUCTOR.PiezaBlanca);
    
    rey1.position.x=40;
    rey1.position.y=3;
    rey1.position.z=0;
    rey1.scale.set(0.05,0.05,0.05)
    
    reina1.position.x=50;
    reina1.position.y=3;
    reina1.position.z=0;
    reina1.scale.set(0.05,0.05,0.05)
    
    var peon11 = new CONSTRUCTOR.PeonC(CONSTRUCTOR.PiezaBlanca);
    var peon12 = new CONSTRUCTOR.PeonC(CONSTRUCTOR.PiezaBlanca);
    var peon13 = new CONSTRUCTOR.PeonC(CONSTRUCTOR.PiezaBlanca);
    var peon14 = new CONSTRUCTOR.PeonC(CONSTRUCTOR.PiezaBlanca);
    var peon15 = new CONSTRUCTOR.PeonC(CONSTRUCTOR.PiezaBlanca);
    var peon16 = new CONSTRUCTOR.PeonC(CONSTRUCTOR.PiezaBlanca);
    var peon17 = new CONSTRUCTOR.PeonC(CONSTRUCTOR.PiezaBlanca);
    var peon18 = new CONSTRUCTOR.PeonC(CONSTRUCTOR.PiezaBlanca);
    
    peon11.position.x=10;
    peon11.position.y=3;
    peon11.position.z=10;
    
    peon12.position.x=20;
    peon12.position.y=3;
    peon12.position.z=10;
    
    peon13.position.x=30;
    peon13.position.y=3;
    peon13.position.z=10;
    
    peon14.position.x=40;
    peon14.position.y=3;
    peon14.position.z=10;
    
    peon15.position.x=50;
    peon15.position.y=3;
    peon15.position.z=10;
    
    peon16.position.x=60;
    peon16.position.y=3;
    peon16.position.z=10;
    
    peon17.position.x=70;
    peon17.position.y=3;
    peon17.position.z=10;
    
    peon18.position.x=80;
    peon18.position.y=3;
    peon18.position.z=10;
    
    peon11.scale.set(0.05,0.05,0.05);
    peon12.scale.set(0.05,0.05,0.05);
    peon13.scale.set(0.05,0.05,0.05);
    peon14.scale.set(0.05,0.05,0.05);
    peon15.scale.set(0.05,0.05,0.05);
    peon16.scale.set(0.05,0.05,0.05);
    peon17.scale.set(0.05,0.05,0.05);
    peon18.scale.set(0.05,0.05,0.05);

    ////Negras
    

    var torre21 = new CONSTRUCTOR.Torre(CONSTRUCTOR.PiezaNegra);
    var torre22 = new CONSTRUCTOR.Torre(CONSTRUCTOR.PiezaNegra);
    
    torre21.position.x=10;
    torre21.position.y=3;
    torre21.position.z=70;
    torre21.scale.set(0.05,0.05,0.05)
    
    torre22.position.x=80;
    torre22.position.y=3;
    torre22.position.z=70;
    torre22.scale.set(0.05,0.05,0.05)
    
    var caballo21 = new CONSTRUCTOR.CaballoC(CONSTRUCTOR.PiezaNegra);
    var caballo22 = new CONSTRUCTOR.CaballoC(CONSTRUCTOR.PiezaNegra);
    
    caballo21.position.x=20;
    caballo21.position.y=3;
    caballo21.position.z=70;
    caballo21.scale.set(0.05,0.05,0.05)
    
    caballo22.position.x=70;
    caballo22.position.y=3;
    caballo22.position.z=70;
    caballo22.scale.set(0.05,0.05,0.05)
    
    var alfil21 = new CONSTRUCTOR.AlfilC(CONSTRUCTOR.PiezaNegra);
    var alfil22 = new CONSTRUCTOR.AlfilC(CONSTRUCTOR.PiezaNegra);
    
    alfil21.position.x=30;
    alfil21.position.y=3;
    alfil21.position.z=70;
    alfil21.scale.set(0.05,0.05,0.05)
   
    alfil22.position.x=60;
    alfil22.position.y=3;
    alfil22.position.z=70;
    alfil22.scale.set(0.05,0.05,0.05)
    
    var rey2 = new CONSTRUCTOR.ReyC(CONSTRUCTOR.PiezaNegra);
    var reina2 = new CONSTRUCTOR.ReinaC(CONSTRUCTOR.PiezaNegra);
    
    rey2.position.x=40;
    rey2.position.y=3;
    rey2.position.z=70;
    rey2.scale.set(0.05,0.05,0.05)
    
    reina2.position.x=50;
    reina2.position.y=3;
    reina2.position.z=70;
    reina2.scale.set(0.05,0.05,0.05)
    
    var peon21 = new CONSTRUCTOR.PeonC(CONSTRUCTOR.PiezaNegra);
    var peon22 = new CONSTRUCTOR.PeonC(CONSTRUCTOR.PiezaNegra);
    var peon23 = new CONSTRUCTOR.PeonC(CONSTRUCTOR.PiezaNegra);
    var peon24 = new CONSTRUCTOR.PeonC(CONSTRUCTOR.PiezaNegra);
    var peon25 = new CONSTRUCTOR.PeonC(CONSTRUCTOR.PiezaNegra);
    var peon26 = new CONSTRUCTOR.PeonC(CONSTRUCTOR.PiezaNegra);
    var peon27 = new CONSTRUCTOR.PeonC(CONSTRUCTOR.PiezaNegra);
    var peon28 = new CONSTRUCTOR.PeonC(CONSTRUCTOR.PiezaNegra);
    
    peon21.position.x=10;
    peon21.position.y=3;
    peon21.position.z=60;
    
    peon22.position.x=20;
    peon22.position.y=3;
    peon22.position.z=60;
    
    peon23.position.x=30;
    peon23.position.y=3;
    peon23.position.z=60;
    
    peon24.position.x=40;
    peon24.position.y=3;
    peon24.position.z=60;
    
    peon25.position.x=50;
    peon25.position.y=3;
    peon25.position.z=60;
    
    peon26.position.x=60;
    peon26.position.y=3;
    peon26.position.z=60;
    
    peon27.position.x=70;
    peon27.position.y=3;
    peon27.position.z=60;
    
    peon28.position.x=80;
    peon28.position.y=3;
    peon28.position.z=60;
    
    peon21.scale.set(0.05,0.05,0.05);
    peon22.scale.set(0.05,0.05,0.05);
    peon23.scale.set(0.05,0.05,0.05);
    peon24.scale.set(0.05,0.05,0.05);
    peon25.scale.set(0.05,0.05,0.05);
    peon26.scale.set(0.05,0.05,0.05);
    peon27.scale.set(0.05,0.05,0.05);
    peon28.scale.set(0.05,0.05,0.05);
    
    //Tablero 
    var iMax = 8;
    var jMax = 8;
    var cubo= new Array();

      for (i=0;i<iMax;i++) { cubo[i]=new Array();
          for (j=0;j<jMax;j++) { cubo[i][j]=0;}
      }

    var tablero1=new THREE.Group();
    
    for ( var i = 0; i <= 7; i ++ ) {
        for ( var j = 0; j <= 7; j ++ ) {
      
      if((i+j)%2==0){
      cubo[i][j] = new CONSTRUCTOR.Cubo(CONSTRUCTOR.marmolBlanco);
      cubo[i][j].position.x=(j+1)*10;
      cubo[i][j].position.y=0;
      cubo[i][j].position.z=(i+1)*10;    
      cubo[i][j].receiveShadow=true;
      tablero1.add(cubo[i][j]);
      }    
      else{
      cubo[i][j] = new CONSTRUCTOR.Cubo(CONSTRUCTOR.marmolNegro);
      cubo[i][j].position.x=(j+1)*10;
      cubo[i][j].position.y=0;
      cubo[i][j].position.z=(i+1)*10;
      cubo[i][j].receiveShadow=true;
      tablero1.add(cubo[i][j]);
      }
      //si no queda generamos un grupo y agregamos la figura al grupo para mostrarla despues
      }
}
      

    
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //creacion de la camara
    CONSTRUCTOR.camara = new THREE.PerspectiveCamera();
    
    CONSTRUCTOR.camara.position.z=45;
    CONSTRUCTOR.camara.position.x=45;
    CONSTRUCTOR.camara.position.y=180;
    CONSTRUCTOR.camara.lookAt(new THREE.Vector3(45,0,45));
    
    
  //Creación del lienzo y renderizador
    
    var lienzo = document.getElementById("tablero");
    CONSTRUCTOR.renderizador = new THREE.WebGLRenderer({canvas: lienzo, antialias: true});
    CONSTRUCTOR.renderizador.setSize(window.innerHeight,window.innerHeight)

    //------------ ESCENA
    CONSTRUCTOR.escena = new THREE.Scene();
   
    //agregamos los elementos
    
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////77
    CONSTRUCTOR.escena.add(torre11);
    CONSTRUCTOR.escena.add(torre12);
    CONSTRUCTOR.escena.add(caballo11);
    CONSTRUCTOR.escena.add(caballo12);
    CONSTRUCTOR.escena.add(alfil11);
    CONSTRUCTOR.escena.add(alfil12);
    CONSTRUCTOR.escena.add(rey1);
    CONSTRUCTOR.escena.add(reina1);
    CONSTRUCTOR.escena.add(peon11);
    CONSTRUCTOR.escena.add(peon12);
    CONSTRUCTOR.escena.add(peon13);
    CONSTRUCTOR.escena.add(peon14);
    CONSTRUCTOR.escena.add(peon15);
    CONSTRUCTOR.escena.add(peon16);
    CONSTRUCTOR.escena.add(peon17);
    CONSTRUCTOR.escena.add(peon18);
    
    CONSTRUCTOR.escena.add(torre21);
    CONSTRUCTOR.escena.add(torre22);
    CONSTRUCTOR.escena.add(caballo21);
    CONSTRUCTOR.escena.add(caballo22);
    CONSTRUCTOR.escena.add(alfil21);
    CONSTRUCTOR.escena.add(alfil22);
    CONSTRUCTOR.escena.add(rey2);
    CONSTRUCTOR.escena.add(reina2);
    CONSTRUCTOR.escena.add(peon21);
    CONSTRUCTOR.escena.add(peon22);
    CONSTRUCTOR.escena.add(peon23);
    CONSTRUCTOR.escena.add(peon24);
    CONSTRUCTOR.escena.add(peon25);
    CONSTRUCTOR.escena.add(peon26);
    CONSTRUCTOR.escena.add(peon27);
    CONSTRUCTOR.escena.add(peon28);
    
    CONSTRUCTOR.escena.add(tablero1);
    
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////77
    
    CONSTRUCTOR.escena.add(luz);
    CONSTRUCTOR.renderizador.shadowMapEnabled = true;
    luz.castShadow =true;
  
}

//-______________________________________________________Verificacion
var setupDone=false;

CONSTRUCTOR.loop = function(){
  requestAnimationFrame( CONSTRUCTOR.loop);
  if(CONSTRUCTOR.Madera!==undefined && CONSTRUCTOR.PiezaBlanca!==undefined && CONSTRUCTOR.PiezaNegra!==undefined && CONSTRUCTOR.marmolBlanco!==undefined && CONSTRUCTOR.marmolNegro!==undefined && !setupDone){
      CONSTRUCTOR.setup();
  }
   CONSTRUCTOR.renderizador.render(CONSTRUCTOR.escena, CONSTRUCTOR.camara);
}


//-_____________________________________________________Texturas
CONSTRUCTOR.TexturaSetup= function(){
    
    var cargador = new THREE.TextureLoader();
    
    //cargador.load("sp-152a-vidrio-spectrum.jpg",function(textura){ CONSTRUCTOR.PiezaBlanca = textura;});
    
    cargador.load("marmol blanco 2.jpg",function(textura){ CONSTRUCTOR.PiezaBlanca = textura;});
    //cargador.load("bea17cc676ac235c0cbd140b58dbb9c0.jpg",function(textura){ CONSTRUCTOR.PiezaNegra = textura;});
    cargador.load("sp-152a-vidrio-spectrum.jpg",function(textura){ CONSTRUCTOR.PiezaNegra = textura;});

    cargador.load("bea17cc676ac235c0cbd140b58dbb9c0.jpg",function(textura){ CONSTRUCTOR.marmolNegro = textura;});
    cargador.load("12910526-tela-brillante-textura-de-fondo-Foto-de-archivo.jpg",function(textura){ CONSTRUCTOR.marmolBlanco = textura;});

    cargador.load("textura-madera-roja.jpg",function(textura){ CONSTRUCTOR.Madera = textura;});
     
}
    
CONSTRUCTOR.TexturaSetup();
CONSTRUCTOR.loop();
