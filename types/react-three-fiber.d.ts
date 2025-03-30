import { Object3DNode } from '@react-three/fiber';
import { Mesh, DirectionalLight, AmbientLight, PointLight } from 'three';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      mesh: Object3DNode<Mesh, typeof Mesh> & {
        geometry?: any;
        material?: any;
      };
      planeGeometry: any;
      primitive: any;
      threeGlobe: any;
      ambientLight: Object3DNode<AmbientLight, typeof AmbientLight> & {
        intensity?: number;
        color?: string | number;
      };
      directionalLight: Object3DNode<DirectionalLight, typeof DirectionalLight> & {
        intensity?: number;
        position?: any;
        color?: string | number;
      };
      pointLight: Object3DNode<PointLight, typeof PointLight> & {
        intensity?: number;
        position?: any;
        color?: string | number;
      };
      spotLight: any;
      hemisphereLight: any;
      rectAreaLight: any;
    }
  }
} 