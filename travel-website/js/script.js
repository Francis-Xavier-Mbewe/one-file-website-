 const images = [
      { src: 'images/image1.jpg', text: 'Beautiful scenery' },
      { src: 'images/image2.jpg', text: 'A peaceful destination' },
      { src: 'images/image3.jpg', text: 'Explore the outdoors' }
    ];

    let currentIndex = 0;
    const slideImage = document.getElementById('slideImage');
    const caption = document.getElementById('caption');
    const dots = document.querySelectorAll('.dot');

    function showSlide(index) {
      currentIndex = (index + images.length) % images.length;
      slideImage.src = images[currentIndex].src;
      caption.textContent = images[currentIndex].text;
      dots.forEach(function(dot, dotIndex) { dot.classList.toggle('active', dotIndex === currentIndex); });
    }

    document.getElementById('next').addEventListener('click', function() { showSlide(currentIndex + 1); });
    document.getElementById('previous').addEventListener('click', function() { showSlide(currentIndex - 1); });
    dots.forEach(function(dot) { dot.addEventListener('click', function() { showSlide(Number(dot.dataset.slide)); }); });
    setInterval(function() { showSlide(currentIndex + 1); }, 5000);

