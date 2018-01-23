const [current, imgs] = [
    document.querySelector('#current'),
    document.querySelectorAll('.images img')
];

imgs.forEach(img => img.addEventListener('click', e => current.src = e.target.src));

//imgs.forEach(function(img) {
//   img.addEventListener('click', function(e) {
//       current.src = e.target.src;
//   });
//});
