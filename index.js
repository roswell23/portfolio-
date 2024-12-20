document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Form submission handling
  const form = document.querySelector('form');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
      alert(`Thank you, ${name}! Your message has been sent.`);
      form.reset();
    } else {
      alert('Please fill out all fields.');
    }
  });

  // Dynamic copyright year
  const currentYear = new Date().getFullYear();
  document.querySelector('footer p').textContent = `© ${currentYear} Roswell Cruz. All rights Reserved.`;

  // Typing effect for the subtitle
  const subtitle = document.querySelector('.content-wrapper p');
  const text = subtitle.textContent;
  subtitle.textContent = '';
  let i = 0;
  function typeWriter() {
    if (i < text.length) {
      subtitle.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 50);
    }
  }
  typeWriter();
});