const typedTextSpan = document.querySelector(".typed-text");
const textArray = ["Bobby Choudhary", "Software Developer.", " Frontend Developer.","Information Technology Engineer."];
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        textArrayIndex = (textArrayIndex + 1) % textArray.length;
        setTimeout(type, 500);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (textArray.length) setTimeout(type, 1000);
});






document.addEventListener('DOMContentLoaded', () => {
    const waMainBtn = document.getElementById('wa-main-btn');
    const waPopup = document.getElementById('wa-popup');
    const waCloseBtn = document.getElementById('wa-close-btn');

    // Toggle Chat Window
    waMainBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        waPopup.classList.toggle('active');
    });

    // Close Button
    waCloseBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        waPopup.classList.remove('active');
    });

    // Click outside to close
    document.addEventListener('click', (e) => {
        if (!waPopup.contains(e.target) && !waMainBtn.contains(e.target)) {
            waPopup.classList.remove('active');
        }
    });
});


function toggleSidebar() {
    document.querySelector('.sidebar').classList.toggle('active');
}

//Close sidebar when clicking on any nav link (mobile)
document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.querySelector(".sidebar");
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            const targetId = link.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

            // sidebar close after click
            setTimeout(() => {
                sidebar.classList.remove("active");
            }, 300);
        });
    });
});
