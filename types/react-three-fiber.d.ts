import { Object3DNode } from '@react-three/fiber';
import { Mesh } from 'three';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      mesh: Object3DNode<Mesh, typeof Mesh>;
      planeGeometry: any;
      primitive: any;
      threeGlobe: any;
    }
  }
} 