// Add smooth scrolling to all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Create course cards dynamically
function createCourseCards() {
    const coursesGrid = document.querySelector('.courses-grid');
    const courseImages = [
        'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
        'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
        'https://images.unsplash.com/photo-1505238680356-667803448bb6?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
    ];

    const courseData = Array(8).fill({
        title: 'دورة الواجهة الأمامية لتطوير الويب',
        description: 'دورة تعرض تفاصيل عن الواجهة الأمامية للمواقع والتطبيقات',
        price: '47.962',
        rating: 5
    });

    courseData.forEach((course, index) => {
        const card = document.createElement('div');
        card.className = 'course-card';
        card.innerHTML = `
            <img src="${courseImages[index % courseImages.length]}" alt="دورة برمجة">
            <div class="card-content">
                <h3>${course.title}</h3>
                <p>${course.description}</p>
                <div class="rating">
                    <span class="stars">${'★'.repeat(course.rating)}</span>
                    <span class="price">${course.price} درهم</span>
                </div>
                <div class="buttons">
                    <button class="view-btn">عرض البرنامج</button>
                    <button class="register-btn">التسجيل</button>
                </div>
            </div>
        `;
        coursesGrid.appendChild(card);
    });
}

// Animate counter numbers
function animateCounter(counter) {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const increment = target / 200;

    if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(() => animateCounter(counter), 1);
    } else {
        counter.innerText = target;
    }
}

// Initialize counters when they come into view
function initCounters() {
    const counters = document.querySelectorAll('.counter');
    const options = {
        threshold: 1,
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, options);

    counters.forEach(counter => observer.observe(counter));
}

// Add hover effects to buttons
function addButtonEffects() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseover', function() {
            this.style.transform = 'translateY(-2px)';
        });
        button.addEventListener('mouseout', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    createCourseCards();
    initCounters();
    addButtonEffects();
});