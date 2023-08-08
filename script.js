let expandedCard = null; 
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  const btn = card.querySelector('.card-header');
  const content = card.querySelector('.card-content');

  btn.addEventListener('click', () => {    
  if(expandedCard) {
    expandedCard.classList.remove('expanded');
    expandedCard.querySelector('.card-content').style.maxHeight = null;
  }

  expandedCard = card; 
  card.classList.add('expanded');
  content.style.maxHeight = content.scrollHeight + 'px';
  });
});