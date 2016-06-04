var scene = new THREE.Scene();  // What you will be viewing that will have objects in that can interact with.

var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 ) //The way in which a user will view the scene. 1. PerspectiveCamera you can see depth so if something is closer of further away the size will look different. 2. orthographicCamera things will always aprear the same size.
//parameters 1.Feild of view. Degrees how much people see  2.Ratio of browser 3. Near clipping plain. 4.Far clipping plain.  Basically the point at which an object can start and end being seen.\

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild(renderer.domElement);

window.addEventListener ( 'resize', function(){ //resizes when window is resized.
  var width = window.innerWidth;
  var height = window.innerHeight;

  renderer.setSize ( width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
});

controls = new THREE.OrbitControls( camera, renderer.domElement); //Added the orbit control file to the html then applied it with this.
//Parameters attaches the camera and the element to apply it to.

controlz = new THREE.DeviceOrientationControls( camera );

//create the shape
var geometry = new THREE.BoxGeometry( 1,1,1 ) // Params width x, depth y, height z

//create a material, color or image texture
var material = new THREE.MeshBasicMaterial( { color: 0xFFFFFF, wireframe: true} );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

//If dont see anything can be due to camera position which is why setting it below.
camera.position.z = 3;


var update = function() { // game logic
  // cube.rotation.x += 0.01;
  // cube.rotation.y += 0.005;
//makes the cube rotate values seem to be a speed. Dont need the above as added orbit control.
};
//Everything you want to be drawing
var render = function() {

  renderer.render( scene, camera );

};

//Specifies how the game will be flowing.  Run continously during play Each turn of the loop, it processes user input without blocking, updates the game state, and renders the game.
//run game loop (update, render, repeat)
var GameLoop = function(){

  requestAnimationFrame( GameLoop ); //allows us to run it every single frame

  update();
  render();
};

GameLoop();