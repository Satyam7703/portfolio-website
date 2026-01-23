// ================= NAVBAR TOGGLE =================

// Select elements
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger && navLinks) {
    hamburger.addEventListener("click", function (event) {
        event.stopPropagation();
        hamburger.classList.toggle("active");
        navLinks.classList.toggle("active");
    });

    // Close menu when link is clicked
    const navItems = navLinks.querySelectorAll(".nav-item");
    navItems.forEach(item => {
        item.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navLinks.classList.remove("active");
        });
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
        if (!hamburger.contains(event.target) && !navLinks.contains(event.target)) {
            hamburger.classList.remove("active");
            navLinks.classList.remove("active");
        }
    });
}

// ================= IMAGE MODAL =================

const modalHTML = `
<div id="photoModal" class="image-modal">
    <span class="close-image">&times;</span>
    <img id="modalImg">
</div>
`;

document.body.insertAdjacentHTML("beforeend", modalHTML);

const modal = document.getElementById("photoModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close-image");

function openModal(img) {
    modalImg.src = img.src;
    modal.classList.add("active");
}

closeBtn.onclick = () => modal.classList.remove("active");

modal.onclick = e => {
    if (e.target === modal) modal.classList.remove("active");
};
