
  document.querySelectorAll('.social-icon').forEach(icon => {
    icon.addEventListener('click', function () {
      const iconCircle = this.querySelector('.icon-circle');
      iconCircle.classList.add('bounce');

      setTimeout(() => {
        iconCircle.classList.remove('bounce');
      }, 300);
    });
  });
