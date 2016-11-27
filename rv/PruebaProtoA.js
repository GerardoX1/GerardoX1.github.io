//creamos nuestro constructor
var CONSTRUCTOR = new Object();

//metemos las piezas a un metodo del constructor

//-___________________________________________________TORRE
CONSTRUCTOR.Torre=function(textura){    

    var torreForma = TorreFB.clone();
    THREE.Mesh.call(this, torreForma, new THREE.MeshLambertMaterial({map:textura}));
    this.castShadow=true;
    this.receiveShadow=true;
}
CONSTRUCTOR.Torre.prototype=new THREE.Mesh();


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
    luz.position.y=50;
    luz.position.z=100;
    
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////7 
    
    //En esta parte se generan las piezas   
    
    var torre1 = new CONSTRUCTOR.Torre(CONSTRUCTOR.PiezaBlanca);
    torre1.position.x=-35;
    torre1.position.y=2.5;
    torre1.position.z=-35;
    torre1.scale.set(0.05,0.05,0.05)
    
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //creacion de la camara
    CONSTRUCTOR.camara = new THREE.PerspectiveCamera();
    
    CONSTRUCTOR.camara.position.z=120;
    CONSTRUCTOR.camara.position.x=45;
    CONSTRUCTOR.camara.position.y=45;
    CONSTRUCTOR.camara.lookAt(new THREE.Vector3(0,0,0));
    
    
  //Creación del lienzo y renderizador
    
    var lienzo = document.getElementById("tablero");
    CONSTRUCTOR.renderizador = new THREE.WebGLRenderer({canvas: lienzo, antialias: true});
    CONSTRUCTOR.renderizador.setSize(window.innerHeight,window.innerHeight)

    //------------ ESCENA
    CONSTRUCTOR.escena = new THREE.Scene();
    
    //agregamos los elementos
    
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////77
    CONSTRUCTOR.escena.add(torre1);

    
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
    cargador.load("sp-152a-vidrio-spectrum.jpg",
                  function(textura){ CONSTRUCTOR.PiezaNegra = textura;});
    cargador.load("bea17cc676ac235c0cbd140b58dbb9c0.jpg",
                  function(textura){ CONSTRUCTOR.marmolNegro = textura;});
    cargador.load("12910526-tela-brillante-textura-de-fondo-Foto-de-archivo.jpg",
                  function(textura){ CONSTRUCTOR.PiezaBlanca = textura;});
    cargador.load("textura-madera-roja.jpg",
                  function(textura){ CONSTRUCTOR.Madera = textura;});
    cargador.load("12910526-tela-brillante-textura-de-fondo-Foto-de-archivo.jpg",
                  function(textura){ CONSTRUCTOR.marmolBlanco = textura;});
    
    
    
}
    
CONSTRUCTOR.TexturaSetup();
CONSTRUCTOR.loop();
