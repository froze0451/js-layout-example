const first_3d = document.getElementById("first-3d");
const second_3d = document.getElementById("second-3d");
const third_3d = document.getElementById("third-3d");
const fourth_3d = document.getElementById("fourth-3d");

first_3d.addEventListener("click", function() {

	console.log('one');
	if (first_3d.classList.contains("left")) {

		first_3d.style.zIndex = "3";
		second_3d.style.zIndex = "2";
		third_3d.style.zIndex = "0";
		fourth_3d.style.zIndex = "1";

		first_3d.classList.add("center");
		first_3d.classList.remove("left");

		second_3d.classList.add("right");
		second_3d.classList.remove("center");

		third_3d.classList.add("back");
		third_3d.classList.remove("right");

		fourth_3d.classList.add("left");
		fourth_3d.classList.remove("back");

	} else if (first_3d.classList.contains("right")) {

		first_3d.style.zIndex = "3";
		second_3d.style.zIndex = "1";
		third_3d.style.zIndex = "0";
		fourth_3d.style.zIndex = "2";

		first_3d.classList.add("center");
		first_3d.classList.remove("right");

		second_3d.classList.add("right");
		second_3d.classList.remove("back");

		third_3d.classList.add("back");
		third_3d.classList.remove("left");

		fourth_3d.classList.add("left");
		fourth_3d.classList.remove("center");
	}
})

second_3d.addEventListener("click", function() {
 	console.log('two');
	if (second_3d.classList.contains("left")) {

		first_3d.style.zIndex = "1";
		second_3d.style.zIndex = "3";
		third_3d.style.zIndex = "2";
		fourth_3d.style.zIndex = "0";

		second_3d.classList.add("center");
		second_3d.classList.remove("left");

		third_3d.classList.add("right");
		third_3d.classList.remove("center");

		fourth_3d.classList.add("back");
		fourth_3d.classList.remove("right");

		first_3d.classList.add("left");
		first_3d.classList.remove("back");

	} else if (second_3d.classList.contains("right")) {

		first_3d.style.zIndex = "2";
		second_3d.style.zIndex = "3";
		third_3d.style.zIndex = "1";
		fourth_3d.style.zIndex = "0";

		second_3d.classList.add("center");
		second_3d.classList.remove("right");

		third_3d.classList.add("right");
		third_3d.classList.remove("back");

		fourth_3d.classList.add("back");
		fourth_3d.classList.remove("left");

		first_3d.classList.add("left");
		first_3d.classList.remove("center");


	}
})

third_3d.addEventListener("click", function() {
	console.log('three');
	if (third_3d.classList.contains("left")) {

		first_3d.style.zIndex = "0";
		second_3d.style.zIndex = "1";
		third_3d.style.zIndex = "3";
		fourth_3d.style.zIndex = "2";

		third_3d.classList.add("center");
		third_3d.classList.remove("left");

		fourth_3d.classList.add("right");
		fourth_3d.classList.remove("center");

		first_3d.classList.add("back");
		first_3d.classList.remove("right");

		second_3d.classList.add("left");
		second_3d.classList.remove("back");

	} else if (third_3d.classList.contains("right")) {

		first_3d.style.zIndex = "0";
		second_3d.style.zIndex = "2";
		third_3d.style.zIndex = "3";
		fourth_3d.style.zIndex = "1";

		third_3d.classList.add("center");
		third_3d.classList.remove("right");

		fourth_3d.classList.add("right");
		fourth_3d.classList.remove("back");

		first_3d.classList.add("back");
		first_3d.classList.remove("left");

		second_3d.classList.add("left");
		second_3d.classList.remove("center");
	}
})

fourth_3d.addEventListener("click", function() {
	console.log('four');
	if (fourth_3d.classList.contains("left")) {

		first_3d.style.zIndex = "2";
		second_3d.style.zIndex = "0";
		third_3d.style.zIndex = "1";
		fourth_3d.style.zIndex = "3";

		fourth_3d.classList.add("center");
		fourth_3d.classList.remove("left");

		first_3d.classList.add("right");
		first_3d.classList.remove("center");

		second_3d.classList.add("back");
		second_3d.classList.remove("right");

		third_3d.classList.add("left");
		third_3d.classList.remove("back");

	} else if (fourth_3d.classList.contains("right")) {

		first_3d.style.zIndex = "1";
		second_3d.style.zIndex = "0";
		third_3d.style.zIndex = "2";
		fourth_3d.style.zIndex = "3";

		fourth_3d.classList.add("center");
		fourth_3d.classList.remove("right");

		first_3d.classList.add("right");
		first_3d.classList.remove("back");

		second_3d.classList.add("back");
		second_3d.classList.remove("left");

		third_3d.classList.add("left");
		third_3d.classList.remove("center");
	}
})