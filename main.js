const { app, BrowserWindow, shell } = require('electron');
const path = require('path');

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 1024,
        height: 768,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,  // Enable the remote module (useful for shell operations)
            webviewTag: true,  // Enable webview support
            sandbox: false,  // Disable sandbox for easier access to Node.js in webview
        }
    });

    mainWindow.loadFile('index.html');

    // Handle opening external links in the default browser
    mainWindow.webContents.setWindowOpenHandler(({ url }) => {
        shell.openExternal(url);
        return { action: 'deny' };  // Prevent the Electron window from handling the URL
    });

    // Additional error handling to help debug issues
    mainWindow.webContents.on('did-fail-load', (event, errorCode, errorDescription, validatedURL) => {
        console.log(`Failed to load ${validatedURL}: ${errorDescription} (${errorCode})`);
    });

    mainWindow.webContents.on('did-navigate-in-page', (event, url) => {
        console.log(`Navigated to: ${url}`);
    });
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
