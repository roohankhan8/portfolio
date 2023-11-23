'use client'
import React, { useEffect } from 'react';
import * as THREE from 'three';

const Background = () => {
  useEffect(() => {
    // Set up your 3D scene here using Three.js
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    
    // Set renderer size
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Append renderer to the DOM
    document.getElementById('background').appendChild(renderer.domElement);

    // Your 3D scene setup code here...

    // Animate the scene
    const animate = () => {
      requestAnimationFrame(animate);

      // Your animation code here...

      renderer.render(scene, camera);
    };

    animate();

    // Clean up on component unmount
    return () => {
      document.getElementById('background').removeChild(renderer.domElement);
    };
  }, []); // Empty dependency array ensures useEffect runs only once

  return <div id="background" style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }} />;
};

export default Background;
