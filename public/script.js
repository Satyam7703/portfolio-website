/* ================= NAVBAR TOGGLE ================= */

document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const navItems = document.querySelectorAll(".nav-item");

    // Toggle menu
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navLinks.classList.toggle("active");
    });

    // Close menu when any link clicked
    navItems.forEach(item => {
        item.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navLinks.classList.remove("active");
        });
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
        if (
            !hamburger.contains(e.target) &&
            !navLinks.contains(e.target)
        ) {
            hamburger.classList.remove("active");
            navLinks.classList.remove("active");
        }
    });
});

/* ================= IMAGE MODAL ================= */

const modalHTML = `
  <div id="photoModal" class="image-modal">
    <span class="close-image">&times;</span>
    <img id="modalImg" />
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

closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("active");
    }
});