var escena = new THREE.Scene();

var camara = new THREE.PerspectiveCamera();
camara.position.z = 1000;
camara.position.y = 200;


var renderizador = new THREE.WebGLRenderer();

renderizador.setSize( window.innerHeight*.95,
                      window.innerHeight*.95);
document.body.appendChild( renderizador.domElement );

      var iMax = 8;
      var jMax = 8;

      var geometry =new Array();
      var material= new Array();
      var cube= new Array();
      var Tablero = new THREE.Geometry();

      for (i=0;i<iMax;i++) { geometry[i]=new Array();
          for (j=0;j<jMax;j++) { geometry[i][j]=0;}
      }

      for (i=0;i<iMax;i++) { material[i]=new Array();
          for (j=0;j<jMax;j++) { material[i][j]=0;}
      }

      for (i=0;i<iMax;i++) { cube[i]=new Array();
          for (j=0;j<jMax;j++) { cube[i][j]=0;}
      }

for ( var i = 0; i <= 7; i ++ ) {
  for ( var j = 0; j <= 7; j ++ ) {
      
      geometry[i][j] = new THREE.BoxGeometry( 10, 10, 3 );
      
      if((i+j)%2==0){
      material[i][j] = new THREE.MeshBasicMaterial( {color: 0x5B6C9D} ); }
      else{
      material[i][j] = new THREE.MeshBasicMaterial( {color: 0xACD9FA} ); }
  
      cube[i][j] = new THREE.Mesh( geometry[i][j], material[i][j] );
      
      cube[i][j].position.x=(j+1)*10;
      cube[i][j].position.y=(i+1)*10;
      
      Tablero.merge(cube[i][j].geometry,cube[i][j].matrix);
}
}
var tableroF=new THREE.Mesh(Tablero);
escena.add( tableroF );
renderizador.render( escena,camara );    
