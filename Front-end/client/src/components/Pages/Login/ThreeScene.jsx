// import React, { useEffect, useRef } from "react";
// import * as THREE from "three";
// import { createNoise3D } from "simplex-noise";

// const ThreeScene = () => {
//   const mountRef = useRef(null);

//   useEffect(() => {
//     let ww = window.innerWidth;
//     let wh = window.innerHeight;
    
//     // إنشاء Renderer
//     const renderer = new THREE.WebGLRenderer({ antialias: true });
//     renderer.setSize(ww, wh);
//     renderer.setClearColor(0x001a2d);

//     mountRef.current.appendChild(renderer.domElement);

//     // إنشاء المشهد
//     const scene = new THREE.Scene();
//     scene.fog = new THREE.Fog(0x001a2d, 80, 140);

//     // الكاميرا
//     const camera = new THREE.PerspectiveCamera(45, ww / wh, 0.1, 200);
//     camera.position.set(70, 30, 5);
//     camera.lookAt(new THREE.Vector3());

//     // إضافة ضوء القمر
//     const moonLight = new THREE.PointLight(0xffffff, 2, 150);
//     scene.add(moonLight);

//     // إنشاء القمر
//     const moonGeometry = new THREE.SphereGeometry(8, 32, 32);
//     const moonMaterial = new THREE.MeshPhongMaterial({
//         color: 0xffffff, // تغيير لون القمر ليتطابق مع النجوم
//         emissive: 0xffffff, // نفس لون الإضاءة المنبعثة
//         emissiveIntensity: 1.8, // زيادة البريق
//         shininess: 25,
//       });
//     const moon = new THREE.Mesh(moonGeometry, moonMaterial);
//     moon.position.set(-9, 1, -6.5);
//     scene.add(moon);
//     moonLight.position.copy(moon.position).add(new THREE.Vector3(0, 4, 0));

//     // إنشاء الأرضية بتدرج الألوان
//     const terrainGeometry = new THREE.PlaneGeometry(150, 150, 120, 120);
//     terrainGeometry.rotateX(-Math.PI / 2);
//     const noise = createNoise3D();

//     // تحديث إحداثيات الارتفاع للأرضية
//     const positions = terrainGeometry.attributes.position.array;
//     for (let i = 0; i < positions.length; i += 3) {
//       const x = positions[i];
//       const z = positions[i + 2];
//       positions[i + 1] = noise(x * 0.03, z * 0.03, 0) * 10; // تعديل الارتفاع
//     }
//     terrainGeometry.attributes.position.needsUpdate = true;
//     terrainGeometry.computeVertexNormals(); // تحسين الإضاءة

//     // استخدام تدرج الألوان للأرضية
//     const terrainMaterial = new THREE.MeshPhongMaterial({
//       color: 0xA9E7DA, // اللون الأول
//       emissive: 0x86C4B8, // اللون الثاني
//       emissiveIntensity: 0.8,
//       gradientMap: new THREE.TextureLoader().load('path_to_gradient_texture.png') // تغيير تدرج الألوان
//     });

//     const terrain = new THREE.Mesh(terrainGeometry, terrainMaterial);
//     scene.add(terrain);

//     // إنشاء النجوم
//     const stars = new THREE.Group();
//     scene.add(stars);
//     const starsLights = new THREE.Group();
//     scene.add(starsLights);

//     const starsAmount = 50; // زيادة عدد النجوم المتحركة
//     for (let i = 0; i < starsAmount; i++) {
//       const starGeometry = new THREE.SphereGeometry(0.3, 16, 16);
//       const starMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
//       const star = new THREE.Mesh(starGeometry, starMaterial);

//       star.position.set(
//         (Math.random() - 0.5) * 150,
//         noise(Math.random() * 0.03, Math.random() * 0.03, 0) * 10 + 0.3,
//         (Math.random() - 0.5) * 150
//       );

//       star.vel = new THREE.Vector2(
//         (Math.random() + 0.1) * 0.1 * (Math.random() < 0.5 ? -1 : 1),
//         (Math.random() + 0.1) * 0.1 * (Math.random() < 0.5 ? -1 : 1)
//       );

//       stars.add(star);

//       const starLight = new THREE.PointLight(0xffffff, 0.8, 3);
//       starLight.position.copy(star.position).add(new THREE.Vector3(0, 0.5, 0));
//       starsLights.add(starLight);
//     }

//     // تحديث النجوم
//     const updateStars = () => {
//       stars.children.forEach((star, index) => {
//         star.position.x += star.vel.x;
//         star.position.z += star.vel.y;

//         if (star.position.x < -75) star.position.x = 75;
//         if (star.position.x > 75) star.position.x = -75;
//         if (star.position.z < -75) star.position.z = 75;
//         if (star.position.z > 75) star.position.z = -75;

//         const ratio = noise(star.position.x * 0.03, star.position.z * 0.03, 0);

//         star.position.y = ratio * 10 + 0.3;

//         starsLights.children[index].position.copy(star.position).add(new THREE.Vector3(0, 0.5, 0));
//       });
//     };

//     // تحديث المشهد
//     const animate = () => {
//       requestAnimationFrame(animate);
//       updateStars();
//       renderer.render(scene, camera);
//     };
//     animate();

//     // تحديث الحجم عند تغيير النافذة
//     const onResize = () => {
//       ww = window.innerWidth;
//       wh = window.innerHeight;
//       camera.aspect = ww / wh;
//       camera.updateProjectionMatrix();
//       renderer.setSize(ww, wh);
//     };

//     window.addEventListener("resize", onResize);

//     return () => {
//         window.removeEventListener("resize", onResize);
        
//         if (mountRef.current && renderer.domElement) {
//           mountRef.current.removeChild(renderer.domElement);
//         }
      
//         renderer.dispose();
//       };
//   }, []);

//   return <div ref={mountRef} className="absolute inset-0"></div>;
// };

// export default ThreeScene;



































import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { createNoise3D } from "simplex-noise";

const ThreeScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    let ww = window.innerWidth;
    let wh = window.innerHeight;

    // إنشاء Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(ww, wh);
    renderer.setClearColor(0x001a2d);

    mountRef.current.appendChild(renderer.domElement);

    // إنشاء المشهد
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x001a2d, 80, 140);

    // الكاميرا
    const camera = new THREE.PerspectiveCamera(45, ww / wh, 0.1, 200);
    camera.position.set(70, 30, 5);
    camera.lookAt(new THREE.Vector3());

    // إضافة ضوء القمر
    const moonLight = new THREE.PointLight(0xffffff, 2, 150);
    scene.add(moonLight);

    // إنشاء القمر
    const moonGeometry = new THREE.SphereGeometry(8, 32, 32);
    const moonMaterial = new THREE.MeshPhongMaterial({
      color: 0xffffff, 
      emissive: 0xffffff, 
      emissiveIntensity: 1.8, 
      shininess: 25,
    });
    const moon = new THREE.Mesh(moonGeometry, moonMaterial);
    moon.position.set(-9, 1, -6.5);
    scene.add(moon);
    moonLight.position.copy(moon.position).add(new THREE.Vector3(0, 4, 0));

    // إنشاء الأرضية بتدرج الألوان
    const terrainGeometry = new THREE.PlaneGeometry(150, 150, 120, 120);
    terrainGeometry.rotateX(-Math.PI / 2);
    const noise = createNoise3D();

    // تحديث إحداثيات الارتفاع للأرضية
    const positions = terrainGeometry.attributes.position.array;
    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i];
      const z = positions[i + 2];
      positions[i + 1] = noise(x * 0.03, z * 0.03, 0) * 10; 
    }
    terrainGeometry.attributes.position.needsUpdate = true;
    terrainGeometry.computeVertexNormals();

    // استخدام تدرج الألوان للأرضية
    const terrainMaterial = new THREE.MeshPhongMaterial({
      color: 0xA9E7DA, 
      emissive: 0x86C4B8, 
      emissiveIntensity: 0.8,
      gradientMap: new THREE.TextureLoader().load('path_to_gradient_texture.png') 
    });

    const terrain = new THREE.Mesh(terrainGeometry, terrainMaterial);
    scene.add(terrain);

    // إنشاء النجوم
    const stars = new THREE.Group();
    scene.add(stars);
    const starsLights = new THREE.Group();
    scene.add(starsLights);

    const starsAmount = 70; 
    for (let i = 0; i < starsAmount; i++) {
      const starGeometry = new THREE.SphereGeometry(0.3, 16, 16);
      const starMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const star = new THREE.Mesh(starGeometry, starMaterial);

      star.position.set(
        (Math.random() - 0.5) * 150,
        noise(Math.random() * 0.03, Math.random() * 0.03, 0) * 10 + 0.3,
        (Math.random() - 0.5) * 150
      );

      star.vel = new THREE.Vector2(
        (Math.random() + 0.1) * 0.1 * (Math.random() < 0.5 ? -1 : 1),
        (Math.random() + 0.1) * 0.1 * (Math.random() < 0.5 ? -1 : 1)
      );

      stars.add(star);

      const starLight = new THREE.PointLight(0xffffff, 0.8, 3);
      starLight.position.copy(star.position).add(new THREE.Vector3(0, 0.5, 0));
      starsLights.add(starLight);
    }

    // تحديث النجوم
    const updateStars = () => {
      stars.children.forEach((star, index) => {
        star.position.x += star.vel.x;
        star.position.z += star.vel.y;

        if (star.position.x < -75) star.position.x = 75;
        if (star.position.x > 75) star.position.x = -75;
        if (star.position.z < -75) star.position.z = 75;
        if (star.position.z > 75) star.position.z = -75;

        const ratio = noise(star.position.x * 0.03, star.position.z * 0.03, 0);

        star.position.y = ratio * 10 + 0.3;

        starsLights.children[index].position.copy(star.position).add(new THREE.Vector3(0, 0.5, 0));
      });
    };

    // تحديث المشهد
    const animate = () => {
      requestAnimationFrame(animate);
      updateStars();
      renderer.render(scene, camera);
    };
    animate();

    // تحديث الحجم عند تغيير النافذة
    const onResize = () => {
      ww = window.innerWidth;
      wh = window.innerHeight;
      camera.aspect = ww / wh;
      camera.updateProjectionMatrix();
      renderer.setSize(ww, wh);
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);

      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }

      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0"></div>;
};

export default ThreeScene;
