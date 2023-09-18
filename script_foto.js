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



