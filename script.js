
function openCV() {
    window.open('Assets/CV.pdf.pdf', '_blank');
}

$(document).ready(function () {
    console.log("Portfolio Home Page Ready!");


    var themeToggle = document.getElementById('themeToggle');
    var icon = themeToggle.querySelector('i');

   
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-mode');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        icon.style.color = '#0066cc';
    } else {
        icon.style.color = '#00ffff';
    }

    themeToggle.addEventListener('click', function () {
        document.body.classList.toggle('light-mode');
        
        if (document.body.classList.contains('light-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            icon.style.color = '#0066cc';
            localStorage.setItem('theme', 'light');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            icon.style.color = '#00ffff';
            localStorage.setItem('theme', 'dark');
        }
    });
});

document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('click', (e) => {
   
    });
});

var resumeButton = document.querySelector('.btn-primary');
var portfolioContent = document.getElementById('main-content');
var resumeModal = new bootstrap.Modal(document.getElementById('resumeModal'));

if (resumeButton) {
    resumeButton.addEventListener('click', function() {
        portfolioContent.style.filter = 'blur(5px)';
    });
}

if (document.getElementById('resumeModal')) {
    document.getElementById('resumeModal').addEventListener('hidden.bs.modal', function() {
        portfolioContent.style.filter = 'none';
    });
}





























