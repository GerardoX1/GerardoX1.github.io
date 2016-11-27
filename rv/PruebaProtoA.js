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
/*
//------------ TABLERO------
CONSTRUCTOR.Tablero = function (texturaBlanco, texturaNegro,texturaMadera){
    var color=0;
    for(var i=0;i<8;i++){
      for(var j=0;j<8;j++){
        var cuboForma=  new THREE.BoxGeometry(10,10,5);
        cuboForma.translate(-35+i*10,35-j*10,0);
        if(color%2===0){
          var material = new THREE.MeshLambertMaterial({map:texturaNegro});
        }else{
          var material = new THREE.MeshLambertMaterial({map: texturaBlanco});
        }
        var cuboMalla = new THREE.Mesh(cuboForma,material);
        color=color+1;
        cuboMalla.rotateX(-Math.PI/2);
        cuboMalla.rotateZ(-Math.PI/2);
          cuboMalla.receiveShadow=true;
        CONSTRUCTOR.escena.add(cuboMalla);
      }
      color=color+1;
    }

    var bordeForma = new THREE.BoxGeometry(100,100,5);
    bordeForma.translate(0,0,-5);
    var bordeMaterial = new THREE.MeshLambertMaterial({map:texturaMadera});
    var bordeMalla = new THREE.Mesh(bordeForma,bordeMaterial);
    bordeMalla.rotateX(-Math.PI/2);
    bordeMalla.receiveShadow=true;
    CONSTRUCTOR.escena.add(bordeMalla);
}
*/

//------------ FUNCION CAMBIO VENTANA-----
CONSTRUCTOR.listener = function(){
  CONSTRUCTOR.camara.aspect = window.innerWidth / window.innerHeight;
  CONSTRUCTOR.camara.updateProjectionMatrix();
  CONSTRUCTOR.renderizador.setSize( window.innerWidth, window.innerHeight );
}

//---------- SET UP--------
CONSTRUCTOR.setup = function(){
    var tipo_evento = 'resize';
    var cambioVentana = false;
    window.addEventListener( tipo_evento, CONSTRUCTOR.listener, cambioVentana);
    
    setupDone=true;
    
    var luz=new THREE.PointLight(0xCCCCCC);
    luz.position.y=50;
    luz.position.z=100;
    
    var torre1 = new CONSTRUCTOR.Torre(CONSTRUCTOR.torreBlanca);
    torre1.position.x=-35;
    torre1.position.y=2.5;
    torre1.position.z=-35;
    torre1.scale.set(0.05,0.05,0.05)

    //--------------- CAMARA ---------------
    CONSTRUCTOR.camara = new THREE.PerspectiveCamera();
    CONSTRUCTOR.camara.position.y = 50;
    CONSTRUCTOR.camara.position.x = 50;
    CONSTRUCTOR.camara.position.z = 50;
    CONSTRUCTOR.camara.lookAt(new THREE.Vector3(0,0,0));
    
    var lienzo = document.getElementById("tablero");
    CONSTRUCTOR.renderizador = new THREE.WebGLRenderer({canvas: lienzo, antialias: true});
    CONSTRUCTOR.renderizador.setSize(window.innerHeight,window.innerHeight)

    //------------ ESCENA
    CONSTRUCTOR.escena = new THREE.Scene();
    
    //CONSTRUCTOR.Tablero(CONSTRUCTOR.marmolBlanco,CONSTRUCTOR.marmolNegro,CONSTRUCTOR.madera);
    
    //agregamos los elementos
    CONSTRUCTOR.escena.add(torre1);

    
    CONSTRUCTOR.escena.add(luz);
    CONSTRUCTOR.renderizador.shadowMapEnabled = true;
    luz.castShadow =true;
  
}

var setupDone=false;

CONSTRUCTOR.loop = function(){
  requestAnimationFrame( CONSTRUCTOR.loop);
  if(CONSTRUCTOR.madera!==undefined && CONSTRUCTOR.torreBlanca!==undefined && CONSTRUCTOR.marmolBlanco!==undefined && CONSTRUCTOR.marmolNegro!==undefined && !setupDone){
      CONSTRUCTOR.setup();
  }
   CONSTRUCTOR.renderizador.render(CONSTRUCTOR.escena, CONSTRUCTOR.camara);
}

CONSTRUCTOR.TexturaSetup= function(){
    var cargador = new THREE.TextureLoader();
    cargador.load("sp-152a-vidrio-spectrum.jpg",
                  function(textura){ CONSTRUCTOR.torreNegra = textura;});
    cargador.load("bea17cc676ac235c0cbd140b58dbb9c0.jpg",
                  function(textura){ CONSTRUCTOR.marmolNegro = textura;});
    cargador.load("12910526-tela-brillante-textura-de-fondo-Foto-de-archivo.jpg",
                  function(textura){ CONSTRUCTOR.torreBlanca = textura;});
    cargador.load("textura-madera-roja.jpg",
                  function(textura){ CONSTRUCTOR.madera = textura;});
    cargador.load("12910526-tela-brillante-textura-de-fondo-Foto-de-archivo.jpg",
                  function(textura){ CONSTRUCTOR.marmolBlanco = textura;});
    
    
    
}
    
CONSTRUCTOR.TexturaSetup();
CONSTRUCTOR.loop();
