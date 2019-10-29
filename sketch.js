
//this excercise is basically the same of the video tutorial + the color wheel and a input type text to collect the color name
//tried to change values and math function
// hadn't really understood the previous lesson... anyway i tried to remake this example!
//I had tried with the radio button  but it couldn't switch like the slider
var sliders = []; //array of sliders
var angle = 0;
function setup(){
noCanvas();
  for (var i = 0; i < windowWidth/5; i++){
    sliders[i] = createSlider(0, 255, 50);
}
}

function draw(){
var offset = 0;
  for (var i = 0; i < sliders.length; i++){
var x = map(tan(angle+offset), -1, 1, 0, 255);
  sliders[i].value(x);
  offset += 0.05;

}
  angle += 0.1;
}
