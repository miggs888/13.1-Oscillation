var pos;
var inc;
var slider;
var slider2;

function setup() {
    createCanvas(500, 500);
    angleMode(DEGREES)
    slider = createSlider(1, 15, 0)
    slider2 = createSlider(1, 15, 0)

    pos2 = 0.0;
    inc2 = 7.0;

    pos = 0.0;
    inc = 3.0;
}

function draw() {
    clear();
    translate(width/2, height /2);
    var mySinVal = sin(pos);
    var mySinVal2 = sin(pos2);

    amplified = mySinVal * 60;
    amplified2 = mySinVal2 * 20;
    for (x = 0; x <= 360; x = x + 2){
        ellipse(0, amplified * 2, 40, amplified * 3, amplified2);
        strokeWeight(slider2.value());
        rotate(x);
    }
    

    pos = pos + slider.value();
    pos2 = pos2 + slider2.value();
    stroke('pink');
    fill('yellow');

}