const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

const ipc = ipcMain;

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    icon: "./public/icon.png",
    width: 1280,
    height: 720,
    minWidth: 360,
    minHeight: 32,
    frame: false,
    titleBarOverlay: true,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true,
      contextIsolation: false,
      webviewTag: true,
    },
  });

  mainWindow.loadFile("./public/index.html");

  ipc.on("closeApp", () => {
    mainWindow.close();
  });

  ipc.on("minimizeApp", () => {
    mainWindow.minimize();
  });

  ipc.on("maximizeApp", () => {
    if (mainWindow.isMaximized()) {
      mainWindow.unmaximize();
    } else {
      mainWindow.maximize();
    }
  });
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
