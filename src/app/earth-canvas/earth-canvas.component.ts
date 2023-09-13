import { Component, ElementRef, NgZone, OnDestroy, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

@Component({
  selector: 'app-earth-canvas',
  templateUrl: './earth-canvas.component.html',
  styleUrls: ['./earth-canvas.component.css']
})
export class EarthCanvasComponent implements OnInit {
  @ViewChild('canvasContainer', { static: true }) canvasContainer!: ElementRef;

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private isMobile: boolean = false;
  private model!: THREE.Object3D;
  private clock = new THREE.Clock();
  private rotationSpeed: number = 0.3;
  private isRotating: boolean = false;

  ngOnInit(): void {
    this.checkMobile();
    window.addEventListener('resize', this.checkMobile);

    this.initScene();
    this.initLights();
    // this.initCamera();
    this.loadGLTFModel();
    this.animate();
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.checkMobile);
  }

  private checkMobile = () => {
    this.isMobile = window.innerWidth <= 500;
  }

  private initScene(): void {
    this.scene = new THREE.Scene();
    this.scene.background = null;

    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.set(20, 3, 5);
    this.camera.lookAt(this.scene.position);

    const canvasWidth = 1700;
    const canvasHeight = 650;
    this.renderer = new THREE.WebGLRenderer({ alpha: true });
    this.renderer.setSize(canvasWidth, canvasHeight);
    const canvasContainer = this.canvasContainer.nativeElement;
    canvasContainer.appendChild(this.renderer.domElement);


    const controls = new OrbitControls(this.camera, this.renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = 0.5;
    controls.enableZoom = false;
  }
  private initLights(): void {
    const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x000000, 0.15);
    this.scene.add(hemisphereLight);

    const spotLight = new THREE.SpotLight(0xffffff, 1, 0, Math.PI * 0.12);
    spotLight.position.set(-20, 50, 10);
    spotLight.castShadow = true;
    spotLight.shadow.mapSize.width = 1524;
    spotLight.shadow.mapSize.height = 1024;
    this.scene.add(spotLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    this.scene.add(pointLight);
  }
  // private initCamera(): void {
  //   const canvasWidth = 1300;
  //   const canvasHeight = 600;
  //   this.camera = new THREE.PerspectiveCamera(25, canvasWidth / canvasHeight, 0.1, 1000);
  //   this.camera.position.set(20, 3, 5);
  //   this.camera.lookAt(this.scene.position);
  // }

  private loadGLTFModel(): void {
    const loader = new GLTFLoader();
    loader.load('assets/planet/scene.gltf', (gltf) => {
      this.model = gltf.scene;
      this.model.visible = true;
      this.model.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      const boundingBox = new THREE.Box3().setFromObject(this.model);
      const center = boundingBox.getCenter(new THREE.Vector3());
      this.model.position.sub(center);
      this.model.scale.set(this.isMobile ? 6 : 8, this.isMobile ? 8 : 8, this.isMobile ? 8 : 8);
      this.model.position.set(this.isMobile ? 2 : 1, this.isMobile ? 3.5 : 3.5, this.isMobile ? 7 : 7);
      this.model.rotation.set(0.015, 0.18, 0.15);
      this.scene.add(this.model);
    });
  }

  private animate(): void {
    const animate = () => {
      requestAnimationFrame(animate);

      const deltaTime = this.clock.getDelta();

      if (this.model) {
        this.model.rotation.x += this.rotationSpeed * deltaTime;
        this.model.rotation.y += this.rotationSpeed * deltaTime;
      }

      if (this.camera && this.renderer) {
        this.renderer.clear();
        this.renderer.render(this.scene, this.camera);
      }
    };

    animate();
  }
}





