const showMoreBtn = document.getElementById('showMoreBtn');
const additionalInfo = document.createElement('p');
additionalInfo.textContent = 'Additional information about me.';
additionalInfo.style.display = 'none';

showMoreBtn.addEventListener('click', function() {
  if (additionalInfo.style.display === 'none') {
    additionalInfo.style.display = 'block';
    showMoreBtn.textContent = 'Show less information';
  } else {
    additionalInfo.style.display = 'none';
    showMoreBtn.textContent = 'Show more information';
  }
});

document.body.appendChild(additionalInfo);
