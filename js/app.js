const container = document.querySelector(".container");
const btn = document.querySelector("#sizeBtn");
createGrid(16);

btn.addEventListener("click", () => {
	let size = parseInt(prompt("Please input a grid size 1-100", "16"));
	let divs = document.querySelectorAll(".container *");
	divs.forEach((element) => { element.remove() });
	if (size <= 0) {
		alert("Please enter a positive size 1-100");
	} else if (size > 100) {
		size = 100;
		createGrid(size);
	} else {
		createGrid(size);
	}
});

function randomColor() {
	let r = Math.floor(Math.random() * 255);
	let g = Math.floor(Math.random() * 255);
	let b = Math.floor(Math.random() * 255);
	return `rgb(${r},${g},${b})`;
}

function createGrid(size) {
	let divSize = (container.clientWidth / size);
	for (let i = 0; i < size; i++) {
		const row = document.createElement("div");
		row.classList.add("row");
		for (let j = 0; j < size; j++) {
			const div = document.createElement("div");
			div.classList.add("div");
			div.style.width = `${divSize}px`;
			div.style.height = `${divSize}px`;
			div.style.filter = "brightness(100%)";
			div.addEventListener("mouseenter", () => {
				if (!div.style.backgroundColor) {
					div.style.backgroundColor = randomColor();
				} else {
					let brightness = (parseInt(div.style.filter.replace(/\D/g, ""))) - 10;
					div.style.filter = `brightness(${brightness}%)`;
				}
			});
			row.appendChild(div);
		}
		container.appendChild(row);
	}
}
