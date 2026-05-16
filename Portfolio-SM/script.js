// Scroll reveal animations
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
reveals.forEach(el => observer.observe(el));

// Handle photo display
function handlePhoto(imgId, placeholderId) {
  const img = document.getElementById(imgId);
  if (img && img.src && img.src !== window.location.href) {
    img.style.display = 'block';
    const ph = document.getElementById(placeholderId);
    if (ph) ph.style.display = 'none';
  }
}

handlePhoto('profile-img', 'photo-placeholder');
handlePhoto('voxi-img', 'voxi-placeholder');
handlePhoto('powerbi-img', 'jobfinder-placeholder');
handlePhoto('portfolio-img', 'portfolio-placeholder');
