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

const handleSidebar = () => {
  const sidebar = document.getElementById("sidebar");

  if (sidebar.style.width === "0px") {
    sidebar.style.width = "200px";
  } else {
    sidebar.style.width = "0px";
  }
};

ipc.on("enterFullScreen", () => {
  const titleBar = document.getElementsByClassName("title-bar")[0];
  const browserView = document.getElementById("browser-view");
  const sidebar = document.getElementById("sidebar");

  titleBar.style.transform = "scaleY(0)";
  browserView.style.paddingTop = "0px";

  sidebar.style.width = "0px";
});

ipc.on("exitFullScreen", () => {
  const titleBar = document.getElementsByClassName("title-bar")[0];
  const browserView = document.getElementById("browser-view");

  titleBar.style.transform = "scaleY(1)";
  browserView.style.paddingTop = "32px";
});
