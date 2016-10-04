var PROTOTIPO = new Object();

PROTOTIPO.ArbolGeometry = function(){
  THREE.Geometry.call(this);
  
  var troncoForma = new THREE.CylinderGeometry(.25,.5,1);
  var esferaForma = new THREE.SphereGeometry(.65);
  esferaForma.translate(0,1,0);
  
  var troncoMalla = new THREE.Mesh(troncoForma);
  var esferaMalla = new THREE.Mesh(esferaForma);
  
  this.merge(troncoMalla.geometry, troncoMalla.matrix);
  this.merge(esferaMalla.geometry, esferaMalla.matrix);
  }
  
  PROTOTIPO.ArbolGeometry.prototype = new THREE.Geometry();
  
  PROTOTIPO.setup = function(){
    var arbol1= new THREE.Mesh(new PROTOTIPO.ArbolGeometry(),new THREE.MeshnormalMaterial());
    var arbol2= new THREE.Mesh(new PROTOTIPO.ArbolGeometry(),new THREE.MeshnormalMaterial());
    
    arbol1.malla.position.x = -5;
    arbol2.malla.position.x =  5;
    
    CONSTRUCTOR.camara = new THREE.PerspectiveCamera();
    CONSTRUCTOR.camara.position.z = 20;
    
    var lienzo = document.getElementById("Prorotype");
    CONSTRUCTOR.renderizador = new THREE.WebGLRenderer();
    
    CONSTRUCTOR.renderizador.setSize( 600,600 );
    document.body.appendChild( CONSTRUCTOR.renderizador.domElement );
    
   CONSTRUCTOR.escena = new THREE.Scene();
   CONSTRUCTOR.escena.add(arbol1.malla);
   CONSTRUCTOR.escena.add(arbol2.malla);
   
   }
  
    CONSTRUCTOR.loop = function(){
    requestAnimationFrame( CONSTRUCTOR.loop );
    CONSTRUCTOR.renderizador.render( CONSTRUCTOR.escena,CONSTRUCTOR.camara);
    }
    
    CONSTRUCTOR.setup();
    CONSTRUCTOR.loop();
