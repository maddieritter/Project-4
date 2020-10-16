function playSound(soundfile) {
    document.getElementById("slayer").innerHTML=
      "<embed src=\""+soundfile+"\" hidden=\"true\" autostart=\"true\" loop=\"true\" />";
};

// function change (index) { 
//     const links = [ 'Media/blue-eye.svg', 'Media/red-eye.svg' ]; 
//     let index = 0; const img = document.querySelector('#eye'); 
//     img.addEventListener('click', () => { index++; img.src = links[index]; }); 
// } 

var count = 5;
var image = document.getElementById('eye');
var images = ['Media/blue-eye.svg', 'Media/red-eye.svg'];
image.src = images[0];

image.onclick = function(e)
{
    if(count > 4)
        image.src = images[0];
    else (count > 5)
        image.src = images[1];

    count--;
};