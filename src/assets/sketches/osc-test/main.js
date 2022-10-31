const websocketUrl = "ws://127.0.0.1:6050";

let socket = new WebSocket(websocketUrl);

socket.onopen = function (e) {
  console.log("[open] Connection established");
  console.log("Sending to server");
  socket.send("My name is John");
};

socket.onmessage = function (event) {
  console.log("event: ", event.data);
};

socket.onclose = function (event) {
  if (event.wasClean) {
    console.log(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
  } else {
    // e.g. server process killed or network down
    // event.code is usually 1006 in this case
    console.log("[close] Connection died");
  }
};

socket.onerror = function (error) {
  alert(`[error]`);
};
