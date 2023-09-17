const paragraph = document.getElementById('additionalInfo');
const showMoreBtn2 = document.getElementById('showMoreBtn2');


function toggleVisibility() {
  if (paragraph.style.display === 'none') {
    showMoreBtn2.textContent = 'Убрать информации, но совсем чуть-чуть';
    paragraph.style.display = 'block';
  } else {
    showMoreBtn2.textContent = 'Показать больше информации';
    paragraph.style.display = 'none';
  }
}



