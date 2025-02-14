document.addEventListener('DOMContentLoaded', function() {
    const baseUrl = window.location.hostname.includes('github.io') 
        ? 'https://jcarroyos-teaching.github.io/2025ii-hola-mundo' 
        : '';

    const header = document.createElement('header');
    header.innerHTML = `
        <div class="container">
                <ul>
                    <li><a href="${baseUrl}/pages/jcarroyos.html">jcarroyos</a></li>
                    <li><a href="${baseUrl}/pages/aclarosb.html">aclarosb</a></li>
                    <li><a href="${baseUrl}/pages/andrea.html">andrea</a></li>
                    <li><a href="${baseUrl}/pages/blackdanger.html">blackdanger</a></li>
                    <li><a href="${baseUrl}/pages/paula.html">paula</a></li>
                    <li><a href="${baseUrl}/pages/rodrigga.html">rodrigga</a></li>
                    <li><a href="${baseUrl}/pages/samuel.html">samuel</a></li>
                    <li><a href="${baseUrl}/pages/sillydata.html">sillydata</a></li>
                    <li><a href="${baseUrl}/pages/jpverahm1.html">jpverahm1</a></li>
                    <li><a href="${baseUrl}/pages/paula.html">paula</a></li>
                    <li><a href="${baseUrl}/pages/vpinedapu.html">vpinedapu</a></li>
                    <!-- Agrega más enlaces según sea necesario -->
                </ul>
        </div>
    `;
    document.body.insertBefore(header, document.body.firstChild);
});