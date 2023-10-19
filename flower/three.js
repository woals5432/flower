import { GLTFLoader } from 'GLTFLoader';
import * as THREE from 'three';

function one() {
  let scene = new THREE.Scene();
  let renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#canvas'),
    antialias: true
  });
  renderer.outputEncoding = THREE.sRGBEncoding;

  let camera = new THREE.PerspectiveCamera(30, 1);
  camera.position.set(0, 4, 100);

  scene.background = new THREE.Color('black');
  let light = new THREE.DirectionalLight(0xffff00, 10);
  scene.add(light);

  let loader = new GLTFLoader();
  loader.load('scene.gltf', function (gltf) {
    scene.add(gltf.scene);

    function animate() {
      requestAnimationFrame(animate)
      gltf.scene.rotation.x += 0.001;
      gltf.scene.rotation.y += 0.001;
      renderer.render(scene, camera);
    }
    animate()
  });
}
one()
// 2

let scene = new THREE.Scene();
let renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#canvas2'),
  antialias: true
});
renderer.outputEncoding = THREE.sRGBEncoding;

let camera = new THREE.PerspectiveCamera(30, 1);
camera.position.set(10, 20, 300);

scene.background = new THREE.Color('white');
let light = new THREE.DirectionalLight(0xffff00, 10);
scene.add(light);

let loader = new GLTFLoader();
loader.load('./flower/scene.gltf', function (gltf) {
  scene.add(gltf.scene);

  function animate() {
    requestAnimationFrame(animate)
    gltf.scene.rotation.y += 0.008;
    renderer.render(scene, camera);
  }
  animate()
});
