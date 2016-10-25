function Agent(x=0,y=0){
  THREE.Object3D.call(this);
  this.position.x=x;
  this.position.y=y;
  }
  
  Agent.Protopype = new THREE.Object3D();
  
  Agent.portotype.sense = function(environment) {};
  Agent.portotype.plan = function(environment) {};
  Agent.portotype.act = function(environment) {};
  
  Environment()
  
  function Environment(){
  THREE.Scene.call(this);
  
  Enviroment.protype= new THREE.Scene();
  
  
//la interfaz entre el entorno y los agentes esta dada por estos metodos
  Evironment.prototype.sense = function (){
  for (var i = 0; i < this.children.length; i++){
   if (this.children[i].sense !== undefined)
 this.children[i].sense(this);
 }
 }
 
 Environment.protopype.plan = function (){
 for (var i = 0; i < this.children.length; i++){
 if (this.children[i].plan !== undefined)
 this.children[i].plan(this);
 }
 }
 
 Environment.protopype.act = function (){
 for (var i = 0; i < this.children.length; i++){
 if (this.children[i].act !== undefined)
 this.children[i].act(this);
 }
 }


function Pelota(r, x=0 ,y=0){
  Agent.call(this,x,y);
  this.add(new THREE.Mesh(new THREE.SphereGeometry(r),new THREE.MeshNormalMaterial()))
  
  this.step=0.1;
  this.colision =0;
  this.radius = r;
  this.sensor = new THREE.Raycaster(this.position,new THREE.Vector3(1,0,0));
  }
  
  Pelota.prototype = new Agent();
  //se redefinen los metodos sense() y act() de agente pelota una pelota no planifica asu que nio se redefine plan()
  
  Pelota.prototype.sense = function (environment){
  this.sensor.set(this.position,new THREE.Vector3(1,0,0));
  var obstaculo1 = this.sensor.intersectObjects(environment.children,true);
  
  this.sensor.set(this.position.new THREE.Vector3(-1,0,0));
  var obstaculo2 = this.sensor.intersectObjects(environment.children,true);
  
  if((obstaculo1.length >0 && (obstaculo1[0].distance <= this.radius)) || (obstaculo2[0].distance <= this.radius))  )
  this.colision=1;
  else
  this.colision=0;
  }
  
  Pelota.prototype.act = function(environment){
    if (this.colision ===1)
    this.step=-this.step;
    this.position.x += this.step;
    }
    
  function Pared(size, x=0, y=0){
    THREE.Object3D.call(this,x,y);
    
    this.add(new THREE.Mesh(new THREE.BoxGeometry(size,size,size),new THREE.MeshNormalMaterial()));
    this.size=size;
    this.position.x=x;
    this.position.y=y;
    }
    
    Pared.prototype = new THREE.Object3D();
    //el programa principal queda muy simple
    
    function setup(){
    
    entorno = new Envirenmente();
    camara = new THREE.PerspectiveCamera();
    camara.position.z = 30;
    
    entorno.add(new Pared (1,7,0));
    entorno.add(new Pared (1,-7,0));
    entorno.add(new Pared (1,7,1));
    entorno.add(new Pared (1,-7,1));
    entorno.add(new Pared (1,7,-1));
    entorno.add(new Pared (1,.-7,-1));
    entorno.add(new Pelota(0.5));
    entorno.add(camara);
    
    
   renderer = new THREE.WebGLRenderer();
   renderer.setSize( window.innerHeigt*.95,window.innerHeight*.95);
   document.body.appendChild(renderer.domElement);
   }
   
   function loop(){
   requestAnimationFrame( loop );
   
   entorno.sense();
   entorno.plan();
   entorno.act();
   
   renderer.render(entorno,camara);
    
    
