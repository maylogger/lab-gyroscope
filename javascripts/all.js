var rotateBox = document.querySelector('.box');
function handleOrientation(event) {

  // var x = event.beta;
  var y = event.gamma; // [-90,90]
  // var z = event.alpha; // [0, 360]

  // Because we don't want to have the device upside down
  // We constrain the x value to the range [-90,90]
  // if ( x >  90) { x =  90; }
  // if ( x < -90) { x = -90; }

  if(window.innerHeight > window.innerWidth){
    // var rotateXdeg = -x / Math.PI;
    var rotateYdeg = -y / Math.PI;
    // var rotateZdeg = ( z > 180) ? (z - 360) : z ;
    // var rotateZdeg = z ;
    //  clickevent = mobilecheck() ? 'touchstart' : 'click';

    // var scaleYsize = 320 / Math.cos( Math.abs( x/180 * Math.PI ) ) / 320;
    var scaleXsize = 320 / Math.cos( Math.abs( y/180 * Math.PI ) ) / 320;

    rotateBox.style.webkitTransform = "rotateY(" + rotateYdeg + "deg) scaleX(" + scaleXsize + ")";
    // rotateBox.style.webkitTransform = "rotateY(" + rotateYdeg + "deg) rotateZ(" + rotateZdeg + "deg) scaleX(" + scaleXsize + ")";

    // rotateBox.style.webkitTransform = "scaleX(" + scaleSize + ")";
  }
}

window.addEventListener('deviceorientation', handleOrientation);
