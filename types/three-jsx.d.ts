import * as THREE from 'three';
import { Object3DNode } from '@react-three/fiber';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      mesh: JSX.IntrinsicElements['object'] & {
        geometry?: any;
        material?: any;
      };
      threeGlobe: JSX.IntrinsicElements['object'];
      planeGeometry: JSX.IntrinsicElements['object'] & {
        args?: any[];
      };
      primitive: JSX.IntrinsicElements['object'] & {
        object?: any;
        attach?: string;
      };
      pointLight: JSX.IntrinsicElements['object'] & {
        intensity?: number;
        position?: any;
        color?: string | number;
      };
      ambientLight: JSX.IntrinsicElements['object'] & {
        intensity?: number;
        color?: string | number;
      };
      directionalLight: JSX.IntrinsicElements['object'] & {
        intensity?: number;
        position?: any;
        color?: string | number;
      };
      spotLight: JSX.IntrinsicElements['object'];
      hemisphereLight: JSX.IntrinsicElements['object'];
      rectAreaLight: JSX.IntrinsicElements['object'];
    }
  }
} 