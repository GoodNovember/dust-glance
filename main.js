const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

const {CUSTOM_ELECTRON_URL} = process.env

// if(CUSTOM_ELECTRON_URL){
  require('electron-reload')(path.join(__dirname,"build"))
// }

let win

function createWindow () {
  win = new BrowserWindow({width: 800, height: 600})

  const GeneratedUrl = path.join(__dirname, 'build', 'index.html')
  
  const theUrl = CUSTOM_ELECTRON_URL || GeneratedUrl

  win.loadURL(url.format({
    pathname: theUrl,
    protocol: 'file:',
    slashes: true
  }))

  win.webContents.openDevTools()

  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})