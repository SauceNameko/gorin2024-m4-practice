const ham = document.querySelector(".ham")
const offcanvas = document.querySelector(".offcanvas")
const clo = document.querySelector(".btn-close")
const sec_2_img = document.querySelector(".sec-2-img");
ham.addEventListener("click", () => {
    offcanvas.classList.toggle("show");
})
clo.addEventListener("click", () => {
    offcanvas.classList.toggle("show");
})
window.addEventListener("scroll", (e) => {
    const win_hei = window.innerHeight;
    const bottom_2 = sec_2_img.getBoundingClientRect().bottom;

    if (bottom_2 * 0.75 < win_hei) {
        sec_2_img.classList.add("active");
    }
});
const circles = document.querySelectorAll(".circle");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
let count = 0;
const datas = document.querySelectorAll(".sec-1-img");
const video = document.querySelector("video");
const items = Array.from(datas);
items.push(video);

circles.forEach((circle, index) => {
    circle.addEventListener("click", () => {
        count = index;
        counter();
    });
});

left.addEventListener("click", () => {
    count = count == 0 ? items.length - 1 : count - 1;
    counter()
});

right.addEventListener("click", () => {
    count = count == items.length - 1 ? 0 : count + 1;
    counter()
});

const counter = () => {
    items.forEach((item, index) => {
        if (index == count) {
            item.classList.add("active");
            circles[index].classList.add("active");
        } else {
            item.classList.remove("active");
            circles[index].classList.remove("active");
        }
    })
    video.pause();
}
let flag = false;
let time
let interval = 0;
video.addEventListener("click", () => {
    flag = !flag;
    if (flag) {
        video.play();
        clearInterval(time);
    } else {
        video.pause();
        timer()
    }
})

const timer = () => {
    time = setInterval(() => {
        interval += 1;
        if (interval % 5 == 0) {
            count = count == items.length - 1 ? 0 : count + 1;
        }
        counter();
    }, 1000);
}
timer();