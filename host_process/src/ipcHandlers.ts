import { ipcMain } from 'electron'
import Webtorrent from 'webtorrent';
const { exec } = require('child_process');

// 关机
ipcMain.on('shutdown', () => {
    try {
        exec("shutdown /s /t 0", (error: any, stdout: string) => {
            if (error) {
                console.error(`执行关机命令时出错: ${error.message}`);
                return;
            }
            console.log(`关机命令执行成功: ${stdout}`);
        })
    }
    catch (error) {
        console.log(error)
    }
})

// 重启
ipcMain.on('restart', () => {
    try {
        exec('shutdown /r /t 0', (error: any, stdout: string) => {
            if (error) {
                console.error(`执行系统重启命令时出错: ${error.message}`);
                return;
            }
            console.log(`系统重启命令执行成功: ${stdout}`);
        });
    } catch (error) {
        console.log(error)
    }
})

// 休眠
ipcMain.on('sheep', () => {
    try {
        exec('rundll32.exe powrprof.dll,SetSuspendState 0,1,0', (error: any, stdout: string) => {
            if (error) {
                console.error(`执行系统重启命令时出错: ${error.message}`);
                return;
            }
            console.log(`系统重启命令执行成功: ${stdout}`);
        });
    } catch (error) {
        console.log(error)
    }
})

// bitTorrent
ipcMain.on('bitDownload', (event, bitTorrent: string) => {
    try {
        const client = new Webtorrent()

        client.add(bitTorrent, (torrent) => {
            // console.log(torrent)
            const file = torrent.files.find(function (file) {
                console.log(file.name)
                return file.name.endsWith('.mp4')
            })
        })

    } catch (error) {
        console.log(error)
    }
})

