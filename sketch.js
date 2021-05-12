var hr,min,sec

function setup() {
  angleMode(DEGREES)
  createCanvas(2000,1020);
  
}

function draw() {
  background(0,0,0);
 translate(1000,510)
  rotate (-90)
  hr = hour()
  min = minute()
  sec = second()

  secAngle = map(sec,0,60,0,360)
  push ()
  rotate (secAngle)
  strokeWeight (5)
  stroke ("Blue")
  line(0,0,400,0)
  pop ()

  minAngle = map(min,0,60,0,360)
  push ()
  rotate (minAngle)
  strokeWeight (6)
  stroke ("white")
  line(0,0,325,0)
  pop ()

  hrAngle = map(hr%12,0,12,0,360) 
  push ()
  rotate (hrAngle)
  strokeWeight (8)
  stroke ("Yellow")
  line(0,0,250,0)
  pop ()

  noFill ()
  stroke ("blue")
  strokeWeight(7)
  arc (0,0,900,900,0,secAngle)

  noFill ()
  stroke ("white")
  strokeWeight(7)
  arc (0,0,880,880,0,minAngle)

  noFill ()
  stroke ("yellow")
  strokeWeight(7)
  arc (0,0,860,860,0,hrAngle)
  
}