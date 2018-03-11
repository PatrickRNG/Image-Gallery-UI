const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.images img');
const opacity = 0.6;
const main = document.querySelector('.main-img');
const imageWrapper = document.querySelector('.images');
const bgi = document.querySelector('#bgi');

imgs.forEach(img => img.addEventListener('click', imgClick));
window.addEventListener('click', fullImage);

let images = Array.from(imgs).filter(a => a)

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

    bgi.style.backgroundImage = "url("+ current.src +")";    

}

function fullImage(e) {

    console.log(e.target);

    if (e.target == current) {
        // images.forEach(img => img.style.display = 'none');
        main.style.transform = 'scale(1.5, 1.5)';
        main.style.transform += 'translateY(15%)';
        imageWrapper.style.marginTop = '35%';
        
    }

    if (e.target != current) {
        images.forEach(img => img.style.display = 'block');        
        main.style.transform = 'unset';
        imageWrapper.style.marginTop = 'inherit';
    }

}
