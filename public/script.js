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
    document.body.style.overflow = "hidden";
}

function closeModal() {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
}

closeBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
});
