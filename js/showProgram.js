const urlParams = new URLSearchParams(window.location.search);
const courseId = urlParams.get("id");

const course = courses.find((c) => c.id === courseId);

if (!course) {
  document.body.innerHTML =
    '<h2 style="text-align:center;">الكورس غير موجود</h2>';
  throw new Error("Course not found");
}

document.title = course.title;
document.querySelector(".about-content h1").textContent = course.title;
document.querySelector(
  ".about-content p"
).innerHTML = `<a href="index.html">الرئيسية</a> / ${course.slug}`;
document.querySelector(".program__video img").src = course.video;
document.querySelector(
  ".program__title"
).textContent = `تعرف على ${course.slug}`;
document.querySelector(".program__text").textContent = course.description;

// Skills
const skillsContainer = document.querySelector(".program__tags");
skillsContainer.innerHTML = course.skills
  .map((skill) => `<span>${skill}</span>`)
  .join("");

// Modules
const moduleContainer = document.querySelector(".program__accordion");
moduleContainer.innerHTML = course.modules
  .map(
    (m) => `
    <details><summary>${m}</summary></details>
  `
  )
  .join("");

// Instructor
const trainer = document.querySelector(".program__trainer");
trainer.innerHTML = `
    <img src="${course.instructor.image}" alt="${course.instructor.name}" />
    <div>
      <h4>${course.instructor.name}</h4>
      <p>${course.instructor.intro}</p>
      <p>${course.instructor.bio}</p>
    </div>
  `;

// Sidebar Features
const featureBox = document.querySelector(".program__features");
featureBox.innerHTML = course.features
  .map(
    (f) => `
    <li><i class="fas fa-check"></i> ${f}</li>
  `
  )
  .join("");

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
