const { ipcRenderer } = require("electron");
const path = require("path");

const ipc = ipcRenderer;

document.getElementsByClassName("webView")[0].src = path.join(
  __dirname,
  "/home.html"
);

document
  .getElementsByClassName("webView")[0]
  .addEventListener("did-navigate", (event) => {
    const url = event.url;
    if (url.startsWith("https://")) {
      document.getElementById("url-text").innerText = url.replace(
        "https://",
        ""
      );
    }
    if (url.startsWith("http://")) {
      document.getElementById("url-text").innerText = url.replace(
        "http://",
        ""
      );
    }
  });

const closeApp = () => {
  ipc.send("closeApp");
};

const minimizeApp = () => {
  ipc.send("minimizeApp");
};

const maximizeApp = () => {
  ipc.send("maximizeApp");
};

const navigateBack = () => {
  document.getElementsByClassName("webView")[0].goBack();
};

const navigateForward = () => {
  document.getElementsByClassName("webView")[0].goForward();
};

const reloadPage = () => {
  document.getElementsByClassName("webView")[0].reload();
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
