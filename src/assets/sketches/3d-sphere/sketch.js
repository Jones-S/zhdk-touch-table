function preload() {
  earthTexture = loadImage("images/earth-texture-night.jpg");
  cloudTexture = loadImage("images/cloud-texture.png");
  Roboto = loadFont("roboto.ttf");
}

const cloudOffset = 12; // distance from globe to clouds
let radius = 300;
let rotation = 1;
let rotationStep = 0;
const pointOfInterestSize = 3;

const zoomInButton = document.querySelector('[data-js="zoom-in"]');
const zoomOutButton = document.querySelector('[data-js="zoom-out"]');
console.log("zoomInButton: ", zoomInButton);

zoomInButton.addEventListener("click", zoomIn);
zoomOutButton.addEventListener("click", zoomOut);

function drawEarth(earthRadius) {
  // earth rotation
  rotateY(rotation);
  rotation += rotationStep;

  drawAxes();

  // globe
  push();
  fill(255, 255, 255, 30);
  // stroke(0, 0, 0, 10);
  texture(earthTexture);
  sphere(earthRadius, 20, 20);
  pop();
}

function drawAxes() {
  const len = radius + 100;
  push();
  stroke("white");
  fill("white");
  text("(0/0/0)", 0, 0);

  stroke("red");
  line(0, 0, 0, len, 0, 0); // X axis
  text("x", len + 10, 0);

  stroke("green");
  line(0, 0, 0, 0, len, 0);
  text("y", 0, len + 10);

  stroke("yellow");
  line(0, 0, 0, 0, 0, len);
  pop();

  push();
  rotateX(radians(90));
  translate(0, len);
  rotateX(radians(-90));
  text("z", 10, 0);
  pop();
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);
  textFont(Roboto);
  drawEarth(radius);
}

function draw() {
  background(0);
  noStroke(); // hides the spheres frame/skeleton
  drawEarth(radius);

  rotationStep = map(mouseX, 0, window.innerWidth, -0.07, 0.07);

  // we need to regenerate this array each draw,
  // because the radius of the sphere might change depending on zoom level

  /* restrictions:
   * phi: 0–360° in radians (= latitude)
   * theta: 0 - 180° in radians (= longitude)
   */
  const pointsOfInterest = [
    {
      phi: radians(0),
      theta: radians(100),
      radius,
      color: "red",
    },
    {
      phi: radians(0),
      theta: radians(0),
      radius,
      color: "yellow",
    },
    {
      phi: radians(45),
      theta: radians(70),
      radius,
      color: "orange",
    },
    {
      phi: radians(90),
      theta: radians(90),
      radius,
      color: "blue",
    },
    {
      phi: radians(350),
      theta: radians(25),
      radius,
      color: "grey",
    },
  ];

  for (let index = 0; index < pointsOfInterest.length; index++) {
    const point = pointsOfInterest[index];
    const vector = pointOnSphere({
      r: point.radius,
      theta: point.theta,
      phi: point.phi,
    });

    push();
    translate(vector.x, vector.y, vector.z);
    fill(point.color);
    sphere(pointOfInterestSize);
    pop();
  }
}

// because the p5 coordinate system is not standard, we have different x,y and z
// in comparison to textbook spherical coordinate system to cartesian coordinate system conversion
function pointOnSphere({ r, theta, phi }) {
  const x = r * cos(phi) * sin(theta);
  const z = r * sin(theta) * sin(phi);
  const y = -(r * cos(theta)); // because y axis is pointing down we need the negative value to match it with theta
  return createVector(x, y, z);
}

function zoomIn() {
  radius = radius + 30;
}

function zoomOut() {
  radius = radius - 30;
}
