// lib
import R from 'ramda';
import { PerspectiveCamera, Vector3, Quaternion } from 'three';

/**
 * Constructor for peppers ghost effect renderer
 * @param {THREE.WebGLRenderer} renderer
 */
const pepper = renderer => {
  // Public vars
  this.pos = new Vector3(); // Position
  this.quat = new Quaternion(); // Quaternion
  this.scale = new Vector3(); // Scale :P
  this.viewDistance = 10;

  this.renderer = renderer;
  // Allow for rendering multiple times in single frame
  this.renderer.autoClear = false;

  // Private vars
  // Cameras
  const cameras = {
    front: new PerspectiveCamera(),
    back: new PerspectiveCamera(),
    left: new PerspectiveCamera(),
    right: new PerspectiveCamera(),
  };

  // Sizing
  let halfWidth;
  let height;
  let width;

  this.setSize = (width, height) => {

  };

  this.render = () => {

  };
};

export default pepper;
