// Third-person chase camera: sits behind and above the runner, smoothly rotates through corners,
// widens its FOV with speed and shakes on impacts.
import * as THREE from 'three';
import { CONFIG } from './config.js';
import { damp, dampAngle, lerp, clamp } from './util.js';

export class FollowCamera {
  constructor(camera) {
    this.camera = camera;
    this.angle = 0;
    this.pos = new THREE.Vector3();
    this.look = new THREE.Vector3();
    this.fwd = new THREE.Vector3(0, 0, -1);
    this.right = new THREE.Vector3(1, 0, 0);
    this.shake = 0;
    this.shakeSeed = 0;
    this.fov = CONFIG.fovBase;
    this._tmp = new THREE.Vector3();
    this._tmp2 = new THREE.Vector3();
    this._deathAnchor = new THREE.Vector3();
    this._deathTime = 0;
  }

  reset(angle, anchor) {
    this.angle = angle;
    this._updateFrame();
    this.pos.copy(anchor).addScaledVector(this.fwd, -CONFIG.camBack).add(new THREE.Vector3(0, CONFIG.camHeight, 0));
    this.look.copy(anchor).addScaledVector(this.fwd, CONFIG.camLookAhead).add(new THREE.Vector3(0, CONFIG.camLookHeight, 0));
    this.fov = CONFIG.fovBase;
    this.shake = 0;
    this._deathTime = 0;
    this._apply();
  }

  addShake(strength) { this.shake = Math.min(1.5, this.shake + strength); }

  _updateFrame() {
    const a = this.angle;
    this.fwd.set(-Math.sin(a), 0, -Math.cos(a));
    this.right.set(Math.cos(a), 0, -Math.sin(a));
  }

  // ctx: { anchor (Vector3, runner feet with damped lateral), playerPos, targetAngle, speed01, boost, dead, deathType, playerY, dt }
  update(dt, ctx) {
    if (!ctx.dead) {
      this.angle = dampAngle(this.angle, ctx.targetAngle, 1 / CONFIG.turnHeadingTime * 1.1, dt);
      this._updateFrame();
      const back = CONFIG.camBack + ctx.speed01 * 0.9 + (ctx.boost ? 0.8 : 0);
      const height = CONFIG.camHeight + ctx.playerY * 0.35;
      const tp = this._tmp.copy(ctx.anchor).addScaledVector(this.fwd, -back); tp.y += height;
      const tl = this._tmp2.copy(ctx.anchor).addScaledVector(this.fwd, CONFIG.camLookAhead); tl.y += CONFIG.camLookHeight + ctx.playerY * 0.5;
      this.pos.x = damp(this.pos.x, tp.x, 16, dt); this.pos.y = damp(this.pos.y, tp.y, 10, dt); this.pos.z = damp(this.pos.z, tp.z, 16, dt);
      this.look.x = damp(this.look.x, tl.x, 18, dt); this.look.y = damp(this.look.y, tl.y, 12, dt); this.look.z = damp(this.look.z, tl.z, 18, dt);
      const targetFov = lerp(CONFIG.fovBase, CONFIG.fovMax, clamp(ctx.speed01, 0, 1)) + (ctx.boost ? 6 : 0);
      this.fov = damp(this.fov, targetFov, 3, dt);
      this._deathTime = 0;
    } else {
      this._deathTime += dt;
      if (ctx.deathType === 'fall') {
        // Hold position, tilt down to watch the runner drop.
        const tl = this._tmp2.copy(ctx.playerPos); tl.y += 0.6;
        this.look.lerp(tl, 1 - Math.exp(-6 * dt));
        const tp = this._tmp.copy(ctx.anchor).addScaledVector(this.fwd, -CONFIG.camBack * 0.8); tp.y += CONFIG.camHeight + 0.5;
        this.pos.lerp(tp, 1 - Math.exp(-3 * dt));
      } else {
        // Ease in toward the fallen runner for a dramatic close-up.
        const tl = this._tmp2.copy(ctx.playerPos); tl.y += 1.0;
        this.look.lerp(tl, 1 - Math.exp(-5 * dt));
        const tp = this._tmp.copy(ctx.playerPos).addScaledVector(this.fwd, -4.2).addScaledVector(this.right, 1.6); tp.y += 2.2;
        this.pos.lerp(tp, 1 - Math.exp(-2.2 * dt));
      }
      this.fov = damp(this.fov, CONFIG.fovBase - 4, 3, dt);
    }
    if (this.shake > 0) this.shake = Math.max(0, this.shake - dt * 2.4);
    this._apply();
  }

  // Title-screen camera: slow orbit around the idle runner.
  updateMenu(dt, playerPos, time) {
    const a = time * 0.22;
    const r = 5.2;
    const tp = this._tmp.set(playerPos.x + Math.sin(a) * r, playerPos.y + 2.0 + Math.sin(time * 0.5) * 0.2, playerPos.z + Math.cos(a) * r);
    const tl = this._tmp2.set(playerPos.x, playerPos.y + 1.1, playerPos.z);
    this.pos.lerp(tp, 1 - Math.exp(-3 * dt));
    this.look.lerp(tl, 1 - Math.exp(-4 * dt));
    this.fov = damp(this.fov, CONFIG.fovBase - 6, 2, dt);
    this.angle = a + Math.PI; // keep frame vectors coherent for whatever reads them
    this._updateFrame();
    this._apply();
  }

  _apply() {
    const cam = this.camera;
    cam.position.copy(this.pos);
    if (this.shake > 0) {
      this.shakeSeed += 1;
      const s = this.shake * this.shake * 0.35;
      cam.position.x += (Math.sin(this.shakeSeed * 12.9898) * 0.5) * s;
      cam.position.y += (Math.sin(this.shakeSeed * 78.233) * 0.5) * s;
      cam.position.z += (Math.sin(this.shakeSeed * 37.719) * 0.5) * s;
    }
    cam.lookAt(this.look);
    if (Math.abs(cam.fov - this.fov) > 0.01) { cam.fov = this.fov; cam.updateProjectionMatrix(); }
  }
}
