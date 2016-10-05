var escena = new THREE.Scene();

var camara = new THREE.PerspectiveCamera();
camara.position.z = 100;

var renderizador = new THREE.WebGLRenderer();

renderizador.setSize( window.innerHeight*.95,
                      window.innerHeight*.95);
document.body.appendChild( renderizador.domElement );

      var iMax = 8;
      var jMax = 8;

      var geometry =new Array();
      var material= new Array();
      var cube= new Array();

      for (i=0;i<iMax;i++) { geometry[i]=new Array();
          for (j=0;j<jMax;j++) { geometry[i][j]=0;}
      }

      for (i=0;i<iMax;i++) { material[i]=new Array();
          for (j=0;j<jMax;j++) { material[i][j]=0;}
      }

      for (i=0;i<iMax;i++) { cube[i]=new Array();
          for (j=0;j<jMax;j++) { cube[i][j]=0;}
      }

var tablero=new THREE.Group();

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
      tablero.add(cube[i][j]);
}
}


     geometria1 = new THREE.BoxGeometry( 10, 90, 3 );
     geometria2 = new THREE.BoxGeometry( 10, 90, 3 );
     geometria3 = new THREE.BoxGeometry( 10, 90, 3 );
     geometria4 = new THREE.BoxGeometry( 10, 90, 3 );
     materialA = new THREE.MeshBasicMaterial( {color: 0x414344} );
     materialB = new THREE.MeshBasicMaterial( {color: 0x37454F} );
     
     var BordeMalla1=new THREE.Mesh(geometria1,materialA);
     var BordeMalla2=new THREE.Mesh(geometria2,materialB);
     var BordeMalla3=new THREE.Mesh(geometria3,materialA);
     var BordeMalla4=new THREE.Mesh(geometria4,materialB);
     
     BordeMalla1.



escena.add( tablero );
     
renderizador.render( escena,camara );    
