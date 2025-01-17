const electron = require("electron");

electron.contextBridge.exposeInMainWorld("electron", {
  subscribeStatistics: (callback) => {
    // .on is used for communication in which we does not expects any data
    electron.ipcRenderer.on("stats", (_, data) => {
      callback(data);
    });
  },

  getStaticData: () => {
    // .invoke is used for communication in which we expects some data
    return electron.ipcRenderer.invoke("getStaticData");
  },
} satisfies Window["electron"]);
