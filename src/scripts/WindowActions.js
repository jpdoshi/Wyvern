const { ipcRenderer } = require("electron");
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
