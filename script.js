// This script will handle the contact form submission

document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for contacting us! We will get back to you soon.');
  document.getElementById('contact-form').reset();
});
