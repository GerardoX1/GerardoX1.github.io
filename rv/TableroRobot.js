function Agent(x=0,y=0){
  THREE.Object3D.call(this);
  this.position.x=x;
  this.position.y=y;
  }
  
  Agent.protopype = new THREE.Object3D();
  
  Agent.prototype.sense = function(environment) {};
  Agent.prototype.plan = function(environment) {};
  Agent.prototype.act = function(environment) {};
  
  function Environment(){
  THREE.Scene.call(this);
  }

  Environment.prototype= new THREE.Scene();
  
  
//la interfaz entre el entorno y los agentes esta dada por estos metodos
  Environment.prototype.sense = function (){
  for (var i = 0; i < this.children.length; i++){
   if (this.children[i].sense !== undefined)
 this.children[i].sense(this);
 }
 }
 
 Environment.prototype.plan = function (){
 for (var i = 0; i < this.children.length; i++){
 if (this.children[i].plan !== undefined)
 this.children[i].plan(this);
 }
 }
 
 Environment.prototype.act = function (){
 for (var i = 0; i < this.children.length; i++){
 if (this.children[i].act !== undefined)
 this.children[i].act(this);
 }
 }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function Wall(size, x,y){
  THEE.Mesh.call(this,new THREE.BoxGeometry(size,size,size),new THREE.MeshNormalMaterial());
  
  this.size=size;
  this.position.x =x;
  this.position.y =y;
  }
  
  Wall.prototype = new THREE.Mesh();
  //se redefinen los metodos sense() y act() de agente pelota una pelota no planifica asu que nio se redefine plan()
  Environment.prototype.setMap = function(map){
  var _offset = Math.floor(map.length/2);
  
  for( var i = 0; i< map.length; i++)
  for( var j = 0; j< map.length; j++){
  if (map[i][j] === "x")
  this.add(new Wall(1,j_offset,-(i-_offset)));
  else if (map[i][j] === "r")
  this.add( new Robot(0.5, j -_offset,-(i-_offset)));
  }
  }
  
  function setup(){
    var mapa = new Array();
    mapa[0] = "xxxxxxxxxxxxxxxxxxxxxxxxx";
    mapa[1] = "x                       x";
    mapa[2] = "x          r            x";
    mapa[3] = "x                       x";
    mapa[4] = "x                       x";
    mapa[5] = "x       rx              x";
    mapa[6] = "x                       x";
    mapa[7] = "x                       x";
    mapa[8] = "xxxx  xxxxxxxxxxxxxxxxxxx";
    mapa[9] = "x              r        x";
    mapa[10]= "x              x        x";
    mapa[11]= "x        xxxxxxx        x";
    mapa[12]= "x   r                   x";
    mapa[13]= "x xxx      xx           x";
    mapa[14]= "x                       x";
    mapa[15]= "x                       x";
    mapa[16]= "x                       x";
    mapa[17]= "x          r            x";
    mapa[19]= "x                       x";
    mapa[20]= "xxxxx       x  x    xxxxx";
    mapa[21]= "x                       x";
    mapa[22]= "x                       x";
    mapa[23]= "x                       x";
    mapa[24] ="xxxxxxxxxxxxxxxxxxxxxxxxx";
    
    environment = new Environment();
    
    environment.setMap(mapa);
    
    camera = new THREE.PerspectiveCamera();
    camera.position.z= 30;
  
   renderer = new THREE.WebGLRenderer();
   renderer.setSize( window.innerHeight*.95,window.innerHeight*.95);
   document.body.appendChild(renderer.domElement);
   
   environment.add(camera);
   
   function loop(){
   requestAnimationFrame( loop );
   
   environment.sense();
   environment.plan();
   environment.act();
   
   renderer.render(environment,camara);
   }
   
   var environment, camera, renderer;
   
   setup();
   loop();
   
   
   
   
   
   
