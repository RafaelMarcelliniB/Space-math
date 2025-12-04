# Space Math - Juego Educativo de Matemáticas

Un juego interactivo educativo basado en Electron que combina acción y matemáticas. Los jugadores deben responder problemas matemáticos rápidamente mientras evitan enemigos en el espacio.

## 📋 Tabla de Contenidos

- [Instalación y Compilación](#instalación-y-compilación)
  - [Linux](#linux)
  - [Windows](#windows)
- [Manual de Uso](#manual-de-uso)
- [Manual de Funcionamiento Detallado](#manual-de-funcionamiento-detallado)
- [Requisitos del Sistema](#requisitos-del-sistema)
- [Estructura del Proyecto](#estructura-del-proyecto)

---

## 🚀 Instalación y Compilación

### Requisitos Previos

Antes de compilar, asegúrate de tener instalados:

- **Node.js** (versión 14.0 o superior)
- **npm** (incluido con Node.js)

Verifica tu versión:
```bash
node --version
npm --version
```

### Linux

#### Paso 1: Preparar el entorno

```bash
# Navega a la carpeta del proyecto
cd "/home/usuario/ruta/al/proyecto"

# Instala las dependencias
npm install
```

#### Paso 2: Compilar la aplicación

**Opción A - Crear AppImage (recomendado - ejecutable portable):**
```bash
npm run build:linux
```

**Opción B - Crear paquete Debian (.deb):**
```bash
npm run build:linux
```
Esto generará ambos formatos automáticamente.

#### Paso 3: Ejecutar la aplicación

Los archivos compilados estarán en la carpeta `dist/`:

**Usar AppImage:**
```bash
# Dale permisos de ejecución
chmod +x dist/Space\ Math-*.AppImage

# Ejecuta la aplicación
./dist/Space\ Math-*.AppImage
```

**Instalar desde .deb (opcional):**
```bash
# Instala el paquete
sudo dpkg -i dist/space-math_*.deb

# Luego puedes ejecutar desde terminal
space-math

# O buscar "Space Math" en el menú de aplicaciones
```

#### Paso 4: Crear acceso directo en el escritorio (opcional)

```bash
# Copia el ejecutable a una ubicación accesible
cp dist/Space\ Math-*.AppImage ~/Space\ Math.AppImage

# Crea un archivo .desktop
cat > ~/.local/share/applications/space-math.desktop << 'EOF'
[Desktop Entry]
Version=1.0
Type=Application
Name=Space Math
Exec=~/Space Math.AppImage
Icon=application-x-executable
Categories=Education;Game;
EOF

# Actualiza la base de datos de aplicaciones
update-desktop-database ~/.local/share/applications/
```

### Windows

#### Paso 1: Preparar el entorno

```cmd
# Abre PowerShell o Símbolo del Sistema
# Navega a la carpeta del proyecto
cd "C:\ruta\al\proyecto"

# Instala las dependencias
npm install
```

#### Paso 2: Compilar la aplicación

```cmd
# Crear ejecutables de Windows
npm run build:windows
```

Esto generará:
- **Space Math Setup 1.0.0.exe** - Instalador interactivo
- **Space Math 1.0.0.exe** - Ejecutable portable

#### Paso 3: Distribuir la aplicación

Los archivos estarán en `dist/`:

**Instalador (recomendado para usuarios finales):**
```
dist/Space Math Setup 1.0.0.exe
```
Ejecuta este archivo y sigue el instalador.

**Ejecutable Portable:**
```
dist/Space Math 1.0.0.exe
```
No requiere instalación, ejecutable directo.

#### Paso 4: Crear acceso directo (opcional)

1. Haz clic derecho en `Space Math 1.0.0.exe`
2. Selecciona "Enviar a" → "Escritorio (crear acceso directo)"
3. Ahora tendrás un icono en el escritorio

### Compilar para ambas plataformas

Si deseas crear ejecutables para Windows y Linux desde una máquina:

```bash
npm run build:all
```

---

## 📖 Manual de Uso

### Inicio de la Aplicación

1. **Linux:** Ejecuta el AppImage o instala desde .deb
2. **Windows:** Ejecuta el instalador o el .exe portable

### Pantalla Principal

Al abrir la aplicación verás:
- **Título del juego** en la parte central
- **Botones de acción:**
  - "Jugar" - Inicia una nueva partida
  - "Instrucciones" - Ver cómo jugar
  - "Créditos" - Ver información de autores

### Cómo Jugar

1. **Haz clic en "Jugar"** para comenzar una partida
2. En la pantalla verás:
   - **Problema matemático** en la parte superior (ej: 5 + 3 = ?)
   - **Tu nave** en la parte inferior (cuadrado verde)
   - **Opciones de respuesta** cayendo del cielo (círculos con números)
   - **Enemigos** que también caen
   - **HUD (información de juego):** Puntuación en la esquina superior izquierda

3. **Controles:**
   - **Flecha izquierda ←** - Mueve la nave hacia la izquierda
   - **Flecha derecha →** - Mueve la nave hacia la derecha
   - **Clic en las respuestas** - Selecciona tu respuesta
   - **Clic en opciones de respuesta que caen** - Valida tu respuesta

4. **Mecánica del juego:**
   - Colecta la **respuesta correcta (círculo blanco)**
   - Evita los **círculos rojos (respuestas incorrectas)**
   - Evita los **enemigos (símbolo X rojos)**
   - Por cada respuesta correcta: **+10 puntos**
   - Por cada error: **-5 puntos**

5. **Fin del juego:**
   - Pierdes cuando tu salud llega a 0
   - Presiona cualquier tecla para volver al menú
   - Presiona ESC para salir

### Consejos para Jugar

- **Calcula rápido** - Tienes pocos segundos para responder
- **Posiciónate bien** - Anticipa dónde caerá la respuesta correcta
- **Esquiva enemigos** - No todos los círculos son respuestas válidas
- **Mantén el ritmo** - Cada respuesta correcta suma puntos bonus

---

## 🔧 Manual de Funcionamiento Detallado

### Arquitectura General

```
┌─────────────────────────────────────────┐
│         Space Math (Electron)           │
├─────────────────────────────────────────┤
│ main.js - Proceso Principal             │
│ └─ Inicializa Electron                  │
│ └─ Carga space-math.html                │
│                                         │
│ space-math.html - Interfaz HTML         │
│ └─ Canvas para gráficos del juego       │
│ └─ HUD e interfaz de usuario            │
│                                         │
│ JavaScript incorporado - Lógica del juego
│ └─ Motor de física                      │
│ └─ Generador de problemas               │
│ └─ Sistema de colisiones                │
│ └─ Gestor de puntuación                 │
└─────────────────────────────────────────┘
```

### Componentes Principales

#### 1. **main.js - Proceso Principal de Electron**

```javascript
// Características:
- Crea la ventana de la aplicación (1280x720px)
- Configura seguridad (contextIsolation, nodeIntegration deshabilitado)
- Carga el archivo HTML principal
- Gestiona eventos del ciclo de vida de la aplicación
- Configura el icono de la aplicación
```

**Eventos principales:**
- `app.on('ready')` - Crea la ventana cuando la app está lista
- `window-all-closed` - Cierra la app cuando se cierran todas las ventanas
- `activate` - Abre la ventana si está cerrada (macOS)

#### 2. **space-math.html - Interfaz del Juego**

**Estructura:**
```html
<body>
  <div id="game-container">
    <!-- Canvas para el juego -->
    <canvas id="gameCanvas"></canvas>
    <!-- Menú principal -->
    <div id="main-menu">
      <button id="play-btn">Jugar</button>
      <button id="instructions-btn">Instrucciones</button>
      <button id="credits-btn">Créditos</button>
    </div>
    <!-- HUD durante el juego -->
    <div id="hud">
      <div class="score">Puntuación: <span id="score">0</span></div>
      <div class="level">Nivel: <span id="level">1</span></div>
    </div>
  </div>
</body>
```

**Estilos:**
- `styles.css` - Estilos principales del juego
- `nav.css` - Estilos de navegación y menús

#### 3. **Mecánica del Juego**

**Sistema de Objetos:**

- **Nave del Jugador**
  - Posición: Centro inferior
  - Control: Teclado (flechas izquierda/derecha)
  - Ancho: 40px
  - Color: Verde (#00ff00)

- **Problemas Matemáticos**
  - Se generan aleatoriamente
  - Rango: Sumas y restas (números 0-20)
  - Durabilidad: 1 problema por turno

- **Opciones de Respuesta**
  - Caen continuamente desde arriba
  - Física: Velocidad constante hacia abajo
  - Tipos:
    - **Correcta** (blanca) - +10 puntos
    - **Incorrecta** (roja) - -5 puntos
  - Animación: Desvanecimiento al caer

- **Enemigos**
  - Símbolo X rojo
  - Caen como las respuestas
  - Contacto: Reduce salud
  - Velocidad: Variable aleatoria

**Sistema de Colisiones:**
```
Si jugador toca:
├─ Respuesta correcta → +10 puntos
├─ Respuesta incorrecta → -5 puntos
├─ Enemigo → -1 salud
└─ Borde pantalla → Se para
```

**Sistema de Niveles:**
- Nivel 1-5: Dificultad progresiva
- Aumenta velocidad de objetos cada nivel
- Aumenta cantidad de enemigos

#### 4. **Flujo de Juego**

```
Inicio
  ↓
[Menú Principal]
  ↓
[Seleccionar "Jugar"]
  ↓
[Inicializar Juego]
  ├─ Salud = 3
  ├─ Puntuación = 0
  ├─ Nivel = 1
  └─ Generar primer problema
  ↓
[Bucle de Juego] (Se ejecuta 60 veces por segundo)
  ├─ Procesar entrada del teclado
  ├─ Actualizar posición de la nave
  ├─ Generar nuevas respuestas/enemigos
  ├─ Detectar colisiones
  ├─ Actualizar puntuación
  ├─ Dibujar todos los objetos
  └─ Verificar condición de derrota
  ↓
[Salud = 0?]
  ├─ SÍ → [Pantalla de Fin de Juego]
  └─ NO → [Volver a Bucle de Juego]
  ↓
[Pantalla Final]
  ├─ Mostrar puntuación final
  ├─ Mostrar nivel alcanzado
  └─ Botón "Volver al menú"
```

#### 5. **Sistema de Puntuación**

| Acción | Puntos |
|--------|--------|
| Respuesta correcta | +10 |
| Respuesta incorrecta | -5 |
| Esquivar enemigo | +1 |
| Perder salud | -1 (por daño) |
| Subir de nivel | +50 |

#### 6. **Eventos del Teclado**

```javascript
// Entrada de usuario
KeyDown:
  ├─ ArrowLeft → Mover nave izquierda
  ├─ ArrowRight → Mover nave derecha
  ├─ Enter → Confirmar en menús
  └─ Escape → Salir/Volver

Mouse Click:
  ├─ En respuesta que cae → Seleccionar
  └─ En botones de menú → Navegar
```

#### 7. **Renderizado (60 FPS)**

```javascript
requestAnimationFrame(gameLoop) {
  clearCanvas()
  updateGame()
  renderAll()
  → 1000ms / 60fps = ~16.67ms por frame
}
```

**Orden de renderizado:**
1. Fondo de gradiente
2. Objetos que caen (respuestas, enemigos)
3. Nave del jugador
4. HUD (puntuación, nivel, salud)
5. Textos y efectos especiales

#### 8. **Generador de Problemas**

```javascript
Algoritmo:
1. Selecciona operación aleatoria (+, -)
2. Selecciona dos números (0-20)
3. Calcula respuesta correcta
4. Genera 3 respuestas incorrectas
5. Mezcla todas las opciones
6. Muestra en pantalla
```

**Ejemplo:**
```
5 + 3 = ?
Opciones: [8, 7, 9, 6]
Respuesta correcta: 8
```

#### 9. **Detección de Colisiones**

```javascript
Para cada objeto que cae:
  Si (jugadorX - 20 < objetoX < jugadorX + 20 &&
      jugadorY - 20 < objetoY < jugadorY + 20) {
    
    Si objeto es respuesta correcta:
      puntuación += 10
    Si objeto es respuesta incorrecta:
      puntuación -= 5
    Si objeto es enemigo:
      salud -= 1
    
    Eliminar objeto
  }
```

#### 10. **Gráficos y Assets**

Archivos de imagen:
- `icon.png` - Icono de la aplicación
- `githubinverseicon.jpg` - Icono de GitHub en créditos
- `youtubeinverseicon.jpg` - Icono de YouTube en créditos

---

## 📊 Requisitos del Sistema

### Mínimos
- **CPU:** Intel/AMD dual-core 2.0 GHz
- **RAM:** 512 MB
- **Almacenamiento:** 150 MB
- **SO:** Windows 7+, Ubuntu 14.04+, o similar

### Recomendados
- **CPU:** Intel/AMD quad-core 2.5 GHz
- **RAM:** 2 GB
- **Almacenamiento:** 300 MB SSD
- **SO:** Windows 10+, Ubuntu 18.04+, o similar

---

## 📁 Estructura del Proyecto

```
Space-Math/
├── main.js                      # Proceso principal Electron
├── space-math.html              # Interfaz principal del juego
├── styles.css                   # Estilos del juego
├── nav.css                      # Estilos de navegación
├── package.json                 # Configuración del proyecto
├── package-lock.json            # Dependencias bloqueadas
├── README.md                    # Este archivo
├── COMPILACION.md               # Guía alternativa de compilación
├── icon.png                     # Icono de la aplicación
├── githubinverseicon.jpg        # Icono de GitHub
├── youtubeinverseicon.jpg       # Icono de YouTube
├── node_modules/                # Dependencias (se crea con npm install)
└── dist/                        # Ejecutables compilados (se crea con npm run build)
    ├── Space Math-1.0.0.AppImage    # Para Linux
    ├── space-math_1.0.0_amd64.deb   # Para Linux (Debian)
    ├── Space Math Setup 1.0.0.exe   # Para Windows (instalador)
    └── Space Math 1.0.0.exe         # Para Windows (portable)
```

---

## 🔄 Ciclo de Desarrollo

Si deseas modificar el código:

1. **Edita los archivos:**
   - `space-math.html` - Interfaz
   - `styles.css` o `nav.css` - Apariencia
   - `main.js` - Comportamiento de Electron

2. **Prueba en desarrollo:**
   ```bash
   npm start
   ```

3. **Compila cuando termines:**
   ```bash
   npm run build:linux    # Para Linux
   npm run build:windows  # Para Windows
   npm run build:all      # Para ambas
   ```

---

## 📝 Notas Importantes

- Los ejecutables compilados son independientes y no requieren Node.js instalado
- El instalador de Windows puede mostrar advertencias de Windows Defender (es normal)
- El AppImage de Linux es portable y puede ejecutarse desde cualquier ubicación
- Los controles se adaptan automáticamente a pantallas de diferentes tamaños

---

## 📄 Licencia

Este proyecto está bajo la **Licencia MIT** - un software libre y de código abierto. 

Puedes:
- ✅ Usar comercialmente
- ✅ Modificar el código
- ✅ Distribuir el software
- ✅ Usar privativamente

Solo necesitas:
- ⚠️ Incluir la licencia y la declaración de derechos de autor
- ⚠️ Declarar cambios significativos

Ver archivo [LICENSE](LICENSE) para más detalles.

---

## 🤝 Contribuyendo

¿Quieres ayudar a mejorar Space Math? ¡Tu contribución es bienvenida!

Consulta [CONTRIBUTING.md](CONTRIBUTING.md) para aprender cómo:
- Reportar bugs
- Sugerir mejoras
- Enviar Pull Requests
- Mantener el código limpio

**Nota:** Al contribuir, aceptas nuestro [Código de Conducta](CODE_OF_CONDUCT.md). Esperamos un ambiente respetuoso y acogedor para todos.

---

## 📖 Documentación Adicional

- [Cómo Publicar en GitHub](GITHUB_SETUP.md) - Guía paso a paso para publicar tu proyecto
- [Código de Conducta](CODE_OF_CONDUCT.md) - Normas de convivencia en la comunidad
- [Licencia MIT](LICENSE) - Términos legales del proyecto

---

## 👨‍💻 Autor

**Rafael Marcellini B.**

- GitHub: [@RafaelMarcelliniB](https://github.com/RafaelMarcelliniB)
- Email: rafael@example.com

---

**Última actualización:** 3 de diciembre de 2025
