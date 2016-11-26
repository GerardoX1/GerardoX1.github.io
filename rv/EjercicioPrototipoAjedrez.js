//Creamos el nuevo constructor
var CONSTRUCTOR = new Object();

//metemos las piezas a un metodo del constructor

//-___________________________________________________TORRE
CONSTRUCTOR.Torre = function (textura){
        
        var TorreForma = TorreFB.clone();
        THREE.Mesh.call(this, TorreForma, new THREE.MeshLAmbertMaterial({map:textura}));
        this.castShadow=true;
        this.receiveShadow=true;
        
}
//su prototype
CONSTRUCTOR.Torre.prototype = new THREE.Mesh();


//-__________________________________________________Ventana
CONSTRUCTOR.listener = function(){
  CONSTRUCTOR.camara.aspect = window.innerWidth / window.innerHeight;
  CONSTRUCTOR.camara.updateProjectionMatrix();
  CONSTRUCTOR.renderizador.setSize( window.innerWidth, window.innerHeight );
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

    var torre1B = new CONSTRUCTOR.Torre(CONSTRUCTOR.torreBlanca);
        
        torre1B.position.x=10;
        torre1B.position.y=10;
        torre1B.position.z=3;
        
        torre1B.scale.set(0.05,0.05,0.05)
        torre1B.rotateX(Math.PI/2);
        
  //creacion de la camara
  CONSTRUCTOR.camara=new THREE.PerspectiveCamera();
        
  CONSTRUCTOR.camara.position.z=120;
  CONSTRUCTOR.camara.position.x=45;
  CONSTRUCTOR.camara.position.y=45;
  CONSTRUCTOR.escena.rotateX(-Math.PI/4)

  //Creación del lienzo y renderizador
        
  var lienzo= document.getElementById("Ajedrez");
  CONSTRUCTOR.renderizador=new THREE.WebGLRenderer({canvas:lienzo,antialias:true});
  CONSTRUCTOR.renderizador.setSize(window.innerHeight,window.innerHeight);
        
  //creacion de la escena
  CONSTRUCTOR.escena = new THREE.Scene();
        
        //agregamos los elementos
        
        CONSTRUCTOR.escena.add(torre1B);
        CONSTRUCTOR.escena.add(luz);
        CONSTRUCTOR.renderizador.shadowMapEnabled = true;
        luz.castShadow =true;
        
}


//-_____________________________________________________Texturas
CONSTRUCTOR.TexturaSetup= function(){
        
    var cargador = new THREE.TextureLoader();
        cargador.load("texturaMarmolBlanco.jpg",function(textura){ CONSTRUCTOR.torreBlanca = textura;});
    
}

//-______________________________________________________Verificacion

var setupDone=false;

CONSTRUCTOR.loop = function(){
  requestAnimationFrame( CONSTRUCTOR.loop);
  if( CONSTRUCTOR.torreBlanca!==undefined && !setupDone){
      CONSTRUCTOR.setup();
  }
   CONSTRUCTOR.renderizador.render(CONSTRUCTOR.escena, CONSTRUCTOR.camara);
}


    

CONSTRUCTOR.TexturaSetup();
CONSTRUCTOR.loop();
