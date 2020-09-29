/*buttons*/
let left_but = document.querySelector(".clients_button:first-child");
let right_but = document.querySelector(".clients_button:last-child");

/*elements*/
let first = document.getElementById("cl_first");
let second = document.getElementById("cl_second");
let third = document.getElementById("cl_third");
let fourth = document.getElementById("cl_fourth");
let fifth = document.getElementById("cl_fifth");
let sixth = document.getElementById("cl_sixth");
let seventh = document.getElementById("cl_seventh");
let eighth = document.getElementById("cl_eighth");
let ninth = document.getElementById("cl_ninth");
let tenth = document.getElementById("cl_tenth");
let eleventh = document.getElementById("cl_eleventh");
let twelfth = document.getElementById("cl_twelfth");
let thirteenth = document.getElementById("cl_thirteenth");

/*classes*/
let one = document.querySelector(".one").className;
let two = document.querySelector(".two").className;
let three = document.querySelector(".three").className;
let four = document.querySelector(".four").className;
let five = document.querySelector(".five").className;
let six = document.querySelector(".six").className;
let seven = document.querySelector(".seven").className;
let eight = document.querySelector(".eight").className;
let nine = document.querySelector(".nine").className;
let ten = document.querySelector(".ten").className;
let eleven = document.querySelector(".eleven").className;
let twelve = document.querySelector(".twelve").className;
let thirteen = document.querySelector(".thirteen").className;

/*dots*/
let line_dots = document.querySelectorAll(".line_dot");
let dotCurrentPosition = 0;
let dotChangedPosition;

/*arrays*/
let arr_elements = [];
arr_elements.push(first, second, third, fourth, fifth, sixth, seventh, eighth, ninth, tenth, eleventh, twelfth, thirteenth);

let arr_classes = [];
arr_classes.push(one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen);


/*functions*/
function changeClassLeft() {
	arr_elements.forEach(function(element) {

		let currentClass = element.className;
		let currentPosition = arr_classes.indexOf(currentClass);
		element.classList.remove(currentClass);

		element.className = arr_classes[Number(currentPosition) + 1];	
		if (currentPosition === arr_classes.length - 1) {
			element.className = arr_classes[0];
		} 
	});
};

function changeClassRight() {
	arr_elements.forEach(function(element) {

		let currentClass = element.className;
		let currentPosition = arr_classes.indexOf(currentClass);
		element.classList.remove(currentClass);
		
		element.className = arr_classes[Number(currentPosition) - 1];	
		if (currentPosition === 0) {
			element.className = arr_classes[12];
		} 
	});	
}; 

function dotPositionLeft() { 
	
	dotChangedPosition = dotCurrentPosition - 1;
	if (dotChangedPosition === -1) {
		dotChangedPosition = 12;
	}

	line_dots[dotCurrentPosition].childNodes[0].classList.remove("active_line_dot");
	line_dots[dotChangedPosition].childNodes[0].classList.add("active_line_dot");
	dotCurrentPosition = dotChangedPosition;
}
	
function dotPositionRight() { 
	
	dotChangedPosition = dotCurrentPosition + 1;
	
	if (dotChangedPosition === 13) {
		dotChangedPosition = 0;
	}
	
	line_dots[dotCurrentPosition].childNodes[0].classList.remove("active_line_dot");
	line_dots[dotChangedPosition].childNodes[0].classList.add("active_line_dot");
	dotCurrentPosition = dotChangedPosition;
}

function mouseenterHandler({target}) {
  
  	line_dots.forEach(dots => dots.childNodes[0].classList.remove("active_line_dot"));
	target.childNodes[0].classList.add("active_line_dot");

	dotChangedPosition = Array.prototype.indexOf.call(line_dots, target);
	console.log(dotChangedPosition);

	dotChange();
};

function dotChange() {

	let positionDifference = dotChangedPosition - dotCurrentPosition;

		if (positionDifference > 0) {
	
			let i = dotCurrentPosition; 
			let howManyTimes = dotChangedPosition;
			
			function f() {
   			 	changeClassRight();
   			 	i++;
   				 if( i < howManyTimes ){
     		  		 setTimeout( f, 160 );
				}
				}
				f();
				
			} else if (positionDifference < 0) {

			let i = dotCurrentPosition; 
			let howManyTimes = dotChangedPosition;
			
			function f() {
   			 	changeClassLeft();
   			 	i--;
   				 if( i > howManyTimes ){
     		  		 setTimeout( f, 160 );
   			 	}
				}
				f();
		}
		dotCurrentPosition = dotChangedPosition;
};


/*EVENTS*/
left_but.addEventListener("click", changeClassLeft);
left_but.addEventListener("click", dotPositionLeft);
right_but.addEventListener("click", changeClassRight);
right_but.addEventListener("click", dotPositionRight);
line_dots.forEach(dot => { dot.addEventListener("click", mouseenterHandler) });


first.addEventListener("transitionstart", function(){
	left_but.removeEventListener("click", changeClassLeft);
	left_but.removeEventListener("click", dotPositionLeft);
	right_but.removeEventListener("click", changeClassRight);
	right_but.removeEventListener("click", dotPositionRight);
	line_dots.forEach(dot => { dot.removeEventListener("click", mouseenterHandler) });
});


first.addEventListener("transitionend", function(){
	left_but.addEventListener("click", changeClassLeft);
	left_but.addEventListener("click", dotPositionLeft);
	right_but.addEventListener("click", changeClassRight);
	right_but.addEventListener("click", dotPositionRight);
	line_dots.forEach(dot => { dot.addEventListener("click", mouseenterHandler) });
});