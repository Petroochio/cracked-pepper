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
  const cameras = [
    new PerspectiveCamera(),
    new PerspectiveCamera(),
    new PerspectiveCamera(),
    new PerspectiveCamera(),
  ];

  // Sizing
  let halfWidth;
  let height;
  let width;

  /**
   * Sets effect height and widht
   * @param {int} w : width of viewport
   * @param {int} h : height of viewport
   * @return this
   */
  this.setSize = (w, h) => {
    renderer.setSize(w, h);
    halfWidth = w / 2;

    width = w > h ? height = h / 3 : height = w / 3;
    console.log('w:', width, 'h:', height, 'w/2:', halfWidth);
  };

  /**
   * Sets effect properties from camera object
   * @param {THREE.PerspectiveCamera} camera
   * @return this
   */
  this.setFromCamera = camera => {
    if (R.isNil(camera.parent)) camera.updateMatrixWorld();
    else camera.parent.updateMatrixWorld();

    // apply camera transforms to pepper effect
    camera.matrixWorld.decompose(this.pos, this.quat, this.scale);
  };

  const updateCameras = center => {
    R.forEach(camera => {
      camera.position.copy(this.pos);
      camera.quaternion.copy(this.quat);
    }, cameras);

    const [front, back, left, right] = cameras;

    front.translateZ(this.viewDistance);
    front.lookAt(center);

    back.translateZ(-(this.viewDistance));
    back.lookAt(center);
    back.rotation.z += Math.PI;

    left.translateX(-(this.viewDistance));
    left.lookAt(center);
    left.rotation.x += Math.PI / 2;

    right.translateX(this.viewDistance);
    right.lookAt(center);
    right.rotation.x += Math.PI / 2;
  };

  const renderCut = (scene, camera, cutParams) => {
    renderer.setScissor(...cutParams);
    renderer.setViewport(...cutParams);
    renderer.render(scene, camera);
  };

  this.render = scene => {
    updateCameras(scene.position);
    const [front, back, left, right] = cameras;

    this.renderer.clear();
    this.renderer.setScissorTest(true);

    const cutScene = R.curry(renderCut)(scene);

    const cutStart = halfWidth - (width / 2);
    // cut front
    cutScene(front, [cutStart, height * 2, width, height]);
    // cut back
    cutScene(back, [cutStart, 0, width, height]);
    // cut left
    cutScene(left, [cutStart - width, height * 2, width, height]);
    // cut right
    cutScene(right, [cutStart + width, height * 2, width, height]);

    renderer.setScissorTest(false);
  };
};

export default pepper;
