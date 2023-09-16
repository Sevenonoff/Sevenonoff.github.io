const showMoreBtn = document.getElementById('showMoreBtn');
const additionalInfo = document.createElement('p');
additionalInfo.textContent = 'Playrix, Dublin (remote).';
additionalInfo.style.display = 'none';

const paragraph = document.getElementById('additionalInfo');

function toggleVisibility() {
  if (paragraph.style.visibility === 'hidden') {
    paragraph.style.visibility = 'visible';
  } else {
    paragraph.style.visibility = 'hidden';
  }
}




showMoreBtn.addEventListener('click', function() {
  if (additionalInfo.style.display === 'none') {
    additionalInfo.style.display = 'block';
    showMoreBtn.textContent = 'Убрать информации, но совсем чуть-чуть';
  } else {
    additionalInfo.style.display = 'none';
    showMoreBtn.textContent = 'Показать больше информации';
  }
});

document.body.appendChild(additionalInfo);
