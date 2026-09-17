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
