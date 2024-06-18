document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function updateActiveLink() {
  const aboutSection = document.getElementById('about');
  const portfolioSection = document.getElementById('portfolio');
  const projectSection = document.getElementById('project');

  const aboutLink = document.getElementById('about-link');
  const portfolioLink = document.getElementById('portfolio-link');
  const projectLink = document.getElementById('project-link');

  const aboutPosition = aboutSection.getBoundingClientRect().top;
  const portfolioPosition = portfolioSection.getBoundingClientRect().top;
  const projectPosition = projectSection.getBoundingClientRect().top;

  const viewportHeight = window.innerHeight;

  aboutLink.classList.remove('active');
  portfolioLink.classList.remove('active');
  projectLink.classList.remove('active');

  if (aboutPosition >= 0 && aboutPosition < viewportHeight) {
      aboutLink.classList.add('active');
  } else if (portfolioPosition >= 0 && portfolioPosition < viewportHeight) {
      portfolioLink.classList.add('active');
  } else if (projectPosition >= 0 && projectPosition < viewportHeight) {
      projectLink.classList.add('active');
  }
}

window.addEventListener('scroll', updateActiveLink);

updateActiveLink();

const infoIcon = document.getElementById('info-icon');
const infoBox = document.getElementById('info-box');

function toggleInfoBox(){
    if(infoBox.style.left === '-50%'){

    infoBox.style.left = '0';
} else{
    infoBox.style.left = '-50%';
    }
}

infoIcon.addEventListener('click', toggleInfoBox);

const closeButton = document.getElementById('close-button');

closeButton.addEventListener('click', () =>{
    infoBox.style.left = '-50%';
})

document.addEventListener('click', (event) =>{
    const target = event.target;

    if(!infoBox.contains(target) && target !== infoIcon){
        infoBox.style.left = '-50%';
    }
})

function moveToNewSection(){
    const currentSection = document.querySelector('.current-section');
    const nextSection = currentSection.nextElementSibling;
}

if(nextSection){
    nextSection.scrollIntoView({
        behavior: 'smooth'
    })
    currentSection.classList.remove('current-section');
    nextSection.classList.add('current-section');
}

function moveToNewSection(){
    const currentSection = document.querySelector('.current-section');
    const previousSection = currentSection.previousElementSibling;
}

if(nextSection){
    previousSection.scrollIntoView({
        behavior: 'smooth'
    })
    currentSection.classList.remove('current-section');
    previousSection.classList.add('current-section');
}

window.addEventListener('wheel', function(event){
    if(event.deltaY > 0){
        moveToNewSection();
    }
    else if(event.deltaY < 0){
        moveToPreviousSection();
    }
})

function resetLine(){
    const leftLine = document.querySelector('.left-line');
    const rightLine = document.querySelector('.right-line');

    leftLine.style.animation = 'none';
    rightLine.style.animation = 'none';

    leftLine.offsetHeight;
    rightLine.offsetHeight;

    leftLine.style.animation = 'lineEntry 1s ease-in-out forwards';
    rightLine.style.animation = 'lineEntry 1s ease-in-out forwards';
}

resetLine();

function handlePageChange(event){
    resetLine;
}

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = event.target.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
        resetLine();
    });
});
