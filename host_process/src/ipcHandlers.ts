import { ipcMain } from 'electron'
const { exec } = require('child_process');

// 关机
ipcMain.on('shutdown', (event, message) => {
    try {
        return;
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