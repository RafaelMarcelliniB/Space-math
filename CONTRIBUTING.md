# Contribuyendo a Space Math

¡Gracias por tu interés en contribuir a Space Math! Este documento te guía sobre cómo participar en el desarrollo del proyecto.

## 📋 Código de Conducta

Se espera que todos los contribuyentes traten a los demás con respeto y cortesía. No se tolera discriminación, acoso o comportamiento abusivo de ningún tipo.

## 🚀 Cómo Contribuir

### 1. **Reportar Bugs**

Si encuentras un error, por favor crea un issue describiendo:
- Qué esperas que pase
- Qué sucede realmente
- Pasos para reproducir el problema
- Tu sistema operativo y versión de Node.js

Ejemplo:
```
**Descripción:**
El juego se bloquea al seleccionar el nivel 3

**Pasos para reproducir:**
1. Inicia el juego
2. Selecciona "Nivel 3 - 3º Primaria"
3. Espera 5 segundos
4. El juego se congela

**Sistema:**
- OS: Ubuntu 20.04
- Node.js: v16.0.0
```

### 2. **Sugerir Mejoras**

¿Tienes una idea para mejorar Space Math? Comparte tu sugerencia:
- Describe la mejora detalladamente
- Explica por qué crees que es útil
- Proporciona ejemplos si es posible

Ejemplos de mejoras:
- Nuevos tipos de operaciones matemáticas
- Temas visuales diferentes
- Sistema de puntuación mejorado
- Más niveles de dificultad

### 3. **Enviar Pull Requests**

#### Antes de empezar:
1. Fork el proyecto
2. Crea una rama con un nombre descriptivo:
   ```bash
   git checkout -b feature/nueva-funcionalidad
   # o
   git checkout -b fix/correccion-bug
   ```

#### Durante el desarrollo:
1. Mantén los commits pequeños y descriptivos:
   ```bash
   git commit -m "Añade selector de temas visuales"
   git commit -m "Corrige colisión en nivel 5"
   ```

2. Escribe código limpio:
   - Sigue el estilo existente del proyecto
   - Usa nombres descriptivos para variables y funciones
   - Añade comentarios cuando sea necesario

3. Prueba tu código:
   ```bash
   npm start      # Prueba en desarrollo
   npm run build  # Compila para todas las plataformas
   ```

#### Al enviar el PR:
1. Describe claramente qué cambios hiciste
2. Explica por qué hiciste esos cambios
3. Vincula cualquier issue relacionado (ej: "Corrige #42")
4. Asegúrate de que tu código no rompe nada existente

Ejemplo de PR bien escrito:
```
**Título:** Añade modo oscuro al menú principal

**Descripción:**
Este PR implementa un modo oscuro para el menú principal del juego, mejorando la experiencia visual en ambientes oscuros.

**Cambios:**
- Añade nuevas variables CSS para temas
- Implementa selector de tema en el menú
- Guarda la preferencia en localStorage

**Relacionado con:** #25
```

## 📝 Pautas de Código

### Nombres y Formato

```javascript
// ✅ BIEN - Nombres descriptivos
function generateMathProblem() { }
const playerSpeed = 12;

// ❌ MAL - Nombres no claros
function gen() { }
const ps = 12;
```

### Comentarios

```javascript
// ✅ BIEN - Comentarios útiles
// Calcula la velocidad según el tiempo transcurrido
function getSpeedMultiplier() {
    const elapsed = totalTime - timeLeft;
    return 1 + (elapsed / totalTime) * maxFactor;
}

// ❌ MAL - Comentarios obvios
let x = 0; // Establece x a 0
```

### Funciones

```javascript
// ✅ BIEN - Función clara y enfocada
function updatePlayerPosition(keys, containerWidth) {
    if (keys['ArrowLeft']) playerX -= playerSpeed;
    if (keys['ArrowRight']) playerX += playerSpeed;
    playerX = Math.max(0, Math.min(playerX, containerWidth - 40));
}

// ❌ MAL - Función que hace demasiado
function updateEverything() {
    // ... 100 líneas de código
}
```

## 🔧 Estructura del Proyecto

```
Space-Math/
├── main.js                    # Proceso principal de Electron
├── space-math.html            # Juego principal
├── styles.css                 # Estilos del juego
├── nav.css                    # Estilos de navegación
├── package.json               # Configuración del proyecto
├── LICENSE                    # Licencia MIT
├── README.md                  # Documentación
├── CONTRIBUTING.md            # Este archivo
└── dist/                      # Ejecutables compilados
```

## 🧪 Testing

Antes de enviar un PR, prueba tu código:

```bash
# Instala dependencias (si es la primera vez)
npm install

# Inicia el juego en desarrollo
npm start

# Compila para tu plataforma
npm run build:linux   # Para Linux
npm run build:windows # Para Windows
npm run build:all     # Para ambas
```

## 📚 Recursos Útiles

- **Documentación de Electron:** https://www.electronjs.org/docs
- **MDN Web Docs:** https://developer.mozilla.org/es/
- **Canvas API:** https://developer.mozilla.org/es/docs/Web/API/Canvas_API
- **Git Guide:** https://github.com/git-tips/tips

## 🐛 Encontraste un Bug Crítico?

Si el bug es crítico o de seguridad, **no lo publiques en un issue público**. En su lugar:
1. Envía un email a rafael@example.com con los detalles
2. Describe el problema claramente
3. Proporciona pasos para reproducirlo

## 📞 Preguntas?

- Abre un issue con la etiqueta `question`
- Comenta en un issue existente relacionado
- Consulta el README.md para más información

## ✨ ¡Gracias!

Tu contribución es valiosa, sin importar cuán pequeña sea. ¡Estamos emocionados de trabajar contigo en hacer Space Math aún mejor!

---

**Nota:** Al contribuir a este proyecto, aceptas que tu código será licenciado bajo la licencia MIT.
