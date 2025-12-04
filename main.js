// Importamos las librerías necesarias de Electron
const { app, BrowserWindow } = require('electron');
const path = require('path');

// Variable para guardar la ventana principal
let mainWindow;

// Función que crea la ventana principal del juego
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    minWidth: 800,
    minHeight: 600,
    icon: path.join(__dirname, 'icon.png'),
    webPreferences: {
      // Deshabilitamos integración de Node para seguridad
      nodeIntegration: false,
      // Aislamos el contexto para que sea más seguro
      contextIsolation: true,
      // Deshabilitamos módulos remotos
      enableRemoteModule: false
    }
  });

  // Cargamos el archivo HTML principal del juego
  mainWindow.loadFile('space-math.html');

  // Cuando se cierre la ventana, limpiamos la referencia
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// Cuando la app está lista, creamos la ventana
app.on('ready', createWindow);

// Si se cierran todas las ventanas, salimos de la app (excepto en macOS)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// Si vuelven a clickear el icono en macOS, reabrimos la ventana
app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
