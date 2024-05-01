const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "?��?���??��");
});

searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});

const badgeEl = document.querySelector("header .badges");

window.addEventListener(
  "scroll",
  _.throttle(function () {
    console.log(window.scrollY);

    if (window.scrollY > 500) {
      // 배�?? ?��기기
      // gsap.to(?��?��, �??��?���?, ?��?��);
      gsap.to(badgeEl, 0.15, {
        opacity: 0,
        display: "none",
      });
    } else {
      // 배�?? 보이�?
      gsap.to(badgeEl, 0.15, {
        opacity: 1,
        display: "block",
      });
    }
  }, 300)
);

const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7,
    opacity: 1,
  });
});

new Swiper(".promotion .swiper-container", {
  slidesPerView: 3, // �ѹ��� ������ �����̵� ����
  spaceBetween: 10, // �����̵� ���� ����
  centeredSlides: true, // 1�� �����̵尡 ��� ���̱�
  loop: true,
  autoplay: {
    delay: 5000,
  },

  pagination: {
    el: ".promotion .swiper-pagination", // ������ ��ȣ ��� ������
    clickable: true, // ������� ������ ��ȣ ��� ����
  },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next",
  },
});

new Swiper(".notice-line .swiper-container", {
  direction: "vertical",
  autoplay: true,
  loop: true,
  autoplay: true,
});
