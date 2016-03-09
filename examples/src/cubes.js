// lib
import THREE from 'three';
import CrackedPepper from '../../src';

// Three js objects
const renderer = new THREE.WebGLRenderer();
const scene = new THREE.Scene();

const cubeGeo = new THREE.CubeGeometry(5, 5, 5);
const basicMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
const cube1 = new THREE.Mesh(cubeGeo, basicMat);

// initalize pepper
const pepperEffect = new CrackedPepper(renderer);

const resize = () => {
  pepperEffect.setSize(window.innerWidth, window.innerHeight);
};

const animate = () => {
  requestAnimationFrame(animate);
  cube1.rotation.x += 0.1;
  cube1.rotation.y -= 0.1;

  pepperEffect.render(scene);
};

const init = () => {
  scene.add(cube1);

  const context = document.querySelector('#renderer');
  context.appendChild(renderer.domElement);

  pepperEffect.setSize(window.innerWidth, window.innerHeight);
  pepperEffect.viewDistance = 10;

  window.addEventListener('resize', resize);
  animate();
};

init();
