/**
 * Theme management for Nepali Indie Dev
 * Run synchronously in <head> to prevent flash of unstyled content (FOUC).
 */
(function () {
    const saved = localStorage.getItem('nid-theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = saved || (prefersDark ? 'dark' : 'light');
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
})();

document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;

    function syncIcon() {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        btn.querySelector('.icon-sun').style.display  = isDark ? 'block' : 'none';
        btn.querySelector('.icon-moon').style.display = isDark ? 'none'  : 'block';
        btn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    }

    syncIcon();

    btn.addEventListener('click', function () {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        const next = isDark ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('nid-theme', next);
        syncIcon();
    });
});
