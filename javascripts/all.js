function handleOrientation(event) {
  var img = document.querySelector('.img');
  var x = event.beta;  // In degree in the range [-180,180]
  var y = event.gamma; // In degree in the range [-90,90]

  // Because we don't want to have the device upside down
  // We constrain the x value to the range [-90,90]
  if ( x >  90) { x =  90; }
  if ( x < -90) { x = -90; }

  if(window.innerHeight > window.innerWidth){
    img.style.webkitTransform = "translate(" + y + "px," + x + "px)";
    img.style.MozTransform = "translate(" + y + "px," + x + "px)";
    img.style.transform = "translate(" + y + "px," + x + "px)";
  }
  if(window.innerWidth > window.innerHeight){
    img.style.webkitTransform = "translate(" + x + "px," + y + "px)";
    img.style.MozTransform = "translate(" + x + "px," + y + "px)";
    img.style.transform = "translate(" + x + "px," + y + "px)";
  }
}

window.addEventListener('deviceorientation', handleOrientation);