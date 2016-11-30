//creamos nuestro constructor
var CONSTRUCTOR = new Object();

//metemos las piezas a un metodo del constructor
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

    var PeonCForma = PeonC.clone();
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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//-__________________________________________________Ventana
CONSTRUCTOR.listener = function(){
  CONSTRUCTOR.camara.aspect = window.innerWidth / window.innerHeight;
  CONSTRUCTOR.camara.updateProjectionMatrix();
  CONSTRUCTOR.renderizador.setSize( window.innerWidth, window.innerHeight);
}

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
    
    var torre11 = new CONSTRUCTOR.Torre(CONSTRUCTOR.PiezaBlanca);
    var torre12 = new CONSTRUCTOR.Torre(CONSTRUCTOR.PiezaBlanca);
    
    torre11.position.x=10;
    torre11.position.y=10;
    torre11.position.z=3;
    torre11.scale.set(0.05,0.05,0.05)
    
    torre12.position.x=80;
    torre12.position.y=10;
    torre12.position.z=3;
    torre12.scale.set(0.05,0.05,0.05)
    
    var caballo11 = new CONSTRUCTOR.CaballoC(CONSTRUCTOR.PiezaBlanca);
    var caballo12 = new CONSTRUCTOR.CaballoC(CONSTRUCTOR.PiezaBlanca);
    
    caballo11.position.x=20;
    caballo11.position.y=10;
    caballo11.position.z=3;
    caballo11.scale.set(0.05,0.05,0.05)
    
    caballo12.position.x=70;
    caballo12.position.y=10;
    caballo12.position.z=3;
    caballo12.scale.set(0.05,0.05,0.05)
    
    var alfil11 = new CONSTRUCTOR.AlfilC(CONSTRUCTOR.PiezaBlanca);
    var alfil12 = new CONSTRUCTOR.AlfilC(CONSTRUCTOR.PiezaBlanca);
    
    alfil11.position.x=30;
    alfil11.position.y=10;
    alfil11.position.z=3;
    alfil11.scale.set(0.05,0.05,0.05)
    
    alfil12.position.x=60;
    alfil12.position.y=10;
    alfil12.position.z=3;
    alfil12.scale.set(0.05,0.05,0.05)
    
    var rey1 = new CONSTRUCTOR.ReyC(CONSTRUCTOR.PiezaBlanca);
    var reina1 = new CONSTRUCTOR.ReinaC(CONSTRUCTOR.PiezaBlanca);
    
    rey1.position.x=40;
    rey1.position.y=10;
    rey1.position.z=3;
    rey1.scale.set(0.05,0.05,0.05)
    
    reina1.position.x=50;
    reina1.position.y=10;
    reina1.position.z=3;
    reina1.scale.set(0.05,0.05,0.05)
    
    
    
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //creacion de la camara
    CONSTRUCTOR.camara = new THREE.PerspectiveCamera();
    
    CONSTRUCTOR.camara.position.z=100;
    CONSTRUCTOR.camara.position.x=100;
    CONSTRUCTOR.camara.position.y=100;
    CONSTRUCTOR.camara.lookAt(new THREE.Vector3(5,45,0));
    
    
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
    cargador.load("bea17cc676ac235c0cbd140b58dbb9c0.jpg",function(textura){ CONSTRUCTOR.PiezaNegra = textura;});
   
    cargador.load("bea17cc676ac235c0cbd140b58dbb9c0.jpg",function(textura){ CONSTRUCTOR.marmolNegro = textura;});
    cargador.load("12910526-tela-brillante-textura-de-fondo-Foto-de-archivo.jpg",function(textura){ CONSTRUCTOR.marmolBlanco = textura;});

    cargador.load("textura-madera-roja.jpg",function(textura){ CONSTRUCTOR.Madera = textura;});
     
}
    
CONSTRUCTOR.TexturaSetup();
CONSTRUCTOR.loop();
