import { app, BrowserWindow } from "electron";
import path from "path";

app.on("ready", () => {
  const createWindow = new BrowserWindow({});
  createWindow.loadFile(path.join(app.getAppPath() + "/dist-react/index.html"));
});
