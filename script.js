const filters = document.querySelectorAll('.filter');
const projects = document.querySelectorAll('.project-item');

filters.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filters.forEach((item) => {
      const active = item === button;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    projects.forEach((project) => {
      const visible = filter === 'all' || project.dataset.category.split(' ').includes(filter);
      project.hidden = !visible;
    });
  });
});
