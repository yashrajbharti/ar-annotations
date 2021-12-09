const sceneEl = document.querySelector('a-scene');
const faq = document.getElementById('faq')
faq.addEventListener('click', (event) => {

console.log("snap target clicked");
// Create new entity for the new object
const newElement = document.createElement('a-entity')
// The raycaster gives a location of the touch in the scene
 const touchPoint = event.detail.intersection.point
 console.log(touchPoint);
 newElement.setAttribute('position', touchPoint)
 newElement.setAttribute('visible', 'false')
 newElement.setAttribute('scale', '0.01 0.01 0.01')
 newElement.setAttribute('rotate', '0 0 90')
 newElement.setAttribute('gltf-model', '#ring')
 snaptarget.appendChild(newElement)
 newElement.setAttribute('position', '0 -0.3 0')
//  newElement.setAttribute('offset', '-455 -401 2975')

 newElement.addEventListener('model-loaded', () => {
 newElement.setAttribute('visible', 'true')
})
});
