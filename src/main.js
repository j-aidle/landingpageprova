import './style.css';
import Alpine from 'alpinejs';
import { renderNavbar } from './components/Navbar.js';
import { renderHero } from './components/Hero.js';
import { renderFeatures } from './components/Features.js';
import { renderFooter } from './components/Footer.js';

// Configurar i iniciar Alpine.js
window.Alpine = Alpine;

// Estructura principal de la Landing Page
document.querySelector('#app').innerHTML = `
  <div class="min-h-screen flex flex-col bg-slate-900 text-slate-100 antialiased">
    <div id="navbar"></div>
    <main class="flex-grow">
      <div id="hero"></div>
      <div id="features"></div>
    </main>
    <div id="footer"></div>
  </div>
`;

// Renderitzem cada component en el seu contenidor
renderNavbar(document.querySelector('#navbar'));
renderHero(document.querySelector('#hero'));
renderFeatures(document.querySelector('#features'));
renderFooter(document.querySelector('#footer'));

// Arrencar Alpine després d'haver injectat tots els components al DOM
Alpine.start();