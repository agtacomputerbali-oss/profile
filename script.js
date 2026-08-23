document.getElementById('year').textContent = new Date().getFullYear();

// highlight active sidebar link based on current page filename
(function(){
  var here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav.side-nav a').forEach(function(a){
    var href = a.getAttribute('href');
    if (href === here || (here === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
})();
