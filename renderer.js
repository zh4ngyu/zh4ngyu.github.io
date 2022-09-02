console.log('renderer.js')


/*
window.api.receive("test_back", (data) => {
    console.log(`Received ${data} from main process`);
});

window.api.send("test", "send some test data");

*/



const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setClearColor( 0xffffff, 0);
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

camera.position.z = 4;
camera.position.y = 5;
camera.position.x = 0;
camera.rotateOnAxis(new THREE.Vector3(1, 0, 0), -1);

var gridHelper = new THREE.GridHelper( 5, 10 );
scene.add( gridHelper );


window.addEventListener( 'resize', ()=>{
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
}, false );




//const map = new THREE.TextureLoader().load( './img/New Piskel.png' );
//map.magFilter = THREE.NearestFilter;
//map.repeat.set(1/3, 1/3)
//map.offset.x = 0.333
//map.offset.y = 0.667

//const material = new THREE.SpriteMaterial( { map: map } );

//const sprite = new THREE.Sprite( material );
//scene.add( sprite );

let test = new human(scene)

test.p(0,2)

let x = 0
let y = 0
let r = 0




//var controls = new THREE.OrbitControls( camera, renderer.domElement );
//controls.enableZoom = false;
//controls.enablePan = false;
//controls.maxPolarAngle = Math.PI/2.5;



function render_it(){



    
    x+= 0.1
    y+= 0.3
    r+= 0.1

    //test.p(x,y)
    test.neck = r
    test.shoulderl = x
    test.elbowl = y
    test.gesture()

    renderer.render( scene, camera );
}






function animate() {
    render_it()
    requestAnimationFrame( animate );
};


requestAnimationFrame(animate);
//render_it()
