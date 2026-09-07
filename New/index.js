const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchToggle"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");

      let getMode = localStorage.getItem("mode");
          if(getMode && getMode === "dark-mode"){
            body.classList.add("dark");
          }

// js code to toggle dark and light mode
      modeToggle.addEventListener("click" , () =>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");

        // js code to keep user selected mode even page refresh or file reopen
        if(!body.classList.contains("dark")){
            localStorage.setItem("mode" , "light-mode");
        }else{
            localStorage.setItem("mode" , "dark-mode");
        }
      });

// js code to toggle search box
        searchToggle.addEventListener("click" , () =>{
        searchToggle.classList.toggle("active");
      });
 
      
//   js code to toggle sidebar
sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
});

body.addEventListener("click" , e =>{
    let clickedElm = e.target;

    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
});


/*----typing */
const dynamicText = document.querySelector("h3 span");
const words = ["Fullstack developer  ", "Web design", "Website development ", "App development"];

// Variables to track the position and deletion status of the word
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");

    if (!isDeleting && charIndex < currentWord.length) {
        // If condition is true, type the next character
        charIndex++;
        setTimeout(typeEffect, 100);
    } else if (isDeleting && charIndex > 0) {
        // If condition is true, remove the previous character
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        // If word is deleted then switch to the next word
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
}
typeEffect();

function showSection(sectionId, element) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Remove active class from all tabs
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    // Show the active section
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.style.display = 'block';
    }

    // Add active class to the clicked tab
    element.classList.add('active');
}



//-------------slide img ---------//

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const indicators = document.querySelectorAll('.indicator');
    let currentIndex = 0;
    const totalSlides = indicators.length;

    const updateSlide = (index) => {
        slides.style.transform = `translateX(${-index * 100}%)`;
        indicators.forEach((indicator, i) => {
            if (i === index) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    };

    const nextSlide = () => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlide(currentIndex);
    };

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentIndex = index;
            updateSlide(currentIndex);
        });
    });

    setInterval(nextSlide, 3000);

    updateSlide(currentIndex);
});

/*-------> button scoll <--------*/
 // Back to Top Button Functionality
 const backToTopButton = document.getElementById('back-to-top');
  
 // Toggle Back to Top Button Visibility
 const toggleBackToTopVisibility = () => {
   if (window.scrollY > 300) {
     backToTopButton.classList.add('show');
   } else {
     backToTopButton.classList.remove('show');
   }
 };
 
 // Check visibility on scroll
 window.addEventListener('scroll', toggleBackToTopVisibility);
 
 // Ensure the arrow is hidden on page load
 document.addEventListener('DOMContentLoaded', toggleBackToTopVisibility);
 
 // Scroll to the top when clicking the button
 backToTopButton.addEventListener('click', () => {
   window.scrollTo({
     top: 0,
     behavior: 'smooth',
   });
 });
 

/*---===== smooth scroll page =====---*/
// Smooth scroll functionality for navigation links
document.querySelectorAll('.smooth-scroll').forEach(link => {
  link.addEventListener('click', function (event) {
    const targetID = this.getAttribute('href');
    if (targetID.startsWith('#')) {
      event.preventDefault();
      document.querySelector(targetID).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
});

/*------> scroll animetion class <-----------*/

document.addEventListener("DOMContentLoaded", () => {
const boxes = document.querySelectorAll(".About");

const handleScroll = () => {
  boxes.forEach((box) => {
    const rect = box.getBoundingClientRect();
    const animationType = box.getAttribute("data-animate");

    if (rect.top < window.innerHeight - 100 && rect.bottom > 100) {
      // Add animation class if the element is in the viewport
      box.classList.add(animationType);
    } else {
      // Remove animation class if the element is out of the viewport
      box.classList.remove(animationType);
    }
  });
};

window.addEventListener("scroll", handleScroll);
handleScroll(); // Trigger on load
});



 // Function to update scores dynamically
 function updateScores() {
  const scoreContainers = document.querySelectorAll('.score-container');

  scoreContainers.forEach((container, index) => {
      const scoreElement = container.querySelector('.score');
      const targetScore = parseInt(container.dataset.target, 10);
      let currentScore = 0;

      // Update each score with its own interval
      const interval = setInterval(() => {
          if (currentScore < targetScore) {
              currentScore++;
              scoreElement.textContent = currentScore + '%';
          } else {
              clearInterval(interval);
              container.querySelector('.text').textContent = 'Complete!';
          }
      }, 30 + index * 10); // Slightly stagger intervals for visual effect
  });
}

// Start updating scores
updateScores();


  //------------alert contact form submit -------------//

  
  
  

  