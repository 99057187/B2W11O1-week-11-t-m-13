var Hoeveel = [prompt("Hoeveel namen wilt u in de array stoppen? (minimaal 3)")];
if(Hoeveel < 3){
	alert("u dient een getal hoger of gelijk aan 3 te kiezen");
}
else if(Hoeveel >= 3){
	var namen = prompt("welke namen wilt u invoegen");
	var array = namen.split(",");
	for (var i = 0; i < Hoeveel; i++){
		document.getElementById("naam " + i).innerHTML = array[+ i];
	}
	//omgekeerd
	i--
	for (var j = 0; j < Hoeveel; j++){
		document.getElementById("onnaam " + i).innerHTML = array[+ j];
		i--
	}
}
else{
	alert("u dient een getal in te typen");
}