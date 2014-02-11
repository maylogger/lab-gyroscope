var rotateBox = document.querySelector('.box');
function handleOrientation(event) {

  var y = event.gamma; // In degree in the range [-90,90]

  if(window.innerHeight > window.innerWidth){

    var rotateYdeg = -y / Math.PI;

    var scaleSize = 320 / Math.cos( Math.abs( y/180 * Math.PI ) ) / 320;
    // var scaleSize = 1;

    if ( y > 0 ) {
      // rotateBox.style.webkitTransformOrigin = "0% 50%";
    } else {
      // rotateBox.style.webkitTransformOrigin = "100% 50%";
    }

    rotateBox.style.webkitTransform = "rotateY(" + rotateYdeg + "deg) scaleX(" + scaleSize + ")";
    // rotateBox.style.webkitTransform = "scaleX(" + scaleSize + ")";
  }
}

window.addEventListener('deviceorientation', handleOrientation);
