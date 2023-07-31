const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let currentSlideIndex = 0; 
		const bannerImgElement = document.getElementById("bannerImg");  	//creation de la constante banner et tagline
		const tagLineElement = document.getElementById("tagLine");			

		function updateSlide() {
			const currentSlide = slides[currentSlideIndex];
			bannerImgElement.src = `./assets/images/slideshow/${currentSlide.image}`;
			tagLineElement.innerHTML = currentSlide.tagLine;
		}

		updateSlide();
		
		document.getElementById("arrow_left").addEventListener("click", function() {
			currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
			updateSlide();
		});

		document.getElementById("arrow_right").addEventListener("click", function() {
			currentSlideIndex = (currentSlideIndex + 1) % slides.length;
			updateSlide();
		});


function goToSlide(slideIndex) {
	currentSlideIndex = slideIndex;				//quand j'apuis sur un bouton ça actualise le slide et le bouton 
	updateSlide();
	updateDots();
}

const dotsContainer = document.querySelector('.dots'); 		//pour sélectionner l'élément HTML qui a la classe "dots" et le stocke dans la constante dotsContainer

slides.forEach((slide, index) => {
	const dot = document.createElement('div');		
	dot.classList.add('dot');
	dot.addEventListener('click', () => {			
	goToSlide(index);
	});
	dotsContainer.appendChild(dot);
});

const dots = Array.from(dotsContainer.children);
dots[0].classList.add('dot_selected');


function updateDots() {
	dots.forEach((dot, index) => {
	  dot.classList.toggle('dot_selected', index === currentSlideIndex);
	});
  }
  
  // ...
  
  document.getElementById("arrow_left").addEventListener("click", function() {				//deplacement du point en fonction du defilement de slides
	currentSlideIndex = (currentSlideIndex + slides.length) % slides.length;
	updateSlide();
	updateDots();
  });
  
  document.getElementById("arrow_right").addEventListener("click", function() {
	currentSlideIndex = (currentSlideIndex) % slides.length;
	updateSlide();
	updateDots();
  });
  