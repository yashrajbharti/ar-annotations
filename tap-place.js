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
 newElement.setAttribute('geometry', {
  primitive: ring, radiusInner: 0.9, radiusOuter: 1
}, true);
 newElement.setAttribute('material', {
  side: double, color:#0f0
}, true);

 snaptarget.appendChild(newElement)
 newElement.setAttribute('position', '0 -0.3 0')
//  newElement.setAttribute('offset', '-455 -401 2975')

 newElement.addEventListener('model-loaded', () => {
 newElement.setAttribute('visible', 'true')
})
});
