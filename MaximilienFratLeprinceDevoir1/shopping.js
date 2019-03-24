function ajout(){
	var objet=document.createElement("text");
	var liste=document.createElement("li");
	objet.innerText= document.getElementById("banania").value;
	vérif1=document.getElementById("rouge").checked;
	if(vérif1){
		objet.style.color="red";
	};
	vérif2=document.getElementById("surligné").checked;
	if(vérif2){
		objet.style["text-decoration"]="underline";
	};
	liste.appendChild(objet);
	document.getElementById("liste0").appendChild(liste);
	document.getElementById("banania").value="";
}


function retirer(){
	var listed=document.getElementById("liste0");
	var nombre=document.getElementById("supprimer").value;
	indice=listed.childNodes[nombre];
	listed.removeChild(indice);
}