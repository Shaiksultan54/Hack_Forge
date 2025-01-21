// Countdown Timer
function toggleMenu() {
  const menu = document.getElementById('nav-menu');
  menu.classList.toggle('active');
}

const countdown = () => {
  const eventDate = new Date("2025-01-25T09:00:00").getTime();
  const now = new Date().getTime();
  const gap = eventDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(gap / day);
  const hours = Math.floor((gap % day) / hour);
  const minutes = Math.floor((gap % hour) / minute);
  const seconds = Math.floor((gap % minute) / second);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  if (gap < 0) {
    clearInterval(countdownInterval);
    document.querySelector(".countdown").innerHTML = "<p>Event has started!</p>";
  }
};

const countdownInterval = setInterval(countdown, 1000);
countdown();


    // Add click event to toggle rule description
    const ruleItems = document.querySelectorAll('.rule-item');

    ruleItems.forEach(item => {
      item.addEventListener('click', () => {
        const icon = item.querySelector('.icon');

        // Toggle the "expanded" class
        item.classList.toggle('expanded');

        // Change the icon between "down" and "up"
        if (item.classList.contains('expanded')) {
          icon.classList.remove('fa-chevron-down');
          icon.classList.add('fa-chevron-up');
        } else {
          icon.classList.remove('fa-chevron-up');
          icon.classList.add('fa-chevron-down');
        }
      });
    });


//slider sponser
    const sliderTrack = document.querySelector('.slider-track');

    // Pause animation on hover
    sliderTrack.addEventListener('mouseenter', () => {
      sliderTrack.style.animationPlayState = 'paused';
    });
  
    // Resume animation on mouse leave
    sliderTrack.addEventListener('mouseleave', () => {
      sliderTrack.style.animationPlayState = 'running';
    });
  

  // Adding interactivity to the domain cards
document.addEventListener('DOMContentLoaded', () => {
  const domainCards = document.querySelectorAll('.domain-card');

  domainCards.forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('active'); // Toggle visibility of text when clicked
    });
  });
});


//time line start
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".timeline-item");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.5 }
  );

  items.forEach((item) => observer.observe(item));
});

//time line end