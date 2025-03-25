// script.js

// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name && email && message) {
    alert('Thank you for contacting Smart Waste Management! We will get back to you soon.');
    document.getElementById('contact-form').reset();
  } else {
    alert('Please fill out all fields.');
  }
});

// Smooth Scrolling for Navigation
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

 // Support Chat Elements
const supportContainer = document.getElementById('support-container');
const supportToggle = document.getElementById('support-toggle');
const closeSupport = document.getElementById('close-support');
const supportMessages = document.getElementById('support-messages');
const supportInput = document.getElementById('support-input');
const sendSupportButton = document.getElementById('send-support-button');

// Toggle Support Chat Visibility
supportToggle.addEventListener('click', () => {
  supportContainer.classList.add('visible');
  supportInput.focus();
});

closeSupport.addEventListener('click', () => {
  supportContainer.classList.remove('visible');
});

// Send Message Function
function sendMessage() {
  const message = supportInput.value.trim();
  if (message) {
    addMessage(message, 'user');
    supportInput.value = '';
    
    // Simulate support response
    setTimeout(() => {
      const response = getSupportResponse(message);
      addMessage(response, 'support');
    }, 1000);
  }
}

// Add Message to Chat
function addMessage(text, sender) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', sender);
  messageElement.textContent = text;
  supportMessages.appendChild(messageElement);
  supportMessages.scrollTop = supportMessages.scrollHeight;
}

// Get Support Response
function getSupportResponse(message) {
  const lowerMsg = message.toLowerCase();
  
  if (lowerMsg.includes('hello') || lowerMsg.includes('hi')) {
    return "Hello! Welcome to Smart Waste Support. How can we help you today?";
  } else if (lowerMsg.includes('bin') || lowerMsg.includes('container')) {
    return "Our smart bins use sensors to monitor fill levels and optimize collection routes.";
  } else if (lowerMsg.includes('collection') || lowerMsg.includes('pickup')) {
    return "Collections are scheduled based on real-time fill level data from our sensors.";
  } else if (lowerMsg.includes('recycle') || lowerMsg.includes('sort')) {
    return "We offer advanced recycling solutions with automated sorting technology.";
  } else if (lowerMsg.includes('problem') || lowerMsg.includes('issue')) {
    return "I'm sorry to hear you're having an issue. Can you please provide more details?";
  } else {
    return "Thank you for your message. Our team will review your inquiry and respond shortly.";
  }
}

// Event Listeners
sendSupportButton.addEventListener('click', sendMessage);
supportInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') sendMessage();
});

// Close chat when clicking outside
document.addEventListener('click', (e) => {
  if (!supportContainer.contains(e.target) && e.target !== supportToggle) {
    supportContainer.classList.remove('visible');
  }
});