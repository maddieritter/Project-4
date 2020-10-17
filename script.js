function playSound(soundfile) {
    document.getElementById("slayer").innerHTML=
      "<embed src=\""+soundfile+"\" hidden=\"true\" autostart=\"true\" loop=\"true\" />";
};

changeImage = function() {
    var image = document.getElementById('eye');
    var blue = 'Media/blue-eye.svg';
    var red = 'Media/red-eye.svg';
   
    if (image.getAttribute('src')==blue) {
        image.setAttribute('src', red);
     } else {
        image.setAttribute('src', blue);
     }
  }

document.getElementById("eye").onmouseover = function() {mouseOver()};
document.getElementById("eye").onmouseout = function() {mouseOut()};

function mouseOver() {
  document.getElementById("eye").style.boxShadow = "#63BBD9 0px 0px 10px 5px";
}

function mouseOut() {
    document.getElementById("eye").style.boxShadow = "0px 0px 0px 0px";
  }

