const electron = require('electron')
// Module to control application life.
const {app, ipcMain, Menu} = require('electron')
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

const mobilecaddy = require('mobilecaddy-electron')

const isDev = require('electron-is-dev');
require('electron-debug')();

/**
 * ----------------------------------------------------------------------------
 * M E N U
 * ----------------------------------------------------------------------------
 */

const template = [
  {
    label: 'File',
    submenu: [
      {
        role: 'quit'
      },
      {
        type: 'separator'
      },
      {
      label: 'Clear cache and Quit',
        click (item, focusedWindow) {
          clearCacheAndQuit();
        }
      }
    ]
  }
];

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)


/**
 * @function clearCacheAndQuit
 * @description Clears all applicaition data and quits the app
 */
function clearCacheAndQuit(){
  mobilecaddy.logout();
  // var appDataPath = app.getPath('userData');
  // console.log('appDataPath', appDataPath);
  // if (appDataPath.indexOf('mobilecaddy-desktop') > 0) {
  //   app.on('will-quit', (event) => {
  //     console.log("will-quit");
  //     event.preventDefault();
  //     var appDataPath = app.getPath('userData');
  //     let rimraf = require('rimraf');
  //     console.log('appDataPath', appDataPath);
  //     console.log('rimraf');
  //     rimraf(appDataPath, function(e){
  //       console.log("will-quit rimraf", e);
  //       app.exit();
  //     });
  //   })

  //   app.on('quit', () => {
  //     console.log("quit");

  //   })

  //   console.log("going to quit");
  //   app.quit();
  // } else {
  //   // console.log("Did NOT delete app cache");
  // }
}