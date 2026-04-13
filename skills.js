function animateBars(container) {
  const bars = container.querySelectorAll('.bar div');
  bars.forEach(bar => {
    const width = bar.getAttribute('data-width');
    bar.style.width = '0%';
    setTimeout(() => {
      bar.style.width = width;
    }, 100);
  });
}

function toggleSkillCard(card, type) {
  const allCards = document.querySelectorAll('.skill-card');

  allCards.forEach(c => {
    if (c !== card) {
      c.classList.remove('expanded');
      c.querySelector('.skill-details').innerHTML = '';
    }
  });

  const detail = card.querySelector('.skill-details');
  const isActive = card.classList.contains('expanded');

  if (isActive) {
    card.classList.remove('expanded');
    detail.innerHTML = '';
    return;
  }

  card.classList.add('expanded');

  let html = '';
  if (type === 'frontend') {
    html = `
      <h4>Frontend Skills</h4>
      <div class="skill"><label>HTML</label><div class="bar"><div data-width="90%">90%</div></div></div>
      <div class="skill"><label>CSS</label><div class="bar"><div data-width="90%">90%</div></div></div>
      <div class="skill"><label>JavaScript</label><div class="bar"><div data-width="70%">70%</div></div></div>
      <div class="skill"><label>React</label><div class="bar"><div data-width="20%">20%</div></div></div>
    `;
  } else if (type === 'backend') {
    html = `
      <h4>Backend Skills</h4>
      <div class="skill"><label>SQL</label><div class="bar"><div data-width="85%">85%</div></div></div>
      <div class="skill"><label>Java</label><div class="bar"><div data-width="80%">80%</div></div></div>
      
    `;
  } else if (type === 'uiux') {
    html = `
      <h4>UI/UX Skills</h4>
      <div class="skill"><label>Canva</label><div class="bar"><div data-width="80%">80%</div></div></div>
      <div class="skill"><label>Figma</label><div class="bar"><div data-width="65%">65%</div></div></div>
      
    `;
  } else if (type === 'creative') {
    html = `
      <h4>Creative Thinking</h4>
      <div class="skill"><label>Problem Solving</label><div class="bar"><div data-width="90%">90%</div></div></div>
      <div class="skill"><label>Debugging</label><div class="bar"><div data-width="85%">85%</div></div></div>
      <div class="skill"><label>Brainstorming</label><div class="bar"><div data-width="80%">80%</div></div></div>
    `;
  }

  detail.innerHTML = html;
  animateBars(detail);
}
