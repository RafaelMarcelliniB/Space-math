# Guía: Publicar Space Math en GitHub

## 1️⃣ Crear Repositorio en GitHub

### Paso 1: Crear la cuenta
1. Ve a [github.com](https://github.com)
2. Haz clic en "Sign up" (Registrarse)
3. Sigue los pasos de registro

### Paso 2: Crear nuevo repositorio
1. Haz clic en el botón "+" en la esquina superior derecha
2. Selecciona "New repository" (Nuevo repositorio)
3. Completa los datos:
   - **Repository name:** `Space-Math` (o el nombre que prefieras)
   - **Description:** "Juego educativo de matemáticas basado en Electron"
   - **Public:** ✅ (Importante para software libre)
   - **Initialize with:**
     - ✅ Add a README file
     - ✅ Add .gitignore (selecciona Node)
     - ✅ Choose a license: MIT

4. Haz clic en "Create repository"

## 2️⃣ Preparar tu Proyecto Localmente

### Paso 1: Inicializar Git (si no lo has hecho)
```bash
cd "/home/rafaelm/Documentos/SOFTWARE LIBRE FINAL"
git init
```

### Paso 2: Crear archivo .gitignore
```bash
cat > .gitignore << 'EOF'
# Dependencias
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Archivos compilados
dist/
*.exe
*.AppImage
*.deb

# IDEs
.vscode/
.idea/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db
desktop.ini

# Variables de entorno
.env
.env.local
.env.*.local
EOF
```

### Paso 3: Realizar el primer commit
```bash
git add .
git commit -m "Commit inicial: Space Math - Juego educativo de matemáticas"
```

## 3️⃣ Conectar con GitHub

### Paso 1: Agregar el repositorio remoto
```bash
git remote add origin https://github.com/TU_USUARIO/Space-Math.git
```

(Reemplaza `TU_USUARIO` con tu nombre de usuario de GitHub)

### Paso 2: Cambiar rama a main (si es necesario)
```bash
git branch -M main
```

### Paso 3: Push del código
```bash
git push -u origin main
```

Se te pedirá que ingreses tus credenciales de GitHub.

## 4️⃣ Configuración del Repositorio en GitHub

### Sección "About" (Información)
1. Ve a la pestaña **Settings** de tu repositorio
2. En la sección "About", haz clic en el icono de engranaje
3. Completa:
   - **Description:** "Juego educativo de matemáticas con Electron"
   - **Website:** (tu sitio web si tienes uno)
   - **Topics:** `game`, `electron`, `math`, `education`, `javascript`
   - **Include in the home feed:** ✅

### Proteger la rama main
1. Ve a **Settings** → **Branches**
2. Haz clic en "Add rule"
3. Patrón de rama: `main`
4. Activa:
   - ✅ Require a pull request before merging
   - ✅ Require approvals (1 aprobación mínimo)
   - ✅ Dismiss stale pull request approvals
   - ✅ Require status checks to pass before merging

## 5️⃣ Crear Releases (Versiones)

### Cada vez que saques una nueva versión:

```bash
# 1. Asegúrate de estar en main
git checkout main

# 2. Compila la versión
npm run build:all

# 3. Crea un tag
git tag -a v1.0.0 -m "Space Math v1.0.0 - Primera versión"

# 4. Push del tag a GitHub
git push origin v1.0.0
```

### En GitHub:
1. Ve a la sección **Releases**
2. Haz clic en "Create a new release"
3. Selecciona el tag que acabas de crear
4. Completa:
   - **Release title:** Space Math v1.0.0
   - **Description:** Describe los cambios, nuevas características, etc.
5. Carga los archivos compilados (`dist/`)
6. Marca como "Latest release" si corresponde
7. Publica el release

## 6️⃣ Badges (Insignias) para el README

Puedes añadir insignias al README para mostrar información del proyecto:

```markdown
![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Node.js Version](https://img.shields.io/badge/Node.js-14+-green.svg)
![Platform](https://img.shields.io/badge/Platform-Linux%20%7C%20Windows-lightgrey.svg)
![Version](https://img.shields.io/badge/Version-1.0.0-brightgreen.svg)
```

Sitios útiles para crear badges:
- [Shields.io](https://shields.io/)
- [Badge Generator](https://badge.fury.io/)

## 7️⃣ Trabajar con Issues y Pull Requests

### Crear Issues automáticos
En GitHub puedes crear plantillas para issues:

1. Ve a **Settings** → **Features** → **Issues**
2. Haz clic en "Set up templates"
3. Crea plantillas para:
   - Bug report
   - Feature request
   - Question

### Revisar Pull Requests
Cuando alguien envíe un PR:
1. Revisa el código
2. Añade comentarios si es necesario
3. Aprueba o solicita cambios
4. Merge cuando todo esté bien

## 8️⃣ Documentación Adicional

Considera crear estos archivos en GitHub:

### `.github/ISSUE_TEMPLATE/bug_report.md`
```markdown
---
name: Bug report
about: Reportar un error encontrado
title: "[BUG] "
labels: bug
assignees: ''

---

**Descripción del bug:**
Describe claramente cuál es el problema.

**Pasos para reproducir:**
1. ...
2. ...

**Comportamiento esperado:**
...

**Capturas de pantalla:**
Si es relevante, añade capturas.

**Sistema:**
- OS: [e.g., Ubuntu 20.04]
- Node.js: [e.g., v14.0.0]
- Version: [e.g., 1.0.0]
```

### `.github/ISSUE_TEMPLATE/feature_request.md`
```markdown
---
name: Feature request
about: Sugerir una idea nueva
title: "[FEATURE] "
labels: enhancement
assignees: ''

---

**¿Es una mejora relacionada con un problema?**
Describe el problema.

**¿Cuál es la solución que propones?**
Describe tu idea.

**Alternativas consideradas:**
Describe otras opciones que pensaste.

**Contexto adicional:**
Añade cualquier otra información relevante.
```

## 9️⃣ Mantener tu Repositorio

### Actualizaciones regulares
```bash
# Después de hacer cambios
git add .
git commit -m "Descripción clara del cambio"
git push origin main
```

### Crear ramas para nuevas características
```bash
# Crear rama nueva
git checkout -b feature/nueva-funcionalidad

# Hacer cambios...

# Commit
git commit -m "Implementa nueva funcionalidad"

# Push
git push origin feature/nueva-funcionalidad

# En GitHub: Crear Pull Request
```

## 🔟 Estadísticas y SEO

### GitHub Pages (Sitio web del proyecto)
1. Ve a **Settings** → **Pages**
2. Selecciona:
   - **Source:** Deploy from a branch
   - **Branch:** main → / (root)
3. Tu sitio estará disponible en `https://TU_USUARIO.github.io/Space-Math`

### Community Standards
GitHub automáticamente te mostrará:
- Code of Conduct
- Licencia
- Contributing guidelines
- Readme

Puedes ver el perfil comunitario en **Insights** → **Community**

---

## 📚 Recursos Útiles

- **Git Documentation:** https://git-scm.com/doc
- **GitHub Guides:** https://guides.github.com/
- **GitHub Skills:** https://skills.github.com/
- **Open Source Guides:** https://opensource.guide/

## ✅ Checklist Final

Antes de publicar:
- ✅ Verifica que el .gitignore excluya `node_modules/` y `dist/`
- ✅ Asegúrate que el LICENSE esté incluido
- ✅ README.md esté completo y actualizado
- ✅ Todos los archivos de configuración estén presentes
- ✅ El código esté comentado apropiadamente
- ✅ No hay credenciales o datos sensibles en el código

¡Felicidades! Tu proyecto Space Math ahora está en GitHub y listo para que otros contribuyan. 🚀
