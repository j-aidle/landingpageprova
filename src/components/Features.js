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
