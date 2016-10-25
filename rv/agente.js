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
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
