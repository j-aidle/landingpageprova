# Landing Page Modular amb Vite, Vanilla JavaScript i Tailwind CSS v4

Aquest projecte és una plantilla i guia pas a pas per a crear aplicacions web modernes, ràpides i modulars utilitzant **Vanilla JavaScript**, **Vite** i **Tailwind CSS v4** sense la necessitat de cap framework pesat (com React o Vue).

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
│   │   ├── Navbar.js       # Component de la barra de navegació
│   │   ├── Hero.js         # Component de la secció principal (Hero)
│   │   ├── Features.js     # Component de la grella de característiques
│   │   └── Footer.js       # Component del peu de pàgina
│   ├── main.js             # Punt d'entrada principal de JavaScript
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
npm create vite@latest landingpageprova -- --template vanilla
cd landingpageprova
```

### Pas 2: Instal·lar Tailwind CSS v4 i dependències
Instal·la les dependències del projecte juntament amb el paquet oficial de Tailwind CSS v4 per a Vite:
```bash
npm install
npm install tailwindcss @tailwindcss/vite
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
    <title>Landing Page - Vite + Vanilla JS + Tailwind v4</title>
  </head>
  <body class="bg-slate-900 text-slate-100 min-h-screen">
    <div id="app"></div>
    <script type="module" src="/src/main.js"></script>
  </body>
</html>
```

---

## 🧩 Arquitectura i Codi dels Components

L'aplicació utilitza un patró modular basat en funcions. Cada component exporta una funció que rep un element contenidor del DOM i n'injecta l'HTML i els esdeveniments necessaris.

### 1. Fitxer Principal (`src/main.js`)

```javascript
import './style.css';
import { renderNavbar } from './components/Navbar.js';
import { renderHero } from './components/Hero.js';
import { renderFeatures } from './components/Features.js';
import { renderFooter } from './components/Footer.js';

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
```

### 2. Component Navbar (`src/components/Navbar.js`)

```javascript
export function renderNavbar(element) {
  element.innerHTML = `
    <nav class="border-b border-slate-800 bg-slate-900/80 backdrop-blur-md sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <div class="h-8 w-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-600/30">
            V
          </div>
          <span class="font-bold text-lg tracking-tight text-white">ViteApp</span>
        </div>
        
        <div class="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#features" class="hover:text-indigo-400 transition-colors">Característiques</a>
          <a href="#" class="hover:text-indigo-400 transition-colors">Solucions</a>
          <a href="#" class="hover:text-indigo-400 transition-colors">Preus</a>
        </div>

        <div class="flex items-center gap-4">
          <a href="#" class="text-sm font-medium text-slate-300 hover:text-white transition-colors hidden sm:block">Inicia sessió</a>
          <a href="#" class="text-sm font-medium bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg transition-all shadow-md shadow-indigo-600/20">
            Començar
          </a>
        </div>
      </div>
    </nav>
  `;
}
```

### 3. Component Hero (`src/components/Hero.js`)

```javascript
export function renderHero(element) {
  element.innerHTML = `
    <section class="relative overflow-hidden py-24 sm:py-32">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/30 via-slate-900 to-slate-900 -z-10"></div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-8">
          <span class="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
          Nova versió 4.0 disponible
        </span>

        <h1 class="text-4xl sm:text-6xl font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-tight">
          Crea aplicacions web ultra ràpides amb <span class="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Tailwind v4</span>
        </h1>

        <p class="mt-6 text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Projecte modular basat en Vanilla JS i Vite. Sense configuracions complexes, directament preparat per a la producció.
        </p>

        <div class="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button id="cta-btn" class="w-full sm:w-auto px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl shadow-lg shadow-indigo-600/30 transition-all cursor-pointer">
            Explorar demo
          </button>
          <a href="#features" class="w-full sm:w-auto px-8 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold rounded-xl transition-all text-center">
            Saber-ne més
          </a>
        </div>
      </div>
    </section>
  `;

  // Esdeveniment interactiu del botó CTA
  element.querySelector('#cta-btn')?.addEventListener('click', () => {
    alert('¡Gràcies per provar la landing page!');
  });
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
      title: 'Modularitat Total',
      desc: 'Organitza el teu codi Vanilla JavaScript en components independents fàcils de mantenir.',
      icon: '🧩'
    },
    {
      title: 'Estils Moderns',
      desc: 'Dissenyat amb utilitats CSS de darrera generació, gradients i efectes de vidre de forma senzilla.',
      icon: '🎨'
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
          © ${new Date().getFullYear()} Landing Page. Construït amb Vite, Vanilla JS i Tailwind CSS v4.
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

### 1. `[plugin:@tailwindcss/vite] Missing opening {`
- **Causa**: Falta el punt i coma `;` al final de la línia `@import "tailwindcss"` a `src/style.css`, o bé hi ha regles CSS mal formades.
- **Solució**: Deixa el fitxer `src/style.css` únicament amb:
  ```css
  @import "tailwindcss";
  ```

### 2. `Failed to load url /main.js (resolved id: /main.js). Does the file exist?`
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

Elaborat amb Vanilla JS, Vite i Tailwind CSS v4.
