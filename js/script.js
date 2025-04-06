document.addEventListener("DOMContentLoaded", () => {
  checkUserLogin();
});

/**
 * Handles navigation to a new page.
 */
function navigateTo(path) {
  window.location.href = path;
}

/**
 * Toggles mobile menu visibility.
 */
function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

/**
 * Checks if a user is logged in and updates UI.
 */
function checkUserLogin() {
  let user = localStorage.getItem("user");

  if (user) {
    user = JSON.parse(user);

    document.getElementById("loginButton").textContent = "تسجيل الخروج";
    document
      .querySelector(".header__buttons")
      .insertAdjacentHTML(
        "beforeend",
        `<p><span>${user.name}</span> مرحبا</p>`
      );
  }
}

/**
 * Plays or pauses the course video.
 */
function playVideo() {
  const video = document.querySelector(".video");
  const playButton = document.querySelector(".video__play-button");

  if (video.paused) {
    video.play();
    playButton.style.display = "none";
  } else {
    video.pause();
    playButton.style.display = "block";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // Initialize Swiper for Testimonials
  new Swiper(".testimonials__slider", {
    loop: true, // Enable looping
    loopAdditionalSlides: 1, // Fix looping issues
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".testimonials-pagination", // Ensure this matches HTML
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  // Initialize Swiper for Courses Section
  new Swiper(".mySwiper", {
    loop: true, // Enable looping
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".courses-pagination", // Unique class for courses
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });
});

// Handle button click event
document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".support__button");

  button.addEventListener("click", function (event) {
    event.preventDefault();
    alert("تم النقر على زر اعرف المزيد!");
  });
});

// Counter animation effect
document.addEventListener("DOMContentLoaded", function () {
  const statsNumbers = document.querySelectorAll(".stats__number");

  statsNumbers.forEach((stat) => {
    let target = +stat.getAttribute("data-target");
    let count = 0;
    let speed = Math.floor(target / 15);

    function updateCount() {
      if (count < target) {
        count += speed;
        stat.textContent = count;
        setTimeout(updateCount, 30);
      } else {
        stat.textContent = target + "+";
      }
    }

    updateCount();
  });
});

// Scroll to top functionality
document.addEventListener("DOMContentLoaded", function () {
  const scrollTopBtn = document.querySelector(".footer__scroll-top");

  scrollTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
