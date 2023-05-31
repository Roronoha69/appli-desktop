const electron = require('electron');
const {app} = electron;

let mainWindow;
app.on("ready", ()=> {
    mainWindow = new electron.BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });
    mainWindow.loadURL(`${app.getAppPath()}\\build\\index.html`);
});
