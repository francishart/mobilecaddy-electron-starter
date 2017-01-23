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
}