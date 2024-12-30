// Scroll-to-Top Button Functionality
const scrollTopBtn = document.getElementById('scroll-top-btn');
window.onscroll = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopBtn.style.display = 'block';
  } else {
    scrollTopBtn.style.display = 'none';
  }
};

scrollTopBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// };
function openFacebook(){
    window.open("https://www.facebook.com/FarhadDaryaOfficialPage", "_blank"); 
    
}
// Add interactive effects to the header text
const header = document.getElementById('main-header');

// Rotate header text on click
header.addEventListener('click', () => {
  header.style.transform = 'rotate(360deg)';
  setTimeout(() => {
    header.style.transform = 'none';
  }, 1000);
});
