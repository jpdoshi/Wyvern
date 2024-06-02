const { ipcRenderer } = require("electron");
const path = require("path");

const ipc = ipcRenderer;

const closeApp = () => {
  ipc.send("closeApp");
};

const minimizeApp = () => {
  ipc.send("minimizeApp");
};

const maximizeApp = () => {
  ipc.send("maximizeApp");
};

document.getElementById("webView").src = path.join(__dirname, "/home.html");
