var hoeveel = prompt("Hoeveel namen wilt u in de array stoppen? (minimaal 3)");
if(hoeveel < 3){
	alert("u dient een getal hoger of gelijk aan 3 te kiezen");
}
else if(hoeveel >= 3){
	var namen = prompt("welke namen wilt u invoegen(met comma's zonder spaties)");
	var array = namen.split(",");
	for (var i = 0; i < hoeveel; i++){
		var kopje = document.createElement("h4");
		kopje.innerHTML = array[i];
		document.body.appendChild(kopje);
	}
	//omgekeerd
	for (var j = 0; j < hoeveel; j++){
		array.reverse();
		var kopje = document.createElement("h4");
		kopje.innerHTML = array[j];
		document.body.appendChild(kopje);
	}
}
else{
	alert("u dient een getal in te typen");
}
