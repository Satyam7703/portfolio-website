// OPEN IMAGE MODAL
function openModal(img) {
    const modal = document.getElementById("photoModal");
    const modalImg = document.getElementById("modalImg");

    modal.classList.add("active");
    modal.style.display = "flex";
    modalImg.src = img.src;
    document.body.style.overflow = "hidden";
}

// CLOSE IMAGE MODAL
function closeModal() {
    const modal = document.getElementById("photoModal");
    modal.classList.remove("active");
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}

// CLOSE MODAL ON ESC KEY
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeModal();
    }
});

// CLOSE MODAL WHEN CLICKING ON CLOSE BUTTON
document.addEventListener("DOMContentLoaded", function () {
    const closeBtn = document.querySelector(".close-modal");
    if (closeBtn) {
        closeBtn.addEventListener("click", closeModal);
    }
});