const barFuntion = function () {
  document.querySelectorAll('.navbar a').forEach(element => element.classList.remove('active'));
  this.classList.add('active');

}
const navbar = document.querySelectorAll('.navbar a');
navbar.forEach(link => {
  link.addEventListener('click', barFuntion)
})


// Textwriting effect

const texts = [
  'Fontend Developer',
  'UX/UI Explorer',
  'Web Designer',
];

let textIndex = 0; //which sts we are in 
let charIndex = 0; // which letter we re in 
let isDeleting = false; // we re typing or deleting 
const typingSpeed = 100; // how fast is letter to appear 
const pauseTime = 1000; // wait time after tyting a whole stc

const typingText = document.getElementById('typing-text');


function typeEffect(){
  const currentText = texts[textIndex]; // current stc
  const visibaleText = currentText.slice(0, charIndex); // text being typed letter by letter 

  typingText.textContent = visibaleText; // update elements


  if (!isDeleting && charIndex < currentText.length) {
    charIndex++; 
    setTimeout(typeEffect, typingSpeed);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, typingSpeed / 2) // faster deleting
  } else {
    isDeleting = !isDeleting;

    if (!isDeleting){
      textIndex = (textIndex + 1) % texts.length;
    }
    setTimeout(typeEffect, pauseTime)
  }

}

typeEffect(); 

// socials
const socials = [
  {
    platform: "GitHub",
    icon: "bxl-github",
    url: "https://github.com/Fatima20027"
  },
  {
    platform: "Twitter",
    icon: "bxl-twitter",
    url: "https://x.com/FatimaHailou", 
  },
  {
    platform: "Linkedin",
    icon: "bxl-linkedin",
    url: "https://www.linkedin.com/in/fatima-hailou-985779277/",
  },
];

const socialLinksContainer = document.querySelector('.social-links');

socials.forEach(link => {
  if (link.url){
    const a = document.createElement('a');
    a.href = link.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.title = link.platform;
    a.className = 'social-link';

    const icon = document.createElement('i');
    icon.className = `bx ${link.icon}`;

    a.appendChild(icon);
    socialLinksContainer.appendChild(a);
  }
});

