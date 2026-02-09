// Initialisation au chargement de la page
window.addEventListener('load', () => {
    const container = document.getElementById('bolter-3d-container');
    if (!container) return;

    // 1. SCÈNE, CAMÉRA ET RENDU
    const scene = new THREE.Scene();
    // Ajustement du champ de vision (FOV) pour un meilleur rendu de l'objet
    const camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // 2. MATÉRIAUX
    // Matériau principal vert "tactique"
    const techMaterial = new THREE.MeshBasicMaterial({ 
        color: 0x33ff00, 
        wireframe: true,
        transparent: true,
        opacity: 0.8
    });

    // Matériau pour les détails internes (plus sombre/transparent)
    const innerMaterial = new THREE.MeshBasicMaterial({
        color: 0x1a5c00,
        wireframe: true,
        transparent: true,
        opacity: 0.3
    });

    // 3. CONSTRUCTION DU BOLTER HAUTE DÉFINITION
    const bolterGroup = new THREE.Group();

    // --- CARCASSE (Receiver) ---
    // Partie supérieure
    const upperReceiver = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.7, 0.6), techMaterial);
    upperReceiver.position.y = 0.2;
    bolterGroup.add(upperReceiver);

    // Partie inférieure
    const lowerReceiver = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.5, 0.55), techMaterial);
    lowerReceiver.position.set(-0.2, -0.3, 0);
    bolterGroup.add(lowerReceiver);

    // --- CANON & FREIN DE BOUCHE ---
    // Le canon principal
    const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 1.2, 16), techMaterial);
    barrel.rotation.z = Math.PI / 2;
    barrel.position.set(1.4, 0.2, 0);
    bolterGroup.add(barrel);

    // Frein de bouche (le bout du canon)
    const muzzle = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 0.4, 16), techMaterial);
    muzzle.rotation.z = Math.PI / 2;
    muzzle.position.set(2.0, 0.2, 0);
    bolterGroup.add(muzzle);

    // --- SYSTÈME DE VISÉE (Scope) ---
    // Corps de la lunette
    const scope = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.1, 0.8, 12), techMaterial);
    scope.rotation.z = Math.PI / 2;
    scope.position.set(0, 0.75, 0);
    bolterGroup.add(scope);

    // Lentilles avant/arrière
    const scopeLensF = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 0.1, 12), techMaterial);
    scopeLensF.rotation.z = Math.PI / 2;
    scopeLensF.position.set(0.4, 0.75, 0);
    bolterGroup.add(scopeLensF);

    const scopeLensR = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 0.1, 12), techMaterial);
    scopeLensR.rotation.z = Math.PI / 2;
    scopeLensR.position.set(-0.4, 0.75, 0);
    bolterGroup.add(scopeLensR);

    // --- CHARGEUR (Magazine) ---
    // Forme courbée simulée par rotation
    const magUpper = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.6, 0.45), techMaterial);
    magUpper.position.set(0.4, -0.6, 0);
    magUpper.rotation.z = 0.1;
    bolterGroup.add(magUpper);

    const magLower = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.6, 0.45), techMaterial);
    magLower.position.set(0.55, -1.0, 0);
    magLower.rotation.z = 0.3;
    bolterGroup.add(magLower);

    // --- POIGNÉE (Grip) ---
    const grip = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.9, 0.4), techMaterial);
    grip.position.set(-0.8, -0.8, 0);
    grip.rotation.z = -0.3;
    bolterGroup.add(grip);

    // --- DÉTAILS DE "VENTILATION" ---
    // Ajout de petits cylindres sur le côté pour simuler les évents thermiques
    for(let i=0; i<3; i++) {
        const vent = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.65, 8), innerMaterial);
        vent.rotation.x = Math.PI / 2;
        vent.position.set(0.6 + (i*0.3), 0.3, 0);
        bolterGroup.add(vent);
    }

    // Ajout du groupe complet à la scène
    scene.add(bolterGroup);
    
    // Position de la caméra (un peu plus reculée et élevée pour bien voir l'objet)
    camera.position.z = 5;
    camera.position.y = 0.5;
    camera.lookAt(0, 0, 0);

    // 4. BOUCLE D'ANIMATION
    function animate() {
        requestAnimationFrame(animate);
        
        // Rotation automatique : lent sur l'axe Y, léger basculement sur X
        bolterGroup.rotation.y += 0.005;
        bolterGroup.rotation.x = Math.sin(Date.now() * 0.001) * 0.1;
        
        renderer.render(scene, camera);
    }
    animate();

    // Gestion du redimensionnement de la fenêtre
    window.addEventListener('resize', () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    });
});