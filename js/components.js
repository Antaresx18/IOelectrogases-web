/**
 * Componentes reutilizables para OI ELECTROGASES
 * Navbar y Footer dinámicos
 */

// Configuración común
const CONFIG = {
  siteName: 'OI ELECTROGASES',
  siteNamePart1: 'OI ELECTRO',
  siteNamePart2: 'GASES',
  logoPath: 'img/logo.png', // Ruta relativa desde la raíz
  logoAlt: 'IOELECTROGASES Logo',
  currentPage: '', // Se establecerá dinámicamente
  basePath: '' // Se establecerá dinámicamente según la ubicación
};

/**
 * Detecta la ruta base según la ubicación del archivo
 */
function getBasePath() {
  const path = window.location.pathname;
  if (path.includes('/pages/')) {
    return '../';
  }
  return '';
}

// Hacer getBasePath disponible globalmente
window.getBasePath = getBasePath;

/**
 * Genera el HTML del Navbar
 */
function generateNavbar() {
  const basePath = getBasePath();
  const currentPath = window.location.pathname;
  const isIndex = currentPath.endsWith('/') || currentPath.endsWith('/index.html') || currentPath.endsWith('index.html');
  const isConocenos = currentPath.includes('conocenos.html');
  const isServicios = currentPath.includes('servicios.html');
  const isMarcoLegal = currentPath.includes('marco_legal.html');

  const indexLink = isIndex ? 'index.html' : `${basePath}index.html`;
  const conocenosLink = isConocenos ? 'conocenos.html' : `${basePath}pages/conocenos.html`;
  const serviciosLink = isServicios ? 'servicios.html' : `${basePath}pages/servicios.html`;
  const marcoLegalLink = isMarcoLegal ? 'marco_legal.html' : `${basePath}pages/marco_legal.html`;

  return `
    <nav class="navbar navbar-expand-lg navbar-dark navbar-oscuro sticky-top">
      <div class="container">
        <!-- Logo + Título a la izquierda -->
        <a class="navbar-brand d-flex align-items-center" href="${indexLink}">
          <img
            src="${basePath}img/logo.png"
            alt="${CONFIG.logoAlt}"
            style="height: 80px;"
            class="me-2"
          />
          <span class="fs-3 fw-bold" style="color: white;">${CONFIG.siteNamePart1}</span><span class="fs-3 fw-bold" style="color: #e62920;">${CONFIG.siteNamePart2}</span>
        </a>

        <!-- Botón toggle (móvil) - siempre a la derecha -->
        <button
          class="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Abrir menú de navegación"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Ítems del menú -->
        <div class="collapse navbar-collapse" id="mainNavbar">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link ${isIndex ? 'active' : ''}" aria-current="${isIndex ? 'page' : ''}" href="${indexLink}">Inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link ${isConocenos ? 'active' : ''}" href="${conocenosLink}">Conócenos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link ${isServicios ? 'active' : ''}" href="${serviciosLink}">Servicios</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle ${isMarcoLegal ? 'active' : ''}"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Más
              </a>
              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item" href="${marcoLegalLink}">Marco legal</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `;
}

/**
 * Genera el HTML del Footer
 */
function generateFooter() {
  const basePath = getBasePath();
  
  const indexLink = basePath ? '../index.html' : 'index.html';
  const conocenosLink = basePath ? 'conocenos.html' : 'pages/conocenos.html';
  const serviciosLink = basePath ? 'servicios.html' : 'pages/servicios.html';
  const marcoLegalLink = basePath ? 'marco_legal.html' : 'pages/marco_legal.html';

  // Determinar clase del footer según la página
  const footerClass = basePath ? 'bg-dark text-white pt-5' : 'text-white pt-5';
  
  return `
    <footer class="${footerClass}">
      <div class="container">
        <div class="row">
          <!-- IZQUIERDA: Nombre y mensaje -->
          <div class="col-md-4 mb-4">
            <h5 class="fw-bold">${CONFIG.siteName}</h5>
            <p class="mb-0">Confianza y respaldo</p>
          </div>
          <!-- DERECHA: Tres apartados -->
          <div class="col-md-8">
            <div class="row">
              <!-- 1: Acerca de -->
              <div class="col-6 col-lg-4 mb-4">
                <h6 class="text-uppercase fw-bold">Acerca de</h6>
                <ul class="list-unstyled">
                  <li><a href="${conocenosLink}">Conócenos</a></li>
                  <li><a href="${serviciosLink}">Servicios</a></li>
                  <li><a href="${conocenosLink}">Nuestros aliados</a></li>
                </ul>
              </div>
              <!-- 2: Servicio al Cliente -->
              <div class="col-6 col-lg-4 mb-4">
                <h6 class="text-uppercase fw-bold">Servicio al Cliente</h6>
                <ul class="list-unstyled">
                  <li><a href="${serviciosLink}#servicioCliente">Contáctanos</a></li>
                  <li><a href="${serviciosLink}#pqrServicio">Agenda tu revisión</a></li>
                  <li><a href="${serviciosLink}#faqServicio">PQRS / FAQs</a></li>
                </ul>
              </div>
              <!-- 3: Legal -->
              <div class="col-6 col-lg-4 mb-4">
                <h6 class="text-uppercase fw-bold">Legal</h6>
                <ul class="list-unstyled">
                  <li><a href="${marcoLegalLink}">Política de datos</a></li>
                  <li><a href="${marcoLegalLink}">Términos y condiciones</a></li>
                  <li><a href="${marcoLegalLink}">Revisión periódica</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr class="border-secondary" />
        <div class="text-center pb-3">
          <small>&copy; ${new Date().getFullYear()} ${CONFIG.siteName}. Todos los derechos reservados.</small>
        </div>
      </div>
    </footer>
  `;
}

/**
 * Inicializa los componentes cuando el DOM está listo
 */
function initComponents() {
  // Insertar Navbar
  const navbarContainer = document.getElementById('navbar-container');
  if (navbarContainer) {
    navbarContainer.innerHTML = generateNavbar();
  }

  // Insertar Footer
  const footerContainer = document.getElementById('footer-container');
  if (footerContainer) {
    footerContainer.innerHTML = generateFooter();
  }
}

// Ejecutar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initComponents);
} else {
  initComponents();
}

