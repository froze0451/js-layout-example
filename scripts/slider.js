/*elements*/
let rightButton = document.querySelector(".turn_right");
let leftButton = document.querySelector(".turn_left");
let action = document.querySelector(".slide_field").style;

let drag = document.querySelector(".slide_field");
let startCursorX;
let startX;

let dot1 = document.querySelector(".dot_1");
let dot2 = document.querySelector(".dot_2");
let dot3 = document.querySelector(".dot_3");
	
/* functions */

function minus1(par1) {
	let b = "";
  		for (let i = 0; i < par1.length -1; i++) {
    	b = b + par1[i];
  }
  return b;
};

function activateDot() {
	let noPerc = minus1(action.getPropertyValue("left"));
	let decloration = Number(noPerc);

	if (decloration === 0) {
		dot1.classList.add("active_dot");
		dot2.classList.remove("active_dot");
		dot3.classList.remove("active_dot");
	} else if (decloration === -100) {
		dot1.classList.remove("active_dot");
		dot2.classList.add("active_dot");
		dot3.classList.remove("active_dot");
	} else {
		dot1.classList.remove("active_dot");
		dot2.classList.remove("active_dot");
		dot3.classList.add("active_dot");
	}
}

/* events */

rightButton.addEventListener("click", function(){
	
	drag.style.transition = "1s ease";

	console.log(action.getPropertyValue("left"));
	let noPerc = minus1(action.getPropertyValue("left"));
	let decloration = Number(noPerc);
	console.log(decloration);

	if (decloration === 0) {
		document.querySelector(".slide_field").style.left = "-100%";
	} else if (decloration === -100) {
		document.querySelector(".slide_field").style.left = "-200%";
	} else {
		document.querySelector(".slide_field").style.left = "0%";
	}
	activateDot();
});

leftButton.addEventListener("click", function(){
	
	drag.style.transition = "1s ease";

	console.log(action.getPropertyValue("left"));
	let noPerc = minus1(action.getPropertyValue("left"));
	let decloration = Number(noPerc);
	console.log(decloration);

	if (decloration === 0) {
		document.querySelector(".slide_field").style.left = "-200%";
	} else if (decloration === -100) {
		document.querySelector(".slide_field").style.left = "0%";
	} else {
		document.querySelector(".slide_field").style.left = "-100%";
	}
	activateDot();
});		

dot1.addEventListener("click", function(){
		drag.style.transition = "1s ease";
		document.querySelector(".slide_field").style.left = "0%";
		activateDot();
})

dot2.addEventListener("click", function(){
		drag.style.transition = "1s ease";
		document.querySelector(".slide_field").style.left = "-100%";
		activateDot();
})

dot3.addEventListener("click", function(){
		drag.style.transition = "1s ease";
		document.querySelector(".slide_field").style.left = "-200%";
		activateDot();
})


/* Drag & Drop */
/* functions */

let onMouseMove = function() {
	drag.style.transition = "";
	drag.style.left = startX + ((event.pageX-startCursorX)/13) + "%";
};
	

let slideTransition = function() {

	drag.style.transition = "1s ease";
	let dragLeft = drag.style.getPropertyValue("left").replace("%","")*1;


	if (dragLeft >= -50) {
		console.log("first_slide");
		drag.style.left = "0%";
	} else if (dragLeft < -50 && dragLeft >= -150) {
		console.log("second_slide");
		drag.style.left = "-100%";
	} else {
		console.log("third_slide");
		drag.style.left = "-200%";
	}
	activateDot();
};

/* events */

drag.addEventListener("mousedown",function() {
	
	startCursorX = event.pageX;//Начальная позиция курсора по оси X
	startX = drag.style.getPropertyValue("left").replace('%','')*1; // Нам нужны только цыфры без %
	
	drag.addEventListener("mousemove", onMouseMove);

	
	drag.onmouseleave = function() {
		drag.removeEventListener("mousemove", onMouseMove);
		drag.onmouseleave = null;
		console.log(drag.style.left);
		console.log("cursor left");

		slideTransition();

		drag.addEventListener("transitioncancel", function(){
		
		});
	};

	drag.onmouseup = function() {
		drag.removeEventListener("mousemove", onMouseMove);
		drag.onmouseup = null;
		console.log(drag.style.left);
		console.log("drag ends");

		slideTransition();
		drag.addEventListener("transitioncancel", function(){
		
		});
	};
});


drag.ondragstart = function() {
  return false;
};