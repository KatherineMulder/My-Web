///////////highlight the current page on nav bar////////
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a').
forEach(link=> {
    if(link.href.includes(`${activePage}`)){
       link.classList.add('active');
    }
})

/////link to the attraction (attraction page)////
function openIT() {
    const url = [ ]
    window.open(url);
}


//Javascript array: to store a collection of images
let images = ["Media/sideshow-1.jpg",         
                "Media/sideshow-2.jpg",
                "Media/sideshow-3.jpg",
                "Media/sideshow-4.jpg",
                "Media/sideshow-5.jpg",
                "Media/sideshow-6.jpg",
                "Media/sideshow-7.jpg",
                "Media/sideshow-8.jpg",
                "Media/sideshow-9.jpg",		  
			 ];

let index = 0;
function autoSlideShow() {
	
	if (index == images.length - 1 ) {
		index = 0;
	} else {
		index = index + 1;
	}
	
	document.getElementById("slideShowImage").src = images[index];
	setTimeout(autoSlideShow, 2000);
}

window.onload = function(){
    autoSlideShow();
} 


////////// button for the contact form on hompage///////////

////////// button for the contact form on contact page////////