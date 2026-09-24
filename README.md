# Landing Page Modular amb Vite, Vanilla JavaScript, Alpine.js i Tailwind CSS v4

Aquest projecte és una plantilla i guia pas a pas per a crear aplicacions web modernes, ràpides i modulars utilitzant **Vanilla JavaScript**, **Alpine.js**, **Vite** i **Tailwind CSS v4** sense la necessitat de cap framework pesat (com React o Vue).

---

## 📋 Taula de Continguts
- [Requisits Previs](#requisits-previs)
- [Estructura del Projecte](#estructura-del-projecte)
- [Guia d'Instal·lació Pas a Pas](#guia-dinstal·lació-pas-a-pas)
- [Configuració de Fitxers](#configuració-de-fitxers)
- [Arquitectura i Codi dels Components](#arquitectura-i-codi-dels-components)
  - [1. Fitxer Principal (`src/main.js`)](#1-fitxer-principal-srcmainjs)
  - [2. Component Navbar (`src/components/Navbar.js`)](#2-component-navbar-srccomponentonavbarjs)
  - [3. Component Hero (`src/components/Hero.js`)](#3-component-hero-srccomponentoherojs)
  - [4. Component Features (`src/components/Features.js`)](#4-component-features-srccomponentofeaturesjs)
  - [5. Component Footer (`src/components/Footer.js`)](#5-component-footer-srccomponentofooterjs)
- [Resolució d'Errors Comuns](#resolució-derrors-comuns)
- [Comandes Utilitzades](#comandes-utilitzades)

---

## 🛠️ Requisits Previs

- **Node.js**: Versió 18.0 o superior instal·lada.
- **npm**: Gestor de paquets inclòs amb Node.js.

---

## 📁 Estructura del Projecte

```text
landingpageprova/
├── node_modules/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Navbar.js       # Component de la barra de navegació (amb Alpine.js)
│   │   ├── Hero.js         # Component de la secció principal (Hero amb Alpine.js)
│   │   ├── Features.js     # Component de la grella de característiques
│   │   └── Footer.js       # Component del peu de pàgina
│   ├── main.js             # Punt d'entrada de JS i inicialització d'Alpine.js
│   └── style.css            # Directiva d'importació de Tailwind v4
├── .gitignore
├── index.html              # Estructura HTML base
├── package.json            # Fitxer de dependències i scripts
├── vite.config.js          # Configuració de Vite amb el plugin de Tailwind v4
└── README.md               # Documentació del projecte
```

---

## 🚀 Guia d'Instal·lació Pas a Pas

### Pas 1: Crear el projecte base amb Vite
Obre la terminal i executa:
```bash
npm create vite@latest mi-proyecto -- --template vanilla
cd mi-proyecto
```

### Pas 2: Instal·lar Tailwind CSS v4, Alpine.js i dependències
Instal·la les dependències del projecte juntament amb Tailwind CSS v4 i Alpine.js:
```bash
npm install
npm install tailwindcss @tailwindcss/vite alpinejs
```

---

## ⚙️ Configuració de Fitxers

### 1. `vite.config.js`
Crea el fitxer `vite.config.js` a l'arrel del projecte per activar el plugin oficial de Tailwind v4:

```javascript
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
});
```

### 2. `src/style.css`
A Tailwind CSS v4 **no cal fitxer `tailwind.config.js`**. Neteja tot el contingut de `src/style.css` i afegeix únicament aquesta línia (és molt important incloure el punt i coma final `;`):

```css
@import "tailwindcss";
```

### 3. `index.html`
Assegura't que l'script apunti a `/src/main.js` per evitar errors de resolució de fitxers:

```html
<!DOCTYPE html>
<html lang="ca">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Landing Page - Vite + Vanilla JS + Alpine.js + Tailwind v4</title>
  </head>
  <body class="bg-slate-900 text-slate-100 min-h-screen">
    <div id="app"></div>
    <script type="module" src="/src/main.js"></script>
  </body>
</html>
```

---

## 🧩 Arquitectura i Codi dels Components

L'aplicació utilitza un patró modular basat en funcions combinat amb la reactivitat declarativa d'**Alpine.js**.

### 1. Fitxer Principal (`src/main.js`)

Aquí inicialitzem **Alpine.js** de forma global i renderitzem l'estructura de la pàgina:

```javascript
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
```

### 2. Component Navbar (`src/components/Navbar.js`)

Utilitza les directives `x-data`, `@click` i `x-show` d'Alpine.js per gestionar un menú desplegable responsive sense necessitat de manipular el DOM manualment:

```javascript
export function renderNavbar(element) {
  element.innerHTML = `
    <nav x-data="{ open: false }" class="border-b border-slate-800 bg-slate-900/80 backdrop-blur-md sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <div class="h-8 w-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-600/30">
            V
          </div>
          <span class="font-bold text-lg tracking-tight text-white">ViteApp</span>
        </div>
        
        <!-- Menú d'escriptori -->
        <div class="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#features" class="hover:text-indigo-400 transition-colors">Característiques</a>
          <a href="#" class="hover:text-indigo-400 transition-colors">Solucions</a>
          <a href="#" class="hover:text-indigo-400 transition-colors">Preus</a>
        </div>

        <div class="hidden md:flex items-center gap-4">
          <a href="#" class="text-sm font-medium text-slate-300 hover:text-white transition-colors">Inicia sessió</a>
          <a href="#" class="text-sm font-medium bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg transition-all shadow-md shadow-indigo-600/20">
            Començar
          </a>
        </div>

        <!-- Botó del menú mòbil -->
        <div class="flex md:hidden">
          <button @click="open = !open" type="button" class="text-slate-300 hover:text-white focus:outline-none p-2">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path x-show="!open" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path x-show="open" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Desplegable del menú mòbil controlat per Alpine -->
      <div x-show="open" x-transition class="md:hidden border-b border-slate-800 bg-slate-900 px-4 pt-2 pb-4 space-y-2">
        <a href="#features" class="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800">Característiques</a>
        <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800">Solucions</a>
        <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800">Preus</a>
        <div class="pt-4 border-t border-slate-800 flex flex-col gap-2">
          <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-slate-300 text-center">Inicia sessió</a>
          <a href="#" class="block px-3 py-2 rounded-md text-base font-medium bg-indigo-600 text-white text-center">Començar</a>
        </div>
      </div>
    </nav>
  `;
}
```

### 3. Component Hero (`src/components/Hero.js`)

Aprofita Alpine `@click` per gestionar la interactivitat directament a l'HTML:

```javascript
export function renderHero(element) {
  element.innerHTML = `
    <section class="relative overflow-hidden py-24 sm:py-32">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/30 via-slate-900 to-slate-900 -z-10"></div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-8">
          <span class="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
          Nova versió 4.0 + Alpine.js disponible
        </span>

        <h1 class="text-4xl sm:text-6xl font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-tight">
          Crea aplicacions web ultra ràpides amb <span class="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Tailwind v4</span>
        </h1>

        <p class="mt-6 text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Projecte modular basat en Vanilla JS, Alpine.js i Vite. Sense configuracions complexes, directament preparat per a la producció.
        </p>

        <div class="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button @click="alert('¡Gràcies per provar la landing page amb Alpine.js!')" class="w-full sm:w-auto px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl shadow-lg shadow-indigo-600/30 transition-all cursor-pointer">
            Explorar demo
          </button>
          <a href="#features" class="w-full sm:w-auto px-8 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold rounded-xl transition-all text-center">
            Saber-ne més
          </a>
        </div>
      </div>
    </section>
  `;
}
```

### 4. Component Features (`src/components/Features.js`)

```javascript
export function renderFeatures(element) {
  const featuresList = [
    {
      title: 'Renderitzat Ràpid',
      desc: 'Compilació instantània gràcies al motor de Vite i la nova arquitectura de Tailwind v4.',
      icon: '⚡'
    },
    {
      title: 'Reactivitat lleugera',
      desc: 'Utilitza Alpine.js per gestionar l'estat i la interactivitat directament en l'HTML sense virtual DOM.',
      icon: '🚀'
    },
    {
      title: 'Modularitat Total',
      desc: 'Organitza el teu codi Vanilla JavaScript en components independents fàcils de mantenir.',
      icon: '🧩'
    }
  ];

  element.innerHTML = `
    <section id="features" class="py-20 bg-slate-950/50 border-t border-slate-800/80">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-3xl font-bold text-white">Tot el que necessites</h2>
          <p class="mt-4 text-slate-400">Una arquitectura lleugera sense el pes dels marcs de treball tradicionals.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          ${featuresList.map(feature => `
            <div class="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all hover:-translate-y-1">
              <div class="text-4xl mb-4">${feature.icon}</div>
              <h3 class="text-xl font-semibold text-white mb-2">${feature.title}</h3>
              <p class="text-slate-400 leading-relaxed text-sm">${feature.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
```

### 5. Component Footer (`src/components/Footer.js`)

```javascript
export function renderFooter(element) {
  element.innerHTML = `
    <footer class="border-t border-slate-800 bg-slate-950 py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div class="flex items-center gap-2">
          <div class="h-6 w-6 rounded bg-indigo-600 flex items-center justify-center text-xs font-bold text-white">V</div>
          <span class="font-bold text-slate-200">ViteApp</span>
        </div>
        
        <p class="text-xs text-slate-500">
          © ${new Date().getFullYear()} Landing Page. Construït amb Vite, Vanilla JS, Alpine.js i Tailwind CSS v4.
        </p>

        <div class="flex gap-6 text-sm text-slate-400">
          <a href="#" class="hover:text-indigo-400 transition-colors">Privacitat</a>
          <a href="#" class="hover:text-indigo-400 transition-colors">Termes</a>
        </div>
      </div>
    </footer>
  `;
}
```

---

## 🚨 Resolució d'Errors Comuns

### 1. Alpine no executa els esdeveniments o directiva `x-data`
- **Causa**: `Alpine.start()` s'ha cridat abans que els components s'injectessin al DOM amb `innerHTML`.
- **Solució**: Crida sempre `Alpine.start()` al fitxer `src/main.js` **després** de renderitzar tots els components:
  ```javascript
  // Renderitzar HTML dels components primer
  renderNavbar(...);
  
  // Iniciar Alpine al final de tot
  Alpine.start();
  ```

### 2. `[plugin:@tailwindcss/vite] Missing opening {`
- **Causa**: Falta el punt i coma `;` al final de la línia `@import "tailwindcss"` a `src/style.css`.
- **Solució**: Deixa el fitxer `src/style.css` únicament amb:
  ```css
  @import "tailwindcss";
  ```

### 3. `Failed to load url /main.js (resolved id: /main.js). Does the file exist?`
- **Causa**: `index.html` està buscant `main.js` a l'arrel en lloc de la carpeta `src/`.
- **Solució**: Modifica la ruta a `index.html` per a carregar `/src/main.js`:
  ```html
  <script type="module" src="/src/main.js"></script>
  ```

---

## 💻 Comandes Utilitzades

| Comanda | Descripció |
| :--- | :--- |
| `npm run dev` | Inicia el servidor local de desenvolupament (HMR actiu). |
| `npm run build` | Compila el projecte per a producció a la carpeta `dist/`. |
| `npm run preview` | Mostra una vista prèvia local de la versió de producció. |

---

Elaborat amb Vanilla JS, Alpine.js, Vite i Tailwind CSS v4.