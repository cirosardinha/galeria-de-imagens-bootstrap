const images = document.querySelectorAll(".col img");
let currIndex = 0;

images.forEach((image, index) => {
	image.addEventListener("click", () => {
		const modalImage = document.querySelector("#modalImage");
		modalImage.src = image.src;
		currIndex = index;
		const myModal = new bootstrap.Modal(document.querySelector("#imageModal"));
		myModal.show();
	});
});

const nextModalImg = () => {
	document.getElementById("prevImage").addEventListener("click", () => {
		currIndex = (currIndex - 1 + images.length) % images.length;
		document.getElementById("modalImage").src = images[currIndex].src;
	});

	document.getElementById("nextImage").addEventListener("click", () => {
		currIndex = (currIndex + 1) % images.length; // Índice circular
		document.getElementById("modalImage").src = images[currIndex].src;
	});
};

document.addEventListener("keydown", (event) => {
	if (event.key === "ArrowLeft") {
		document.getElementById("prevImage").click();
	} else if (event.key === "ArrowRight") {
		document.getElementById("nextImage").click();
	}
});

nextModalImg();
