var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();

function onMouseMove(e) {
	// calculate mouse position in normalized device coordinates
	// (-1 to +1) for both components
	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
}
console.log(mouse);

window.addEventListener( "mousemove", onMouseMove, false );
window.requestAnimationFrame(render);




