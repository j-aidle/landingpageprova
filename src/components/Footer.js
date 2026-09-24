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
