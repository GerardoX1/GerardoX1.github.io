//-___________________________________________________TORRE

var Torre = function(textura){    

    Agent.call(this);
    var torreForma = TorreFB.clone();
    this.add(new THREE.Mesh(torreForma, new THREE.MeshLambertMaterial({map:textura})));
    this.castShadow=true;
    this.receiveShadow=true;
    
    this.step =0.1;
    this.colision = 0;
    this.radius = 4;
    this.sensor = new THREE.Raycaster(this.position, new THREE.Vector3(1,0,0));

}
Torre.prototype=new Agent();

//-___________________________________________________cubo

var Cubo=function(textura){    

    Agent.call(this);
    var CuboForma = new THREE.BoxGeometry( 10, 15, 10 );
    this.add(new THREE.Mesh(CuboForma, new THREE.MeshLambertMaterial({map:textura})));
    this.castShadow=true;
    this.receiveShadow=true;
}
Cubo.prototype=new Agent();

//-___________________________________________________borde

var Borde=function(textura){    

    Agent.call(this);
    var BordeForma = new THREE.BoxGeometry( 10, 15, 90 );
    this.add(new THREE.Mesh(BordeForma, new THREE.MeshLambertMaterial({map:textura})));
    this.castShadow=true;
    this.receiveShadow=true;
}
Borde.prototype=new Agent();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//-__________________________________________________Redimencionamiento de Ventana
    listener = function(){
    camara.aspect = window.innerWidth / window.innerHeight;
    camara.updateProjectionMatrix();
    renderizador.setSize( window.innerWidth, window.innerHeight);
}


//-_________________________________________________SETUP
function setup(){
    
    var tipo_evento = 'resize';
    var cambioVentana = false;
    window.addEventListener( tipo_evento, listener, cambioVentana);
    
    setupDone=true;
    
    var luz = new THREE.PointLight(0xCCCCCC);
    luz.position.z=80;
    luz.position.y=80;
    luz.position.x=80;
    
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////7 
    
    //En esta parte se generan las piezas   
    //Blancas
    var torre11 = new Torre(TEXTURAS.PiezaBlanca);
    var torre12 = new Torre(TEXTURAS.PiezaBlanca);
    
    torre11.position.x=10;
    torre11.position.y=3;
    torre11.position.z=0;
    torre11.scale.set(0.045,0.045,0.045)
    
    torre12.position.x=80;
    torre12.position.y=3;
    torre12.position.z=0;
    torre12.scale.set(0.045,0.045,0.045)
    
    
    ////Negras
    var torre21 = new Torre(TEXTURAS.PiezaNegra);
    var torre22 = new Torre(TEXTURAS.PiezaNegra);
    
    torre21.position.x=10;
    torre21.position.y=3;
    torre21.position.z=70;
    torre21.scale.set(0.045,0.045,0.045)
    
    torre22.position.x=80;
    torre22.position.y=3;
    torre22.position.z=70;
    torre22.scale.set(0.045,0.045,0.045)
    
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
      cubo[i][j] = new Cubo(TEXTURAS.marmolBlanco);
      cubo[i][j].position.x=(j+1)*10;
      cubo[i][j].position.y=0;
      cubo[i][j].position.z=(i)*10;    
      cubo[i][j].receiveShadow=true;
      tablero1.add(cubo[i][j]);
      }    
      else{
      cubo[i][j] = new Cubo(TEXTURAS.marmolNegro);
      cubo[i][j].position.x=(j+1)*10;
      cubo[i][j].position.y=0;
      cubo[i][j].position.z=(i)*10;
      cubo[i][j].receiveShadow=true;
      tablero1.add(cubo[i][j]);
      }
      }
}
    var borde1 = new Borde(TEXTURAS.Madera);
    var borde2 = new Borde(TEXTURAS.Madera);
    var borde3 = new Borde(TEXTURAS.Madera);
    var borde4 = new Borde(TEXTURAS.Madera);
    
    borde1.position.x=0;
    borde1.position.y=0;
    borde1.position.z=40;
    
    borde2.position.x=90;
    borde2.position.y=0;
    borde2.position.z=30;
    
    borde3.rotateY(Math.PI/2);
    borde4.rotateY(Math.PI/2);
    
    borde3.position.x=40;
    borde3.position.y=0;
    borde3.position.z=-10;
    
    borde4.position.x=50;
    borde4.position.y=0;
    borde4.position.z=80;
    
    
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //creacion de la camara
    camara = new THREE.PerspectiveCamera();
    //mirada asia todos los blancos
    //CONSTRUCTOR.camara.position.x=45;
    //CONSTRUCTOR.camara.position.y=60;
    //CONSTRUCTOR.camara.position.z=90;
    //CONSTRUCTOR.camara.lookAt(new THREE.Vector3(45,10,0));
    camara.position.x=180;
    camara.position.y=120;
    camara.position.z=180;
    camara.lookAt(new THREE.Vector3(45,10,45));
    
  //Creación del lienzo y renderizador
    
    var lienzo = document.getElementById("tablero");
    renderizador = new THREE.WebGLRenderer({canvas: lienzo, antialias: true});
    renderizador.setSize(window.innerHeight,window.innerHeight)

    //------------ ESCENA
    escena = new THREE.Scene();
   
    //agregamos los elementos
    
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////77
    escena.add(torre11);
    escena.add(torre12);
    
    escena.add(torre21);
    escena.add(torre22);
    
    escena.add(tablero1);
    escena.add(borde1);
    escena.add(borde2);
    escena.add(borde3);
    escena.add(borde4);
    
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////77
    xGoal=torre11.position.x;
    zGoal=torre11.position.z;
    
    escena.add(luz);
    renderizador.shadowMapEnabled = true;
    luz.castShadow =true;
  
}

//-______________________________________________________Verificacion
var setupDone=false;

function loop(){
     requestAnimationFrame(loop);
  if(TEXTURAS.Madera!==undefined && TEXTURAS.PiezaBlanca!==undefined && TEXTURAS.PiezaNegra!==undefined && TEXTURAS.marmolBlanco!==undefined && TEXTURAS.marmolNegro!==undefined && !setupDone){
     setup();
  }
    movement(torre11);
    escena.sense();
    escena.plan();
    escena.act();
    renderizador.render(escena, camara);
  }

//-_____________________________________________________Texturas
function TexturaSetup(){
    
    var cargador = new THREE.TextureLoader();
    
    cargador.load("marmol blanco 2.jpg",function(textura){ TEXTURAS.PiezaBlanca = textura;});
    cargador.load("sp-152a-vidrio-spectrum.jpg",function(textura){ TEXTURAS.PiezaNegra = textura;});
    cargador.load("bea17cc676ac235c0cbd140b58dbb9c0.jpg",function(textura){ TEXTURAS.marmolNegro = textura;});
    cargador.load("12910526-tela-brillante-textura-de-fondo-Foto-de-archivo.jpg",function(textura){ TEXTURAS.marmolBlanco = textura;});
    cargador.load("textura-madera-roja.jpg",function(textura){ TEXTURAS.Madera = textura;});
     
}
    
var xGoal=0;
var zGoal=0;
var m;
var banderaEvento=0;

//------------- EVENTOS TECLADO-----------
var keyDown = function(event){
    /*switch(event.keyCode){
        case 97: //a
        case 65: //A
            xGoal=-0.1;
            break;
        case 83: //s
            zGoal=0.1;
            break;
        case 68:
            xGoal=0.1;
            break;
        case 87:
            zGoal=-0.1;
            break;
                        }*/
    if(banderaEvento==0){
        switch(event.keyCode){
            case 97: //a
            case 65: //A
                xGoal=-35;
                break;
            case 98: //b
            case 66: //B
                xGoal=-25;
                break;
            case 99:
            case 67:
                xGoal=-15;
                break;
            case 100:
            case 68:
                xGoal=-5;
                break;
            case 101:
            case 69:
                xGoal=5;
                break;
            case 102: //f
            case 70: //F
                xGoal=15;
                break;
            case 103:
            case 71:
                xGoal=25;
                break;
            case 104: //h
            case 72: //H
                xGoal=35;
                break;
        }
        banderaEvento=2;
    }else if(banderaEvento==1){
        switch(event.keyCode){
            case 49: //1
                zGoal=-35
                break;
            case 50: //2
                zGoal=-25
                break;
            case 51: //3
                zGoal=-15
                break;
            case 52: //4
                zGoal=-5
                break;
            case 53: //5
                zGoal=5
                break;
            case 54: //6
                zGoal=15
                break;
            case 55: //7
                zGoal=25
                break;
            case 56: //8
                zGoal=35
                break;
        }
        banderaEvento=3;
    }
}
    
var keyUp = function(event){
    /*xGoal=0;
    zGoal=0;*/
    if(banderaEvento==2){
        banderaEvento=1;
    }else if(banderaEvento==3){
        banderaEvento=0;
    }
}
document.addEventListener( 'keydown', keyDown, false );
document.addEventListener( 'keyup', keyUp, false );

function movement(pieza){
    /*pieza.position.x+=xGoal;
    pieza.position.z+=zGoal;*/
    var m=((zGoal-pieza.position.z)/(xGoal-pieza.position.x));
    var b=zGoal-m*xGoal;
    if((pieza.position.x!==xGoal || pieza.position.z!==zGoal) && banderaEvento==0){
        if(pieza.position.x!==xGoal){
            if(pieza.position.x<xGoal)
                pieza.position.x+=0.1;
            else
                pieza.position.x-=0.1;
            pieza.position.z=m*pieza.position.x+b;
        }
        else if(pieza.position.z!==zGoal){
            if(pieza.position.z<zGoal)
                pieza.position.z+=0.1;
            else
                pieza.position.z-=0.1;
            pieza.position.x=(pieza.position.z-b)/m;
        }
        console.log(pieza.position.x,",",pieza.position.z);
    }
    else if(pieza.position.x===xGoal && pieza.position.z===zGoal)
        banderaEvent=0;
    
}

var TEXTURAS= new THREE.Object3D();
var escena = new Environment();
var camara = new THREE.PerspectiveCamera();
var renderizador = new THREE.WebGLRenderer();
TexturaSetup();
loop();
