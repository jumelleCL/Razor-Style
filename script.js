window.addEventListener('scroll', function() {
    var header = document.getElementById('sticky-header');
    if (window.scrollY > 0) {
        header.classList.add('fixed');
        header.style.backgroundColor = "rgba(6, 14, 12, 0.8)";
    } else {
        header.classList.remove('fixed');
        header.style.backgroundColor = "var(--background)";
    }
});

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
      }
    if (elementTop < windowHeight - elementVisible) {
       reveals[i].classList.add("active");
    } else {
        reveals[i].classList.remove("active");
    }      
}

window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();