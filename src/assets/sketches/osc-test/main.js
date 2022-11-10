function listenToTokens() {
  const { wsPort } = Osc();

  console.log("wsPort: ", wsPort);

  // receiving token data
  wsPort.on("updateDevice", (data) => {
    // data.x and data.y are values between 0–1
    const normalizedXPos = window.innerWidth * data.x;
    const normalizedYPos = window.innerHeight * data.y;

    moveSVG(normalizedXPos, normalizedYPos);
    updateText(Math.round(data.rotation));
  });
}

function drawSVG() {
  // creating an svg within the div with id #d3
  const svg = d3
    .select("#d3")
    .append("svg")
    // setting svg specific attributes for the svg tag
    .attr("width", window.innerWidth)
    .attr("height", window.innerHeight);

  // creating a <g> group tag
  const g = svg.append("g");

  // using the same svg selection from before and adding a line
  g.append("circle")
    .style("stroke", "#0022ff")
    .style("stroke-width", "3px")
    .style("fill", "transparent")
    .attr("id", "circle")
    .attr("r", 40)
    .attr("cx", window.innerWidth / 2)
    .attr("cy", window.innerHeight / 2);

  g.append("text")
    .attr("id", "rotation-text")
    .attr("font-size", "9px")
    .attr("text-anchor", "middle")
    .attr("x", window.innerWidth / 2)
    .attr("y", window.innerHeight / 2)
    .attr("fill", "#000")
    .text("0°");
}

function updateText(text) {
  const circleText = d3.select("#rotation-text").text(`${text} °`);
}

function moveSVG(x, y) {
  const svgCircle = d3
    .select("#circle")
    .transition()
    .duration(500)
    .ease(d3.easeLinear)
    .attr("cx", x)
    .attr("cy", y);

  const circleText = d3
    .select("#rotation-text")
    .transition()
    .duration(500)
    .ease(d3.easeLinear)
    .attr("x", x)
    .attr("y", y + 4);
}

drawSVG();
listenToTokens();
