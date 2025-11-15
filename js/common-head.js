/**
 * Head común para todas las páginas
 * Incluye meta tags y enlaces CSS comunes
 */

function generateCommonHead(title) {
  const basePath = getBasePath ? getBasePath() : '';
  
  return `
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="OI ELECTROGASES - Empresa especializada en revisiones periódicas obligatorias de gas natural en Colombia. Servicios de inspección certificados y confiables." />
    <meta name="keywords" content="revisión gas natural, inspección gas, RPO, gas natural Colombia, revisión periódica obligatoria" />
    <meta name="author" content="OI ELECTROGASES" />
    <title>${title}</title>

    <!-- === BOOTSTRAP CSS LOCAL === -->
    <link rel="stylesheet" href="${basePath}css/bootstrap.min.css" />

    <!-- FontAwesome CSS local -->
    <link rel="stylesheet" href="${basePath}css/all.min.css" />
    
    <!-- Estilos personalizados -->
    <link rel="stylesheet" href="${basePath}css/style.css">
    
    <!-- Google Fonts (solo en index.html) -->
    ${title.includes('Inicio') ? '<link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@100&display=swap" rel="stylesheet">' : ''}
  `;
}

