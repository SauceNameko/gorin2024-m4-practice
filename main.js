const ham = document.querySelector(".ham")
const offcanvas = document.querySelector(".offcanvas")
const clo = document.querySelector(".btn-close")
const btn = document.querySelector(".contact-btn");
const sec_2_img = document.querySelector(".sec-2-img");
ham.addEventListener("click", () => {
    offcanvas.classList.toggle("show");
})
clo.addEventListener("click", () => {
    offcanvas.classList.toggle("show");
})
window.addEventListener("scroll", (e) => {
    const win_hei = window.innerHeight;
    const bottom_1 = btn.getBoundingClientRect().bottom;
    const bottom_2 = sec_2_img.getBoundingClientRect().bottom;
    if (bottom_1 * 0.9 < win_hei) {
        btn.classList.add("active");
    }
    if (bottom_2 * 0.75 < win_hei) {
        sec_2_img.classList.add("active");
    }
});
