function flower(){
	let image= document.createElement("img");
	image.src="Pen.png";
	image.style.height = '205px';
    image.style.width = '275px';
	document.getElementById("jojo").appendChild(image);
}




function arcenciel(){
	let spans = document.getElementById("rainbow").querySelectorAll(".element");
	let colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];
	for (var i = spans.length - 1; i >= 0; i--) {
		spans[i].style.color = colors[i];
	}	
}




function changement(){
	var changeSrc = function(image) {
		let filename = image.target.src.replace(/^.*[\\\/]/, '');
		if (filename=="lesquen1.png"){
			image.target.src = "lesquen2.png";
		}else{
			image.target.src = "lesquen1.png";
		}
	};
	document.getElementById("Lesquen").addEventListener("mouseover", changeSrc);
}


function init(){
	flower();
	arcenciel();
	changement();
}