document.addEventListener('DOMContentLoaded', function() {
    const starRating = document.getElementById('starRating');
    const stars = starRating.querySelectorAll('.star');
    let ratingValue = 0;
  
    stars.forEach(star => {
      star.addEventListener('mouseover', function() {
        resetStars();
        const hoverValue = parseInt(star.getAttribute('data-value'));
        highlightStars(hoverValue);
      });
  
      star.addEventListener('click', function() {
        ratingValue = parseInt(star.getAttribute('data-value'));
        highlightStars(ratingValue);
      });
  
      star.addEventListener('mouseout', function() {
        resetStars();
        highlightStars(ratingValue);
      });
    });
  
    function resetStars() {
      stars.forEach(star => {
        star.classList.remove('active');
      });
    }
  
    function highlightStars(value) {
      for (let i = 0; i < value; i++) {
        stars[i].classList.add('active');
      }
    }
  
    
    const buyBtn = document.getElementById('buyBtn');
    buyBtn.addEventListener('click', function() {
      alert('You bought the shoes!');
    });
  
    
    const addToCartBtn = document.getElementById('addToCartBtn');
    addToCartBtn.addEventListener('click', function() {
      alert('Added to cart!');
    });
  });
  