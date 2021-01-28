// set the scene
const scene = new THREE.Scene()

// set up a cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial( {color: '#ff0000'})

const mesh = new THREE.Mesh(geometry, material);

// add that cube to the scene
scene.add(mesh)

// set up camera
const sizes = {
  width: 800,
  height: 600
}

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height) //FOV (in vertical degrees), aspect ratio
scene.add(camera)

// move camera from outside the cube so we can see it
camera.position.z = 6

// render the scene
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('canvas.webgl')
})

renderer.setSize(sizes.width, sizes.height)

renderer.render(scene, camera)