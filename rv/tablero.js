var escena = new THREE.Scene();

var camara = new THREE.PerspectiveCamera();
camara.position.z = 1000;
camara.position.y = 200;


var renderizador = new THREE.WebGLRenderer();

renderizador.setSize( window.innerHeight*.95,
                      window.innerHeight*.95);
document.body.appendChild( renderizador.domElement );

      var geometry =new Array(new Array(),new Array());
      var material= new Array(new Array(),new Array());
      var cube= new Array(new Array(),new Array());
      
      var PosX = 0;
      var PosY = 0;


for ( var i = 0; i < 7; i ++ ) {
  for ( var j = 0; j < 7; j ++ ) {
      
      geometry[i][j] = new THREE.BoxGeometry( 10, 10, 3 );
      
      if((i+j)%2==0){
      material[i][j] = new THREE.MeshBasicMaterial( {color: 0xffffff} ); }
      else{
      material[i][j] = new THREE.MeshBasicMaterial( {color: 0x888888} ); }
  
      cube[i][j] = new THREE.Mesh( geometry[i][j], material[i][j] );
      
      cube[i][j].position.x=PosX + 10;
      cube[i][j].position.y=PosY + 10;
      
      PosX=PosX+10;
      PosY=PosY+10;
      
      scene.add( cube[i][j] );
      
}
}

renderizador.render( escena,camara );    
