const websocketServer = "ws://127.0.0.1:6050";

const oscPort = new osc.WebSocketPort({
  url: websocketServer,
  metadata: true,
});
const viewPortWidth = window.innerWidth;
const viewPortHeight = window.innerHeight;

console.log("screen: ", viewPortWidth, viewPortHeight);

oscPort.open();

oscPort.on("message", function (msg) {
  if (msg.args[1]) {
    const trackedDevice = {
      id: msg.args[0].value,
      identify: msg.args[1].value,
      x: msg.args[2].value,
      y: msg.args[3].value,
      rot: msg.args[4].value,
      intens: msg.args[5].value,
    };

    const xPos = trackedDevice.x * viewPortWidth;
    const yPos = trackedDevice.y * viewPortHeight;
    console.log("position: ", xPos, yPos);

    if (msg.address === "/tracker/add") {
      wsPort.emit("addDevice", trackedDevice);
    } else if (msg.address === "/tracker/update") {
      wsPort.emit("updateDevice", trackedDevice);
    } else if (msg.address === "/tracker/remove") {
      wsPort.emit("removeDevice", trackedDevice);
    }
  }
});
