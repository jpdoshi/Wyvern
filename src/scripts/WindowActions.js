const { ipcRenderer } = require("electron");
const path = require("path");

const ipc = ipcRenderer;

document.getElementsByClassName("webView")[0].src = path.join(
  __dirname,
  "/home.html"
);

const closeApp = () => {
  ipc.send("closeApp");
};

const minimizeApp = () => {
  ipc.send("minimizeApp");
};

const maximizeApp = () => {
  ipc.send("maximizeApp");
};

ipc.on("enterFullScreen", () => {
  const titleBar = document.getElementsByClassName("title-bar")[0];
  const webViews = document.getElementsByClassName("webView");

  titleBar.style.transform = "scaleY(0)";
  for (let wv of webViews) {
    wv.style.paddingTop = "0px";
  }
});

ipc.on("exitFullScreen", () => {
  const titleBar = document.getElementsByClassName("title-bar")[0];
  const webViews = document.getElementsByClassName("webView");

  titleBar.style.transform = "scaleY(1)";
  for (let wv of webViews) {
    wv.style.paddingTop = "32px";
  }
});
