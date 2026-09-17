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
