var html = '';
var red;
var green;
var blue;
var rgbColor;

function randomRGB() {
 return Math.floor(Math.random() * 256); 
}

for (var colorCount = 0; colorCount < 15; colorCount += 1){
red = randomRGB();
green = randomRGB();
blue = randomRGB();
rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
html += '<div style="background-color:' + rgbColor + '"></div>';
}

document.write(html);