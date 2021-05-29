var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 3000;	// Time Between Switch
	 
// Image List
images[0] = '<img src="images/képek/haztartasi/alufolia.jpg">';
images[1] = '<img srac="images/képek/alkohol/asahi.jpg">';
images[2] = '<img src="images/képek/elelmiszer/joghurt.jpg">';
images[3] = '<img src="images/képek/uditok/7up.jpg">';

// Change Image
function changeImg(){
	document.slide.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;