var jQ = jQuery.noConflict();

window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progress-bar").style.width = scrolled + "%";
}

jQ(document).ready(function() {
	
	jQ('.expandable-content').hide();
	jQ('.expandable-header').click(function() {

		if( jQ( this ).hasClass( 'expanded' ) ) {
			jQ( this ).removeClass( 'expanded' );
			jQ( this ).next().slideUp('fast');
		}
		
		else {
			jQ( this ).addClass( 'expanded' );
			jQ( this ).next().slideDown('fast');
		}
	});
	
	// Table of Contents
	const tocToggle = document.getElementById("toc-toggle");
	const toc = document.getElementById("toc");
	
	tocToggle.addEventListener("click", function () {
		toc.classList.toggle("active");
	});
	
	// Close the menu when a menu item is clicked
	const tocItems = toc.querySelectorAll("a");
	tocItems.forEach(function (item) {
		item.addEventListener("click", function () {
			toc.classList.remove("active");
		});
	});
	
	// Close the menu when clicking outside of it
	document.addEventListener("click", function (event) {
		if (!toc.contains(event.target) && event.target !== tocToggle) {
			toc.classList.remove("active");
		}
	});
	
	
	// Mobile Menu
	const mmToggle = document.getElementById("mobile-menu-toggle");
	const mm = document.getElementById("mobile-menu");
	
	mmToggle.addEventListener("click", function () {
		mm.classList.toggle("active");
	});
	
	// Close the menu when a menu item is clicked
	const menuItems = toc.querySelectorAll("a");
	menuItems.forEach(function (item) {
		item.addEventListener("click", function () {
			mm.classList.remove("active");
		});
	});
	
	// Close the menu when clicking outside of it
	document.addEventListener("click", function (event) {
		if (!mm.contains(event.target) && event.target !== mmToggle) {
			mm.classList.remove("active");
		}
	});
	
	
	
	// Get the modal
	var imageModal = document.getElementById("image-modal");
	
	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];
	
	// Get the button that opens the modal
document.querySelectorAll('.zoom').forEach(item => {
	  item.addEventListener('click', event => {
		imageModal.style.display = "flex";
		imageModal.children[0].children[1].src = item.src;
	  })
	})	

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
	  imageModal.style.display = "none";
	}
	
	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	  if (event.target == imageModal) {
		imageModal.style.display = "none";
	  }
	}
	
	
	
});