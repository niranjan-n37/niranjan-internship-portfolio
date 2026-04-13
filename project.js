document.addEventListener('DOMContentLoaded', () => {
  // 🔔 1. Popup Message on Project Section View
  const popup = document.getElementById('popupMessage');
  const projectsSection = document.getElementById('projects');
  let popupShown = false;

  const popupObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !popupShown) {
        popup.classList.add('show');
        popupShown = true;

        setTimeout(() => {
          popup.classList.remove('show');
        }, 2500); // ⏱️ Disappear after 2.5 seconds
      }
    });
  }, { threshold: 0.4 });

  popupObserver.observe(projectsSection);

  // ✨ 2. Animate .project-card on Scroll
  const cards = document.querySelectorAll('.project-card');

  const cardObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        cardObserver.unobserve(entry.target); // Animate only once
      }
    });
  }, { threshold: 0.3 });

  cards.forEach(card => cardObserver.observe(card));

  // 🖼️ 3. Image Modal Viewer for Samples
  const modal = document.getElementById('imageViewerModal');
  const modalImg = document.getElementById('modalImg');
  const closeModal = document.getElementById('closeModal');

  document.querySelectorAll('.samples-scroll img').forEach(img => {
    img.addEventListener('click', () => {
      modalImg.src = img.src;
      modal.classList.add('show');
    });
  });

  closeModal.addEventListener('click', () => {
    modal.classList.remove('show');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('show');
    }
  });
});
