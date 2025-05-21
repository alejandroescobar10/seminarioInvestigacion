// js/toggle.js
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.project-item');
      const extra = item.querySelector('.more-text');
      extra.classList.toggle('hidden');
      btn.textContent = extra.classList.contains('hidden') ? 'Ver más' : 'Ver menos';
    });
  });
});
