// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    shutdown: () => ipcRenderer.send('shutdown'),
    restart: () => ipcRenderer.send('restart'),
    sheep: () => ipcRenderer.send('sheep'),
    bitDownload: (bitTorrent: string) => ipcRenderer.send('bitDownload', bitTorrent)
})
