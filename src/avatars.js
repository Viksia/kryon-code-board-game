var avat = document.getElementById("avat");
avat.ondragstart = () => false;
let rect = avat.getBoundingClientRect();
let css = getComputedStyle(avat);

avat.onmousedown = e => {
	avat.style.position = "absolute";
	let saveX = e.offsetX;
	let saveY = e.offsetY;

	document.onmousemove = e => {
		avat.style.position = "absolute";
		avat.style.top = e.pageY - parseInt(css.margin) - saveY + "px";
		avat.style.left = e.pageX - parseInt(css.margin) - saveX + "px";
	};
};

avat.onmouseup = e => {
	document.onmousemove = () => false;
};
