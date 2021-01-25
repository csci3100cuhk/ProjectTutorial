function allowDrop (ev) {
	ev.preventDefault();
}

function drop (ev) {
	var files = ev.dataTransfer.files;
	for (var i = 0; i < files.length; i++) {
		var f = files[i];
		var pnode = document.createElement("p");
		var tnode = document.createTextNode(f.name + " (" + f.type + ") " + f.size + " bytes");
		pnode.appendChild(tnode);
		ev.target.appendChild(pnode);
	}
	ev.preventDefault();
}

window.onload = function(){
	var drophere = document.getElementById("drop1");
	drophere.ondragover = allowDrop;
	drophere.ondrop = drop;
}