const panels = document.querySelectorAll('.panel');
const courses = $("#courses");

const welcomeSign = $('#welcome-sign');
const profileName = $('#name');
const jobTitle = $('#job-title');
const bio = $('#bio');
const profilePic = $('#profile-pic');
const links = document.querySelectorAll('#projects a');

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        panel.classList.toggle('active');

        if (panel.children[1].classList.contains('visible')) {
            panel.children[1].classList.remove('visible');
        } else {
            setTimeout(() => {
                panel.children[1].classList.add('visible');
            }, 1500);
        }

        if (panel.children[2].classList.contains('visible')) {
            panel.children[2].classList.remove('visible');
        } else {
            setTimeout(() => {
                panel.children[2].classList.add('visible');
            }, 2000);
        }
    });
});



$(document).ready(function() {
    welcomeSign.animate({ opacity: 1 }, 1000, function() {
        profileName.animate({ opacity: 1 }, 1000, function() {
            jobTitle.animate({ opacity: 1 }, 1000, function() {
                bio.animate({ opacity: 1 }, 1000, function() {
                    courses.animate({ opacity: 1 }, 1000, function() {
                        profilePic.animate({ opacity: 1 }, 1000);
                    });
                });
            });
        });
    });
});


links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.stopPropagation();
    });
});


$('#navigation a').on('click', function(e) {
    if (this.hash !== '') {
        e.preventDefault();
        const hash = this.hash;
        $('html,body').animate({
            scrollTop: $(hash).offset().top
        }, 600, function() {
            window.location.hash = hash;
        });
    }
});