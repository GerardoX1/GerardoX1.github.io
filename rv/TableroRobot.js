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
  THREE.Mesh.call(this,new THREE.BoxGeometry(size,size,size),new THREE.MeshNormalMaterial());
  
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
  /////////////////////////////////////////////////////////////
  function Sensor(position,direction){
	THREE.Raycaster.call(this,position,direction);
	this.colision = false;
	}

Sensor.prototype= new THREE.Raycaster();

function Robot (size,x,y){
   Agent.call(this,x,y);
  
  this.sensor = new Sensor();
  this.actuador = new THREE.Mesh(
    new THREE.BoxGeometry (size, size, size ),
    new THREE.MeshBasicMaterial({color: '#aa0000'}));
  
  this.actuador.commands = [];
  this.add(this.actuador);
  
}

Robot.prototype = new Agent();

Robot.prototype.sense = function (environment){
  this.sensor.set( this.position, new THREE.Vector3(Math.cos(this.rotation.z),Math.sin(this.rotation.z),0));
  
  var obstaculo = this.sensor.intersectObjects(environment).children,true);
  
  if ((obstaculo.length > && (obstaculo[0].distance <= 0.5)))
    this.sensor.colision = true;
  else
    this.sensor.colision = false;
};

Robot.prototype.plan = function (environment){
  this.actuador.commands=[];
  
  if (this.sensor.solision == true)
    this.actuador.commands.push('rotateCCW');
  else 
    this.actuador.commands.push('go straigh');
};

  robot.prototype.act = function (envirenment){
     var command = this.actuador.commands.pop();
    
    if (command === undefined)
      console.log ('Undedined command');
    else if (command in this.operations)
      this.operations[command](this);
    else
      console.log('Unknown command');
  };

Robot.prototype.operations.goStraight = function(robot,distance){
	if (distance === undefined)
		distance = 0.05;
	robot.position.x += distance*Math.cos(robot.rotation.z);
	robot.position.y += distance*Math.sin(robot.rotation.z);
};

Robot.prototype.operations.rotateCW = function (robot, angle){
	if (angle === undefined)
		angle = -Math.PI/2;
	robot.rotation.z += angle;
};

Robot.prototype.operations.rotateCCW = function (robot, angle){
	if (angle === undefined)
		angle = Math.PI/2;
	robot.rotation.z += angle;
};
  /////////////////////////////////////////////////////////////////
  
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
  }
   function loop(){
   requestAnimationFrame( loop );
   
   environment.sense();
   environment.plan();
   environment.act();
   
   renderer.render(environment,camera);
   }
   
   var environment, camera, renderer;
   
   setup();
   loop();
   
   
   
   
   
   
