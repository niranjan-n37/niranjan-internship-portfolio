const leftCard = document.getElementById('leftCard');
const rightDetails = document.getElementById('rightDetails');
const allCards = document.querySelectorAll('.card');

function animateBars() {
  const bars = rightDetails.querySelectorAll('.bar div');
  bars.forEach(bar => {
    const finalWidth = bar.style.width;
    bar.style.width = '0%';
    setTimeout(() => {
      bar.style.width = finalWidth;
    }, 100);
  });
}

function selectSkill(type, element) {
  // Remove active class from all cards
  allCards.forEach(card => card.classList.remove('active'));
  // Highlight selected card
  element.classList.add('active');

  let cardHTML = '';
  let detailHTML = '';

  if (type === 'frontend') {
    cardHTML = `
      <h2>💻 Frontend Development</h2>
      <p>React, HTML5, CSS3, JavaScript</p>
    `;
    detailHTML = `
      <h2>Frontend Skills</h2>
      <div class="skill"><label>HTML</label><div class="bar"><div style="width:90%">90%</div></div></div>
      <div class="skill"><label>CSS</label><div class="bar"><div style="width:80%">80%</div></div></div>
      <div class="skill"><label>JavaScript</label><div class="bar"><div style="width:85%">85%</div></div></div>
      <div class="skill"><label>React</label><div class="bar"><div style="width:75%">75%</div></div></div>
    `;
  } else if (type === 'backend') {
    cardHTML = `
      <h2>🗄️ Backend Development</h2>
      <p>Java, SQL</p>
    `;
    detailHTML = `
      <h2>Backend Skills</h2>
      <div class="skill"><label>Java</label><div class="bar"><div style="width:70%">70%</div></div></div>
      <div class="skill"><label>SQL</label><div class="bar"><div style="width:65%">65%</div></div></div>
    `;
  } else if (type === 'uiux') {
    cardHTML = `
      <h2>✏️ UI/UX Design</h2>
      <p>Figma, Canva</p>
    `;
    detailHTML = `
      <h2>UI/UX Skills</h2>
      <div class="skill"><label>Figma</label><div class="bar"><div style="width:85%">85%</div></div></div>
      <div class="skill"><label>Canva</label><div class="bar"><div style="width:80%">80%</div></div></div>
    `;
  }

  leftCard.innerHTML = cardHTML;
  rightDetails.innerHTML = detailHTML;

  leftCard.classList.add('visible');
  rightDetails.classList.add('visible');

  animateBars();
}
