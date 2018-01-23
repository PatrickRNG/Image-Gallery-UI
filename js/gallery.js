const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.images img');
const opacity = 0.6;

imgs.forEach(img => img.addEventListener('click', imgClick));

//imgs.forEach(function(img) {
//   img.addEventListener('click', function(e) {
//       current.src = e.target.src;
//   });
//});

// Set first-image opacity
imgs[0].style.opacity = opacity;

function imgClick(e) {
    // Reset the opacity
    imgs.forEach(img => (img.style.opacity = 1));
    
    // Change current image to src of clicked image
    current.src = e.target.src;
    
    // Add faceIn class
    current.classList.add('fade-in');
    
    // Remove fade-in class after .2s
    setTimeout(() => current.classList.remove('fade-in'), 500);
    
    // Change opacity to var
    e.target.style.opacity = opacity;
}
