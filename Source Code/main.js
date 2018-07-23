const electron = require('electron');
const url = require('url');
const path = require('path');
const {app,BrowserWindow,Menu} = electron;

let mainWindow;

//Listen to be app to be ready

app.on('ready',function(){
	//create new window
	mainWindow = new BrowserWindow({width: 1800,height: 1000,});
	mainWindow.setFullScreen(false);
	//Load HTML file in window
	mainWindow.loadURL(url.format({
		pathname: path.join(__dirname,'mainWindow.html'),
		protocol: 'file:',
		slashes: true
	})); //file://dirname/mainWindow.html


});


