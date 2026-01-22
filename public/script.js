// OPEN IMAGE MODAL
function openModal(img) {
    const modal = document.getElementById("photoModal");
    const modalImg = document.getElementById("modalImg");

    modal.style.display = "flex";
    modalImg.src = img.src;
}

// CLOSE IMAGE MODAL
function closeModal() {
    const modal = document.getElementById("photoModal");
    modal.style.display = "none";
}