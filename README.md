# OI ELECTROGASES - Sitio Web

Sitio web corporativo de OI ELECTROGASES, empresa especializada en revisiones periódicas obligatorias de gas natural en Colombia.

## 📋 Descripción

Este es un sitio web estático desarrollado con HTML5, CSS3, JavaScript vanilla, Bootstrap 5 y FontAwesome. El sitio presenta información sobre la empresa, sus servicios, aliados comerciales y permite a los usuarios enviar solicitudes PQRS (Peticiones, Quejas, Reclamos y Sugerencias).

## 🚀 Características

- **Diseño Responsive**: Adaptado para dispositivos móviles, tablets y escritorio
- **Formulario PQRS**: Integración con Google Apps Script para el envío de solicitudes
- **Navegación Intuitiva**: Menú de navegación con sticky header
- **Carrusel de Imágenes**: Presentación visual de servicios y promociones
- **Sección de Aliados**: Muestra de empresas aliadas con logos
- **Preguntas Frecuentes**: Acordeón interactivo con información relevante

## 📁 Estructura del Proyecto

```
IOelectrogases-web/
├── css/                    # Hojas de estilo (Bootstrap, FontAwesome, custom)
├── js/                     # Scripts JavaScript (Bootstrap)
├── img/                    # Imágenes del sitio
├── docs/                   # Documentos PDF (políticas, términos)
├── webfonts/               # Fuentes de FontAwesome
├── pages/                  # Páginas secundarias del sitio
│   ├── conocenos.html      # Página "Conócenos"
│   ├── servicios.html      # Página de servicios y PQRS
│   └── marco_legal.html    # Documentos legales
├── index.html              # Página principal (raíz)
├── robots.txt             # Configuración para motores de búsqueda
├── sitemap.xml            # Mapa del sitio para SEO
├── netlify.toml           # Configuración de Netlify
└── README.md              # Este archivo
```

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos personalizados y responsive design
- **JavaScript**: Funcionalidad interactiva
- **Bootstrap 5**: Framework CSS para diseño responsive
- **FontAwesome**: Iconos vectoriales
- **Google Apps Script**: Backend para formularios PQRS

## 📄 Páginas del Sitio

1. **Inicio** (`index.html`): Página principal con carrusel, servicios destacados y contacto
2. **Conócenos** (`pages/conocenos.html`): Historia, misión, visión y aliados comerciales
3. **Servicios** (`pages/servicios.html`): Información de servicios, formulario PQRS y preguntas frecuentes
4. **Marco Legal** (`pages/marco_legal.html`): Políticas, términos y condiciones, y documentos legales

## 🔧 Configuración

### Requisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor web local (opcional, solo si necesitas probar funcionalidades que requieren servidor)

### Instalación Local

**Opción 1: Abrir directamente en el navegador**
1. Simplemente haz doble clic en `index.html`
2. El sitio se abrirá en tu navegador predeterminado
3. ⚠️ Nota: Algunas funcionalidades (como formularios) pueden requerir un servidor

**Opción 2: Servidor HTTP simple (recomendado para desarrollo)**

**Con Python 3:**
```bash
# En la terminal, desde la carpeta del proyecto:
python -m http.server 8000
# Luego abre: http://localhost:8000
```

**Con Node.js (http-server):**
```bash
# Instalar http-server globalmente (solo una vez):
npm install -g http-server

# Ejecutar servidor:
http-server -p 8000
# Luego abre: http://localhost:8000
```

**Con PHP (si tienes PHP instalado):**
```bash
php -S localhost:8000
# Luego abre: http://localhost:8000
```

**Con VS Code:**
- Instala la extensión "Live Server"
- Click derecho en `index.html` → "Open with Live Server"

### ⚠️ Importante: Este proyecto NO requiere npm

Este es un sitio web estático que **NO necesita** `package.json` ni `npm`. Todos los recursos (Bootstrap, FontAwesome) están incluidos localmente en las carpetas `css/` y `js/`.

Si ves errores de npm, simplemente ignóralos. Para probar el sitio:
- Abre `index.html` directamente en tu navegador, O
- Usa uno de los servidores HTTP simples mencionados arriba

### Despliegue en Netlify

El sitio está configurado para desplegarse en Netlify. Los archivos importantes están en la raíz:

- `robots.txt` - Configuración para motores de búsqueda
- `sitemap.xml` - Mapa del sitio para SEO
- `netlify.toml` - Configuración de Netlify (headers, caché, etc.)

**Pasos para desplegar:**

1. Conecta tu repositorio de Git a Netlify (o arrastra la carpeta)
2. Netlify detectará automáticamente que es un sitio estático
3. Los archivos `robots.txt` y `sitemap.xml` estarán disponibles automáticamente
4. Configura tu dominio personalizado en Netlify: `oielectrogases.com`

**Verificación después del despliegue:**

- ✅ `https://oielectrogases.com/robots.txt` debe ser accesible
- ✅ `https://oielectrogases.com/sitemap.xml` debe ser accesible
- ✅ Todas las páginas deben cargar correctamente

## 📝 Notas de Desarrollo

- Los archivos CSS y JS están en formato minificado para producción
- Las imágenes están optimizadas para web
- El formulario PQRS requiere configuración de Google Apps Script
- Todos los archivos de imágenes usan nombres en minúsculas para compatibilidad cross-platform
- **Este proyecto NO requiere Node.js ni npm** - es un sitio estático puro

## 📞 Contacto

- **WhatsApp**: +57 3503732122
- **Email**: electrogases@gmail.com
- **Teléfono**: +57 3503732122

## 📜 Licencia

© 2025 OI ELECTROGASES. Todos los derechos reservados.

## 🔄 Actualizaciones Futuras

- [ ] Optimización de imágenes adicional
- [ ] Implementación de favicon
- [ ] Mejoras de SEO (meta tags, structured data)
- [ ] Integración con analytics
- [ ] Documentación de API de Google Apps Script
