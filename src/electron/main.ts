import { app, BrowserWindow, ipcMain } from "electron";
import path from "path";
import { isDev } from "./utils.js";
import { getPreloadPath } from "./pathResolver.js";
import { getStaticData, pollResources } from "./resourceManager.js";

app.on("ready", () => {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      preload: getPreloadPath(),
    },
  });
  if (isDev()) {
    mainWindow.loadURL("http://localhost:3000");
  } else {
    mainWindow.loadFile(path.join(app.getAppPath() + "/dist-react/index.html"));
  }

  pollResources(mainWindow);

  handleGetStaticData(() => {
    return getStaticData();
  });
});

function handleGetStaticData(callback: () => StatisticsData) {
  // ipcMain.handle is used for communication in which we expects some data
  ipcMain.handle("getStaticData", callback);
}
