# Space Math - Aplicación de Escritorio

Juego educativo de matemáticas con interfaz estilo Space Shooter.

## Requisitos Previos

- **Node.js 14+** (https://nodejs.org/)
- **npm** (viene con Node.js)

## Instalación

1. Navega al directorio del proyecto:
```bash
cd "/home/rafaelm/Documentos/sof libre/Juego-Partes-B-sicas-Cuerpo-Humano"
```

2. Instala las dependencias:
```bash
npm install
```

## Ejecución en Desarrollo

Para ejecutar la aplicación en modo desarrollo:
```bash
npm start
```

## Compilar Ejecutables

### Para Windows (.exe)
```bash
npm run build:windows
```
El archivo `.exe` se generará en la carpeta `dist/`.

### Para Linux (.AppImage y .deb)
```bash
npm run build:linux
```
Los archivos se generarán en la carpeta `dist/`.

### Para Ambas Plataformas
```bash
npm run build:all
```

## Estructura de Archivos Generados

- **Windows**: `dist/Space Math 1.0.0.exe` (instalador) y `dist/Space Math 1.0.0.exe` (portable)
- **Linux**: `dist/Space-Math-1.0.0.AppImage` y `dist/space-math_1.0.0_amd64.deb`

## Distribución

Una vez compilado, puedes:

1. **Windows**: Distribuir el `.exe` directamente. Los usuarios pueden instalarlo sin requerir Node.js.
2. **Linux**: 
   - Distribuir el `.AppImage` (ejecutable universal)
   - O el `.deb` para Debian/Ubuntu (requiere: `sudo apt install ./archivo.deb`)

## Características del Juego

- 🚀 Menú principal con estilo de videojuego
- 📊 5 niveles de dificultad (1º a 5º Primaria)
- 🪙 Sistema de monedas persistente
- ⏱️ Cronómetro y dificultad progresiva
- 💥 Mecánica de disparo de respuestas
- 📱 Interfaz responsiva

## Notas

- Los datos se guardan localmente en `localStorage` (monedas, niveles desbloqueados)
- Cada plataforma genera su propio instalador optimizado
- La aplicación no requiere conexión a internet para funcionar

---

Creado con ❤️ usando Electron
