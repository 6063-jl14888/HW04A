function setup() {
  createCanvas(windowWidth, windowHeight);
}

let yPeriodSec = 2;

let periodSec = 4;

let x3PeriodSec = 2;
let y3PeriodSec = 2;
let rPeriodSec = 1

let x4PeriodSec = 2;
let y4PeriodSec = 2;
let r4PeriodSec = 1


function draw() {
  background(0);

  noStroke()

  let hoursNow = hour();
  let hourDiam = map(hoursNow, 0, 23, 20, width);
  let blueVal = map(hoursNow, 100, 200, 128, 225);
  fill(35, blueVal, 155);
  ellipse(width / 2, height/2, hourDiam);



  fill(210,138, 97)
  let x = width / 2;

  let yAmplitude = height/2;
  let yOffset = height/4;

  let yPeriod = yPeriodSec * getTargetFrameRate();
  let y = yAmplitude * (sin((TWO_PI / yPeriod) * frameCount) + 1) * 0.5;

  ellipse(x, y + yOffset, 160);



  fill(196,252, 176)
  let amplitude = width / 2;
  let xOffset = width / 4;
  
  let period = periodSec * getTargetFrameRate();
  let x2 = amplitude * (sin((TWO_PI / period) * frameCount) + 1) * 0.5;
  
  let y2 = height / 2;
  
  ellipse(x2 + xOffset, y2, 80);



  fill(219, 176, 252)
  let x3Amplitude = width / 2;
  let x3Offset = width / 4;

  let x3Period = x3PeriodSec * 60 * getTargetFrameRate();
  let x3 = x3Amplitude * (sin((TWO_PI / x3Period) * frameCount) + 1) * 0.5;


  let y3Amplitude = height/2;
  let y3Offset = height/4;

  let y3Period = y3PeriodSec * 60 * getTargetFrameRate();
  let y3 = y3Amplitude * (cos((TWO_PI / y3Period) * frameCount) + 1) * 0.5;

  let rAmplitude = 25;
  let rOffset = 10;

  let rPeriod = rPeriodSec * getTargetFrameRate();
  let r = rAmplitude * (cos((TWO_PI / rPeriod) * frameCount) + 1) * 0.5;

  ellipse(x3 + x3Offset, y3 + y3Offset, r + rOffset+50);



  fill(176,225, 252)
  let x4Amplitude = width / 2;
  let x4Offset = width / 4;

  let x4Period = x4PeriodSec * 60 * getTargetFrameRate();
  let x4 = x4Amplitude * (cos((TWO_PI / x4Period) * frameCount) + 1) * 0.5;


  let y4Amplitude = height/2;
  let y4Offset = height/4;

  let y4Period = y4PeriodSec * 60 * getTargetFrameRate();
  let y4 = y4Amplitude * (sin((TWO_PI / y4Period) * frameCount) + 1) * 0.5;

  let r4Amplitude = 25;
  let r4Offset = 10;

  let r4Period = r4PeriodSec * getTargetFrameRate();
  let r4 = r4Amplitude * (cos((TWO_PI / r4Period) * frameCount) + 1) * 0.5;

  ellipse(x4 + x4Offset, y4 + y4Offset, r4 + r4Offset);

}
