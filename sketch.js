var num = 0;
//var numbers = new Array(0,0,0);
var total;

var numReadings = 4;

function setup() {
    createCanvas(640, 480);
    var numbers = new Array(random(900,1000),random(0,1000),random(0,100));
    text(numbers, 10, 30);
    isort(numbers, 3);
    text(numbers, 10, 60);
    //printArray(numbers, sizeof(numbers)); 
}

function draw() {
    //background(255);
    //numbers = random(0,100);
    //textSize(14);
    //text(numbers, 10, 30);
}

function isort(a, n) {
    for (var i = 1; i < n; ++i) {
        var j = a[i];
        var k;
        for (k = i - 1; (k >= 0) && (j < a[k]); k--) {
            a[k + 1] = a[k];
        }
        a[k + 1] = j;
    }
}

//void loop() {
//  // subtract the last reading:
//  total = total - readings[readIndex];
//  // read from the sensor:
//  //readings[readIndex] = analogRead(inputPin);
//  readings[readIndex] = random(0,1024);
//  // add the reading to the total:
//  total = total + readings[readIndex];
//  // advance to the next position in the array:
//  readIndex = readIndex + 1;
//
//  // if we're at the end of the array...
//  if (readIndex >= numReadings) {
//    // ...wrap around to the beginning:
//    readIndex = 0;
//  }
//
//  // calculate the average:
//  average = total / numReadings;
//  // send it to the computer as ASCII digits
//  //Serial.println(average);
//  print(average);
//  //delay(1); // delay in between reads for stability
//}