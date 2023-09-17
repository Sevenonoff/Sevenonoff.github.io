const paragraph = document.getElementById('additionalInfo');
const showMoreBtn2 = document.getElementById('showMoreBtn2');


function toggleVisibility() {
  if (paragraph.style.display === 'none') {
    showMoreBtn2.textContent = 'Убрать информации, но совсем чуть-чуть';
    paragraph.style.display = 'block';

  // Get the div element
  var div = document.querySelector('div');

  // Add a class to trigger the animation
  div.classList.add('fade-in');


  } else {
    showMoreBtn2.textContent = 'Показать больше информации';
    paragraph.style.display = 'none';
  }
}


function changeSlide(index) {
  const images = document.getElementsByClassName('slider')[0].getElementsByTagName('img');
  const dots = document.getElementsByClassName('dot');

  for (let i = 0; i < images.length; i++) {
    images[i].style.display = 'none';
    dots[i].classList.remove('active');
  }

  images[index].style.display = 'block';
  dots[index].classList.add('active');
}



