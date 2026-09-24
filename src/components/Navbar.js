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
