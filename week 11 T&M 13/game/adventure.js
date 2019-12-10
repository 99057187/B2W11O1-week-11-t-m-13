document.body.style.backgroundSize ="cover";
var money = 19;
var keuzen= 0 ;
var wapen = false;
var schildgekocht = false;
var naam = " ";
function home(){
	document.body.style.backgroundImage ="url('afbeeldingen/krijgskamer.png')";
	document.getElementById("inventoryItem").src = "afbeeldingen/inventory.png";
	document.getElementById("description").style.color="white";
	document.getElementById("description").innerText="Je bent een jonge krijger die op een missie is. Om je missie te volbrengen moet je weten waar de Temple van stefano is, Dus ga je naar een cafe aan de rand van de grote berg.";
	document.getElementById("button1").style.display = "none";
	document.getElementById("button3").style.display = "none";
	document.getElementById("button2").innerText="start"
	document.getElementById("title").innerText="home";
	document.getElementById("title").style.color="white";
	var geldzak = document.createElement("img");
	geldzak.src = "afbeeldingen/geldzak.png";
	geldzak.id = "geldzak";
	geldzak.onclick = geldzakGevonden;
	document.body.appendChild(geldzak);
	document.getElementById("button2").onclick=bar;
}
function geldzakGevonden(){
	document.getElementById("geldzak").style.display = "none";
	money = money + 10;
	return(money);
	return(keuzen);
	return(wapen);
	return(schildgekocht);
	return(naam);
}
function bar(){
	document.getElementById("geldzak").style.display = "none";
	document.getElementById("button2").style.display = "none";
	document.getElementById("title").style.border="1px solid black";
	document.getElementById("title").style.margin="0px 765px 0px 700px";
	document.getElementById("title").style.backgroundColor="grey";
	document.getElementById("title").style.color="white";
	document.getElementById("description").style.color="white";
	document.getElementById("description").style.border="1px solid black";
	document.getElementById("description").style.margin="5px 665px 5px 600px";
	document.getElementById("description").style.padding="0px 0px 0px 60px"
	document.getElementById("description").style.backgroundColor="grey";
	document.body.style.backgroundImage ="url('afbeeldingen/krijgsbar.jpg')";
	document.getElementById("title").innerText=" bar";
	document.getElementById("description").innerText="zoek de wijzeman man";
	var wijzeman = document.createElement("img");
	wijzeman.src = "afbeeldingen/wijzeman.png";
	wijzeman.id = "wijzeman";
	wijzeman.onclick = wijzemanGevonden;
	document.body.appendChild(wijzeman);
	document.getElementById("button2").onclick=waarschuwing;
}
function waarschuwing(){
	document.getElementById("description").innerText="De temple van stefano, Maar wees voorzichtig want veelen die de tocht probeerde te maken Zijn nooit meer terug gekomen.";
	document.getElementById("button2").innerText="verlaat de bar";
	document.getElementById("button2").onclick=wacht;
	return(keuzen);
	return(wapen);
	return(schildgekocht);
	return(naam);
}

function wijzemanGevonden(){
	document.getElementById("button2").style.display = "inline";
	document.getElementById("wijzeman").style.display = "none";
	document.getElementById("description").style.margin="0px 465px 0px 400px";
	document.getElementById("description").style.padding="5px";
	document.getElementById("description").innerText="Je hebt de oude man die zegt je te kunnen helpen gevonden. Oude man: Om je missie te vol brengen moet je over de grote berg van jan-willemEn en dan moet je opzoek naar een groot majesteus gebouw en als je het hebt gevonden ben je bij de plek die je zoekt… ";
	document.getElementById("button2").innerText="verder luisteren";
	return(keuzen);
	return(wapen);
	return(schildgekocht);
	return(naam);
}
function wacht(){
	document.getElementById("description").innerText="WACHT...";
	document.getElementById("description").style.border="1px solid black";
	document.getElementById("description").style.margin="5px 745px 5px 690px";
	document.getElementById("description").style.backgroundColor="grey";
	document.getElementById("button2").innerText="wacht";
	document.getElementById("button2").onclick=naamGeven;
	return(keuzen);
	return(wapen);
	return(schildgekocht);
	return(naam);
}
function naamGeven(){
	var naam =prompt("wat is je naam jonge krijger");
	verder(naam);
	return(keuzen);
	return(wapen);
	return(schildgekocht);
	return(naam);
}
function verder(naam){
	document.getElementById("description").style.padding="0px 0px 0px 30px"
	document.getElementById("description").style.margin="0px 535px 0px 500px";
	document.getElementById("description").innerText="veel succes " + naam + " ,misschien is het handig langs de krijgsmarkt te gaan.";
	document.getElementById("button2").innerText="ga naar de krijgsmarkt";
	document.getElementById("button2").onclick=karakterkiezen;
	return(keuzen);
	return(wapen);
	return(schildgekocht);
}
function karakterkiezen(){
	document.body.style.backgroundImage ="url('afbeeldingen/natuur.png')"
	document.getElementById("button2").style.display="none";
	document.getElementById("title").innerText="kies uw karakter";
	document.getElementById("title").style.margin="0px 665px 0px 600px";
	document.getElementById("description").innerText="voor je naar de krijgsmarkt gaat kies je eerst je karakter. karakter 1: de zwaardvechter.    karakter 2: boogschutter";
	var karakter1 = document.createElement("img");
	karakter1.src = "afbeeldingen/krijgerLevel1.png";
	karakter1.id = "zwaardvechter";
	karakter1.onclick = keuzen1;
	document.body.appendChild(karakter1);
	document.getElementById("zwaardvechter").style.border="3px solid black";
	var karakter2 = document.createElement("img");
	karakter2.src = "afbeeldingen/archerLevel1.png";
	karakter2.id = "archer";
	karakter2.onclick = keuzen2;
	document.body.appendChild(karakter2);
	document.getElementById("archer").style.border="3px solid black";
	return(keuzen);
	return(wapen);
	return(schildgekocht);
}
function keuzen1(){
	document.getElementById("description").innerText="u heeft een karakter gekozen.";
	document.getElementById("button2").style.display="inline";
	document.getElementById("button2").innerText="verder";
	document.getElementById("archer").style.display="none";
	document.getElementById("button2").onclick=krijgsmarkt;
	keuzen=1;
	return(keuzen);
	return(wapen);
	return(schildgekocht);
}
function keuzen2(){
	document.getElementById("description").innerText="u heeft een karakter gekozen.";
	document.getElementById("button2").style.display="inline";
	document.getElementById("button2").innerText="verder";
	document.getElementById("zwaardvechter").style.display="none";
	document.getElementById("button2").onclick=krijgsmarkt;
	keuzen=2;
	return(keuzen);
	return(wapen);
	return(schildgekocht);
}
function krijgsmarkt(keuzen){
	document.getElementById("zwaardvechter").style.display="none";
	document.getElementById("archer").style.display="none";
	document.getElementById("title").innerText="krijgsmarkt";
	document.getElementById("description").innerText="je hebt " + money + " goudstukken. In de markt vindt je 3 van je benodigd heden (klik op wat je wilt kopen)";
	document.getElementById("button2").innerText="verlaat de markt";
	document.body.style.backgroundImage ="url('afbeeldingen/krijgsmarkt.png')";
	var zwaard = document.createElement("img");
	zwaard.src = "afbeeldingen/zwaarditem.png";
	zwaard.id = "zwaard";
	zwaard.onclick = zwaardGevonden;
	document.body.appendChild(zwaard);
	var shield = document.createElement("img");
	shield.src = "afbeeldingen/shielditem.png";
	shield.id = "schild";
	shield.onclick = schildGevonden;
	document.body.appendChild(shield);
	var boog = document.createElement("img");
	boog.src = "afbeeldingen/bow&arrow.png";
	boog.id = "boog";
	boog.onclick = boogGevonden;
	document.body.appendChild(boog);
	document.getElementById("button2").onclick=bergvoet;
	return(wapen);
	return(schildgekocht);
}
function zwaardGevonden(){
	if (money >= 4){
		if(keuzen == 1){
			document.getElementById("zwaard").style.display = "none";
			wapen = true;
			money= money - 4 ;
			var zwaardInventory = document.createElement("img");
			zwaardInventory.src = "afbeeldingen/zwaarditem.png";
			zwaardInventory.id = "zwaardInventory";
			document.body.appendChild(zwaardInventory);
			document.getElementById("description").innerText="je hebt " + money + " goudstukken. koop al je benodigdheden nu (klik op wat je wilt kopen)";
		}
		else{
			document.getElementById("description").innerText="u heeft het niet de juiste skill set om een zwaard te hanteren";
		}
	}
	else{
		document.getElementById("description").innerText="u heeft niet genoeg goudstukken om dit item te kopen.";
	}
}
function schildGevonden(){
	document.getElementById("schild").style.display  = "none";
	money= money - 5 ;
	var shieldInventory = document.createElement("img");
	shieldInventory.src = "afbeeldingen/shielditem.png";
	shieldInventory.id = "schildInventory";
	document.body.appendChild(shieldInventory);
	document.getElementById("description").innerText="je hebt nog " + money + " goudstukken. koop al je benodigdheden nu (klik op wat je wilt kopen)";
	schildgekocht=true;
}
function boogGevonden(){
	if (money >= 4){
		if(keuzen == 2){
			document.getElementById("boog").style.display  = "none";
			wapen = true;
			money= money - 4 ;
			var boogInventory = document.createElement("img");
			boogInventory.src = "afbeeldingen/bow&arrow.png";
			boogInventory.id = "boogInventory";
			document.body.appendChild(boogInventory);
			document.getElementById("description").innerText="je hebt " + money + " goudstukken. koop al je benodigdheden nu (klik op wat je wilt kopen)";
		}
		else{
			document.getElementById("description").innerText="u heeft het niet de juiste skill set om een pijl en boog te hanteren";
		}
	}
	else{
		document.getElementById("description").innerText="u heeft niet genoeg goudstukken om dit item te kopen.";
	}
}
function bergvoet(){
	document.body.style.backgroundImage ="url('afbeeldingen/berg.jpg')";
	document.getElementById("zwaard").style.display="none";
	document.getElementById("schild").style.display="none";
	document.getElementById("boog").style.display="none";
	document.getElementById("button2").style.display="none";
	document.getElementById("title").innerText="bergvoet";
	document.getElementById("description").innerText="je bent bij de voet van de berg aangekomen je moet over het meer heen. je hebt 2 keuzes";
	document.getElementById("button1").style.display="inline";
	document.getElementById("button3").style.display="inline";
	document.getElementById("button1").innerText="zwem door het meer";
	document.getElementById("button3").innerText="ga over de brug in de verte";
	document.getElementById("button1").onclick=zwem;
	document.getElementById("button3").onclick=brug;
	return(wapen);
}
function zwem(){
	document.body.style.backgroundImage ="url('afbeeldingen/zwemmen.jpg')";
	document.getElementById("title").innerText="zwemmen";
	document.getElementById("description").innerText="je zwemt door het water en ziet dat iets in het water zwemt.";
	document.getElementById("button1").innerText="zwem sneller";
	if (keuzen == 1){
		document.getElementById("button3").innerText="pak je zwaard";
	}
	else{
		document.getElementById("button3").innerText="pak je boog";
	}
	document.getElementById("button3").onclick=watervecht;
	document.getElementById("button1").onclick=sneller;
}
function watervecht(){
	if (wapen == false){
		document.getElementById("description").innerText="je hebt geen wapen gekocht";
		document.getElementById("button2").style.display="inline";
		document.getElementById("button1").style.display="none";
		document.getElementById("button3").style.display="none";
		document.getElementById("button2").innerText="verder";
		document.getElementById("button2").onclick=opgegeten;
	}
	else{
		document.getElementById("description").innerText="je hebt je wapen vast en kijkt rond, er zwem iets naar je toe en........... het is maar een klein visje";
		document.getElementById("button2").style.display="inline";
		document.getElementById("button1").style.display="none";
		document.getElementById("button3").style.display="none";
		document.getElementById("button2").innerText="verder";
		document.getElementById("button2").onclick=opgegeten;
	}
}
function sneller(){
	document.getElementById("description").innerText="je begint sneller te zwemmen en je wordt nu echt achterna gezeten je kijkt even om en het is weg.";
		document.getElementById("button2").style.display="inline";
		document.getElementById("button1").style.display="none";
		document.getElementById("button3").style.display="none";
		document.getElementById("button2").innerText="verder";
		document.getElementById("button2").onclick=opgegeten;
}
function opgegeten(){
	document.body.style.backgroundImage ="url('afbeeldingen/haai.jpg')";
	document.getElementById("description").innerText="opeens duikt er een haai op en verslindt je hellemaal.";
	document.getElementById("button2").onclick=gameOver;
}
function brug(){
	document.body.style.backgroundImage ="url('afbeeldingen/brug.png')";
	document.getElementById("title").innerText="de brug";
	document.getElementById("description").innerText="je bent bij de brug en net waneer je op de brug wil staan hoor je iemand STOP schreewen";
	document.getElementById("button1").style.display="none";
	document.getElementById("button2").style.display="inline";
	document.getElementById("button2").innerText="verder";
	document.getElementById("button3").style.display="none";
	document.getElementById("button2").onclick=brugtrolkomt;
}
function brugtrolkomt(){
	document.getElementById("description").innerText="brugtrol: hallo reiziger ik ben brug troll, bewaker van de brug. Als je langs mijn brug wilt moet je een raadsel oplossen";
	var brugtrol = document.createElement("img");
	brugtrol.src = "afbeeldingen/trolLevel1.png";
	brugtrol.id = "brugtrol";
	document.body.appendChild(brugtrol);
	document.getElementById("button1").style.display="inline";
	document.getElementById("button1").innerText="oke, wat is het raadsel";
	document.getElementById("button2").style.display="none";
	document.getElementById("button3").style.display="inline";
	document.getElementById("button3").innerText="nee, laat me er door";
	document.getElementById("button1").onclick=raadsel;
	document.getElementById("button3").onclick=loopDoor;
}
function raadsel(){
	document.getElementById("description").innerText="het raadsel is simpel. troll: als het nacht is is het koud, als het regent ben ik droog, het heeft geen muren maar er is plezier voor uren, RARA waar woon ik";
	document.getElementById("button2").style.display="inline";
	document.getElementById("button1").innerText="een huis";
	document.getElementById("button2").innerText="onder de brug";
	document.getElementById("button3").innerText="een tent";
	document.getElementById("button3").onclick=fout;
	document.getElementById("button1").onclick=fout;
	document.getElementById("button2").onclick=goed;

}
function fout(){
	document.getElementById("description").innerText="je hebt het fout. je hebt geen kansen meer over. wil je het antwoord weten?";
	document.getElementById("button1").style.display="inline";
	document.getElementById("button2").style.display="none";
	document.getElementById("button3").style.display="inline";
	document.getElementById("button1").innerText="ja";
	document.getElementById("button3").innerText="nee";
	document.getElementById("button3").onclick=gameOver;
	document.getElementById("button1").onclick=antwoord;
}
function antwoord(){
	document.getElementById("description").innerText="het antwoord was: onder de brug";
	document.getElementById("button1").style.display="inline";
	document.getElementById("button2").style.display="none";
	document.getElementById("button3").style.display="inline";
	document.getElementById("button1").innerText="oke, leuk raadsel";
	document.getElementById("button3").innerText="wat een k*t raadsel";
	document.getElementById("button3").onclick=gameOver;
	document.getElementById("button1").onclick=gameOver;
}
function goed(){
	document.getElementById("description").innerText="brugtrol: je hebt mijn raadsel goed jij bent waardig en mag over mijn brug.";
	document.getElementById("button1").style.display="none";
	document.getElementById("button2").style.display="inline";
	document.getElementById("button3").style.display="none";
	document.getElementById("button2").innerText="verder";
	document.getElementById("button2").onclick=bergklim;
}
function loopDoor(){
	document.getElementById("description").innerText="je loopt door en de trol wordt kwaad. hij pakt zijn speer en steekt je in de rug. je bloedt langzaam dood";
	document.getElementById("button2").style.display="inline";
	document.getElementById("button1").style.display="none";
	document.getElementById("button3").style.display="none";
	document.getElementById("button2").innerText="verder";
	document.getElementById("button2").onclick=gameOver;
}
function bergklim(){
	document.body.style.backgroundImage ="url('afbeeldingen/bergvoet.jpg')";
	document.getElementById("title").innerText="de brergklim";
	document.getElementById("description").innerText="je bent bij de berg en begint te klimmen. je bent al best hoog op wanneer je iemand hoort fluiten";
	document.getElementById("button2").innerText="verder";
	document.getElementById("brugtrol").style.display="none";
	document.getElementById("button2").onclick=bergtrol;
}
function bergtrol(){
	document.getElementById("description").innerText="je bent bijna boven maar ziet opeens nog een trol. wat doe je?";
	var bergtrol = document.createElement("img");
	bergtrol.src = "afbeeldingen/trolLevel2.png";
	bergtrol.id = "bergtrol";
	document.body.appendChild(bergtrol);
	document.getElementById("button1").style.display="inline";
	document.getElementById("button2").style.display="none";
	document.getElementById("button3").style.display="inline";
	document.getElementById("button1").innerText="loop naar hem toe";
	document.getElementById("button3").innerText="verstop je";
	document.getElementById("button1").onclick=loopNaarHemToe;
	document.getElementById("button3").onclick=verstoppen;
}
function loopNaarHemToe(){
	document.getElementById("description").innerText="je loopt naar de trol. de trol schrikt en richt zijn speer op je. trol: wie ben je en wat doe je hier";
	document.getElementById("button1").style.display="none";
	document.getElementById("button2").style.display="inline";
	document.getElementById("button3").style.display="none";
	document.getElementById("button2").innerText="vertel hem wat je komt doen";
	document.getElementById("button2").onclick=biecht;
}
function biecht(){
	document.getElementById("description").innerText="nadat je de trol alles hebt verteld zegt de trol dat je er niet langs mag. trol: als je niet weg gaat moet ik je dwingen.";
	document.getElementById("button1").style.display="inline";
	document.getElementById("button2").style.display="none";
	document.getElementById("button3").style.display="inline";
	document.getElementById("button1").innerText="verlaat de berg";
	document.getElementById("button3").innerText="laat hem je dwingen";
	document.getElementById("button1").onclick=gameOver;
	document.getElementById("button3").onclick=wordtGedwongen;
}
function wordtGedwongen(){
	document.getElementById("description").innerText="je bent niet vertrokken en de trol is boos hij pakt zijn speer en wilt gaam steken";
	document.getElementById("button1").innerText="pak je schild";
	document.getElementById("button3").innerText="pak je wapen";
	document.getElementById("button1").onclick=blockkeer;
	document.getElementById("button3").onclick=valAan;
}
function blockkeer(){
	if (schildgekocht == false){
		document.getElementById("description").innerText="je hebt geen schild. je kan niet afweren en bent dus gestoken";
		document.getElementById("button1").style.display="none";
		document.getElementById("button2").style.display="inline";
		document.getElementById("button3").style.display="none";
		document.getElementById("button2").innerText="verder";
		document.getElementById("button2").onclick=gameOver;
	}
	else{
		document.getElementById("description").innerText="je hebt de aanval geblokkeert.";
			document.getElementById("button1").style.display="none";
			document.getElementById("button2").style.display="inline";
			document.getElementById("button3").style.display="none";
			document.getElementById("button2").innerText="verder";
			document.getElementById("button2").onclick=valAan;
	}
}
function valAan(){
	if (wapen == false){
		document.getElementById("description").innerText="je hebt geen wapen. de trol steekt je en je bloedt langzaam dood.";
		document.getElementById("button1").style.display="none";
		document.getElementById("button2").style.display="inline";
		document.getElementById("button3").style.display="none";
		document.getElementById("button2").innerText="verder";
		document.getElementById("button2").onclick=gameOver;
	}
	else{
		if (keuzen == 1){
			document.getElementById("description").innerText="je steekt je zwaard door zijn borstkas net voordat hij je heeft geraakt. hij is dood dus je kan doorlopen";
			var bergtrolDood = document.createElement("img");
			bergtrolDood.src = "afbeeldingen/trolLevel2Dood.png";
			bergtrolDood.id = "bergtrolDood";
			document.body.appendChild(bergtrolDood);
			document.getElementById("bergtrol").style.display="none";
			document.getElementById("button1").style.display="none";
			document.getElementById("button2").style.display="inline";
			document.getElementById("button3").style.display="none";
			document.getElementById("button2").innerText="verder";
			document.getElementById("button2").onclick=gaVerder;
		}
		else{
			document.getElementById("description").innerText="je pakt je boog en schiet een pijl op hem af. hij is geraakt maar slaat gewoon door. hij breekt je boog en steekt je. jullie zijn allebei dood.";
			document.getElementById("button1").style.display="none";
			document.getElementById("button2").style.display="inline";
			document.getElementById("button3").style.display="none";
			document.getElementById("button2").innerText="verder";
			document.getElementById("button2").onclick=gameOver;
		}
	}
}
function verstoppen(){
	document.getElementById("description").innerText="je hebt je verstopt achter een rots. ga je de trol vertrouwen en toch naar hem toe of pak je je wapen en dood je hem ";
	document.getElementById("button1").style.display="inline";
	document.getElementById("button2").style.display="none";
	document.getElementById("button3").style.display="inline";
	document.getElementById("button1").innerText="vertrouwen";
	document.getElementById("button3").innerText="doden";
	document.getElementById("button1").onclick=loopNaarHemToe;
	document.getElementById("button3").onclick=doden;
}
function doden(){
	if (keuzen == 1){
		document.getElementById("description").innerText="je pakt je zwaard en rent op hem af. hij ziet je aan rennen en stapt op de laatste moment opzij. je valt van de berg";
		document.getElementById("button1").style.display="none";
		document.getElementById("button2").style.display="inline";
		document.getElementById("button3").style.display="none";
		document.getElementById("button2").innerText="verder";
		document.getElementById("button2").onclick=gameOver;
	}
	else{
		document.getElementById("description").innerText="je pakt je boog en mikt op zijn hoofd.";
		document.getElementById("button1").style.display="none";
		document.getElementById("button2").style.display="inline";
		document.getElementById("button3").style.display="none";
		document.getElementById("button2").innerText="schiet";
		document.getElementById("button2").onclick=geschoten;
	}
}
function geschoten(){
	document.getElementById("description").innerText="je hebt hem door zijn borst geschoten, hij is dood dus kan je door lopen";
	var bergtrolDood = document.createElement("img");
	bergtrolDood.src = "afbeeldingen/trolLevel2Dood.png";
	bergtrolDood.id = "bergtrolDood";
	document.body.appendChild(bergtrolDood);
	document.getElementById("bergtrol").style.display="none";
	document.getElementById("button2").innerText="verder";
	document.getElementById("button2").onclick=gaVerder;
}
function gaVerder(){
	document.body.style.backgroundImage ="url('afbeeldingen/bergtop.png')";
	document.getElementById("title").innerText="bergtop";
	document.getElementById("description").innerText="je bent op de top van de berg aangekomen. je kijkt rond en bewonderd het uitzicht.";
	document.getElementById("bergtrol").style.display="none";
	document.getElementById("bergtrolDood").style.display="none";
	document.getElementById("button1").style.display="none";
	document.getElementById("button2").style.display="inline";
	document.getElementById("button3").style.display="none";
	document.getElementById("button2").innerText="verder";
	document.getElementById("button2").onclick=grotetrol;
}
function grotetrol(){
	document.getElementById("description").innerText="je hoort opeens zware voetstappen jou kan op komen, Er komt een hele grote troll aan. wat doe je?";
	document.getElementById("button1").style.display="inline";
	document.getElementById("button2").style.display="none";
	document.getElementById("button3").style.display="inline";
	document.getElementById("button1").innerText="verstopt je ";
	document.getElementById("button3").innerText="vecht"
	document.getElementById("button1").onclick=inham;
	document.getElementById("button3").onclick=bevechtTrol;
}
function inham(){
	document.getElementById("description").innerText="je hebt je verstopt in een soort inham in de berg, de grote trol loopt richting de plek waar je je verstopt en gooit zijn speer en helm in de inham.";
	document.getElementById("button1").style.display="none";
	document.getElementById("button2").style.display="inline";
	document.getElementById("button3").style.display="none";
	document.getElementById("button2").innerText="verder";
	document.getElementById("button2").onclick=geplet;
}
function geplet(){
	document.getElementById("description").innerText="het blijkt dat de trol de inham als kast gebruikt. de helm valt vlak naast je neer, maar de speer spiest dwars door je heen.";
	document.getElementById("button2").innerText="verder";
	document.getElementById("button2").onclick=gameOver;
}
function bevechtTrol(){
	if (keuzen == 1){
		document.getElementById("description").innerText="je rent naar de grote trol voor een aanval, maar de trol schrikt en slaat je tegen een rots. je hebt waarschijnlijk iets gebroken.";
		var janWillem = document.createElement("img");
		janWillem.src = "afbeeldingen/trolLevel3.png";
		janWillem.id = "janWillem";
		document.body.appendChild(janWillem);
		document.getElementById("button1").style.display="inline";
		document.getElementById("button2").style.display="inline";
		document.getElementById("button3").style.display="inline";
		document.getElementById("button1").innerText="geef je over";
		document.getElementById("button2").innerText="gooi je zwaard";
		document.getElementById("button3").innerText="vecht door";
		document.getElementById("button2").onclick=geefJeOver;
		document.getElementById("button2").onclick=gooi;
		document.getElementById("button3").onclick=vechtDoor;
	}
	else{
		document.getElementById("description").innerText="je pakt je boog en schiet een pijl op hem af. hij ziet de pijl vliegen en slaat hem uit de lucht. hij pakt zijn speer en gooit hem naar je toe.je springt opzij en knalt tegen een rots. je hebt waarschijnlijk iets gebroken.";
		var janWillem = document.createElement("img");
		janWillem.src = "afbeeldingen/trolLevel3.png";
		janWillem.id = "janWillem";
		document.body.appendChild(janWillem);
		document.getElementById("button1").style.display="inline";
		document.getElementById("button2").style.display="inline";
		document.getElementById("button3").style.display="inline";
		document.getElementById("button1").innerText="geef je over";
		document.getElementById("button2").innerText="schiet een pijl";
		document.getElementById("button3").innerText="vecht door";
		document.getElementById("button2").onclick=geefJeOver;
		document.getElementById("button2").onclick=schiet;
		document.getElementById("button3").onclick=vechtDoor;
	}
}
function geefJeOver(){
	document.getElementById("description").innerText="je geeft je over, de trol respecteerd je overgaven en laat je terug naar huis gaan.";
	document.getElementById("button1").style.display="none";
	document.getElementById("button3").style.display="none";
	document.getElementById("button2").innerText="verder";
	document.getElementById("button2").onclick=gameOver;
}
function gooi(){
	document.getElementById("description").innerText="je gooit je zwaard naar hem, de trol word boos en steekt je met zijn speer.";
	document.getElementById("button1").style.display="none";
	document.getElementById("button3").style.display="none";
	document.getElementById("button2").innerText="verder";
	document.getElementById("button2").onclick=gameOver;
}
function schiet(){
	document.getElementById("description").innerText="je schiet nog een pijl naar hem, de trol word boos en steekt je met zijn speer.";
	document.getElementById("button1").style.display="none";
	document.getElementById("button3").style.display="none";
	document.getElementById("button2").innerText="verder";
	document.getElementById("button2").onclick=gameOver;
}
function vechtDoor(){
	document.getElementById("description").innerText="je probeert op te staan maar valt dan weer neer. je geeft niet op en probeert opnieuw, het lukt je. de trol is verbaast.";
	document.getElementById("button1").style.display="none";
	document.getElementById("button3").style.display="none";
	document.getElementById("button2").innerText="verder";
	document.getElementById("button2").onclick=praatMetTrol;
}
function praatMetTrol(){
	document.getElementById("description").innerText="De trol bewonderd je door zetting voormogen en legt zijn knots neer. grote trol: mijn naam is jan-willem. wat doe je op mijn berg";
	document.getElementById("button2").innerText="vertel hem wat je komt doen";
	document.getElementById("button2").onclick=trolHelpt;
}
function trolHelpt(){
	document.getElementById("description").innerText="terwijl je jan-willem alles verteld over je reis geeft hij je een speciaal drankje je bent weer helemaal beter.";
	document.getElementById("button2").innerText="verder";
	document.getElementById("button2").onclick=trolLoot;
}
function trolLoot(){
	document.getElementById("description").innerText="de trol vindt het goed dat je zijn berg passert en wil je laten gaan. jan-willem: wacht, als je je missie wilt voortbrengen heb je betere spullen nodig, jan-willem pakt een kist en vol met spullen van alle voorgaande krijgers die zijn berg probeerde te passeren.";
	var geslotenkist = document.createElement("img");
	geslotenkist.src = "afbeeldingen/geslotenkist.png";
	geslotenkist.id = "geslotenkist";
	document.body.appendChild(geslotenkist);
	document.getElementById("button2").innerText="open de kist";
	document.getElementById("button2").onclick=kist;
}
function kist(){
	document.getElementById("description").innerText="de trol vindt het goed dat je zijn berg passert en wil je laten gaan. jan-willem: wacht, als je je missie wilt voortbrengen heb je betere spullen nodig, jan-willem pakt een kist en vol met spullen van alle voorgaande krijgers die zijn berg probeerde te passeren.";
	document.getElementById("geslotenkist").style.display="none";
	var openkist = document.createElement("img");
	openkist.src = "afbeeldingen/openkist.png";
	openkist.id = "openkist";
	document.body.appendChild(openkist);
	if (keuzen == 1){
		var krijgerLevel3 = document.createElement("img");
		krijgerLevel3.src = "afbeeldingen/krijgerLevel3.png";
		krijgerLevel3.id = "krijgerLevel3";
		document.body.appendChild(krijgerLevel3);
	}
	else{
		var archerLevel3 = document.createElement("img");
		archerLevel3.src = "afbeeldingen/archerLevel3.png";
		archerLevel3.id = "archerLevel3";
		document.body.appendChild(archerLevel3);
	}
	document.getElementById("button2").innerText="ga naar de temple van stefano";
	document.getElementById("button2").onclick=temple;
}
function temple(){
	document.getElementById("janWillem").style.display="none";
	if (keuzen == 1){
		document.getElementById("krijgerLevel3").style.display="none";
	}
	else{
		document.getElementById("archerLevel3").style.display="none";
	}
	document.getElementById("openkist").style.display="none";
	document.body.style.backgroundImage ="url('afbeeldingen/templeVanStefano.png')";
	document.getElementById("title").innerText="de temple van stefano";
	document.getElementById("description").innerText="je hebt de temle eindelijk gevonden. je gaat naar binnen om je missie te volbrengen";
	document.getElementById("button2").innerText="verder";
	document.getElementById("button2").onclick=binnen;
}
function binnen(){
	document.body.style.backgroundImage ="url('afbeeldingen/templeVanBinnen.png')";
	document.getElementById("description").innerText="je bent binnen je moet wel oppassen want er kunnen boebitraps zijn";
	document.getElementById("button1").style.display="inline";
	document.getElementById("button2").style.display="none";
	document.getElementById("button3").style.display="inline";
	document.getElementById("button1").innerText="zoek boebitraps";
	document.getElementById("button3").innerText="loop gewoon door";
	document.getElementById("button1").onclick=zoek;
	document.getElementById("button3").onclick=loop;
}
function zoek(){
	document.getElementById("button1").style.display="none";
	document.getElementById("button2").style.display="inline";
	document.getElementById("button3").style.display="none";
	document.getElementById("description").innerText="je kijkt goed rond en vind een draad waar je zeker over zou gaan struikelen. je stapt er over heen en loopt naar de volgende kamer";
	document.getElementById("button2").innerText="verder";
	document.getElementById("button2").onclick=stap;
}
function loop(){
	document.getElementById("button1").style.display="none";
	document.getElementById("button2").style.display="inline";
	document.getElementById("button3").style.display="none";
	document.getElementById("description").innerText="je loopt maar je struikeld over een draad je wordt door spijkers die uit de grond komen gespiest.";
	document.getElementById("button2").innerText="verder";
	document.getElementById("button2").onclick=gameOver;
}
function stap(){
	document.body.style.backgroundImage ="url('afbeeldingen/LangeGang.png')";
	document.getElementById("description").innerText="je bent in de volgende kamer gekomen het is een gewone lange gang je zet een stap vooruit en er zakt een steen in. het is niks denkje je loopt door. dan hoor je iets rollen je kijkt achter je en...";
	document.getElementById("button2").innerText="verder";
	document.getElementById("button2").onclick=boulder;
}
function boulder(){
	document.body.style.backgroundImage ="url('afbeeldingen/boulder.png')";
	document.getElementById("description").innerText="het is een gigantische rots die achter je aan rolt";
	document.getElementById("button1").style.display="inline";
	document.getElementById("button2").style.display="none";
	document.getElementById("button3").style.display="inline";
	document.getElementById("button1").innerText="ren";
	document.getElementById("button3").innerText="blijfstaan";
	document.getElementById("button1").onclick=ren;
	document.getElementById("button3").onclick=blijfstaan;
}
function blijfstaan(){
	document.getElementById("description").innerText="je bent geplet door de rots.(wat had je anders verwacht)";
	document.getElementById("button1").style.display="none";
	document.getElementById("button2").style.display="inline";
	document.getElementById("button3").style.display="none";
	document.getElementById("button2").innerText="verder";
	document.getElementById("button2").onclick=gameOver;
}
function ren(){
	document.body.style.backgroundImage ="url('afbeeldingen/templeVanBinnen.png')";
	document.getElementById("description").innerText="je rent weg voor de rots, er komt een splitsing waar ga je naar toe ";
	document.getElementById("button1").style.display="inline";
	document.getElementById("button2").style.display="inline";
	document.getElementById("button3").style.display="inline";
	document.getElementById("button1").innerText="links";
	document.getElementById("button2").innerText="rechtdoor";
	document.getElementById("button3").innerText="rechts";
	document.getElementById("button1").onclick=kamer;
	document.getElementById("button2").onclick=deadEnd;
	document.getElementById("button3").onclick=put;
}
function deadEnd(){
	document.body.style.backgroundImage ="url('afbeeldingen/hallEnd.jpg')";
	document.getElementById("description").innerText="het is een dood lopende gang. de rots plet je.";
	document.getElementById("button1").style.display="none";
	document.getElementById("button2").style.display="inline";
	document.getElementById("button3").style.display="none";
	document.getElementById("button2").innerText="verder";
	document.getElementById("button2").onclick=gameOver;
}
function put(){
	document.body.style.backgroundImage ="url('afbeeldingen/diepePut.png')";
	document.getElementById("description").innerText="je rent naar rechts je kijkt achteruit, je bent de rots onstapt. je kijkt weer naar voren maar valt dan in een diepe put. je bent dood gevallen";
	document.getElementById("button1").style.display="none";
	document.getElementById("button2").style.display="inline";
	document.getElementById("button3").style.display="none";
	document.getElementById("button2").innerText="verder";
	document.getElementById("button2").onclick=gameOver;
}
function kamer(){
	document.body.style.backgroundImage ="url('afbeeldingen/bossKamer.png')";
	document.getElementById("title").innerText="Boss Battle";
	document.getElementById("description").innerText="je rent naar links je kijkt achteruit, je bent de rots onstapt. je kijkt de kamer rond en ziet opeens dat er iemand in de schaduw staat. " + naam + ": wie ben je stap in het licht!";
	document.getElementById("button1").style.display="none";
	document.getElementById("button2").style.display="inline";
	document.getElementById("button3").style.display="none";
	document.getElementById("button2").innerText="verder";
	document.getElementById("button2").onclick=stefano;
}
function stefano(){
	document.getElementById("description").innerText="mysterieuse man: wie waagt er mijn temple te betreden";
	var stefano = document.createElement("img");
	stefano.src = "afbeeldingen/orcLevel3.png";
	stefano.id = "stefano";
	document.body.appendChild(stefano);
	document.getElementById("button1").style.display="inline";
	document.getElementById("button2").style.display="none";
	document.getElementById("button3").style.display="inline";
	document.getElementById("button1").innerText="vecht met stefano";
	document.getElementById("button3").innerText="vertel hem je verhaal";
	document.getElementById("button1").onclick=bossFight;
	document.getElementById("button3").onclick=bosskills;
}
function bossKills(){
	document.getElementById("description").innerText="terwijl je je verhaal verteld kijkt stefano je raar aan en gooit een vuurbal op je. stefano: het boeit me niet wat je komt doen je had mijn temple niet moeten betreden. je brand dood";
	document.getElementById("button1").style.display="none";
	document.getElementById("button2").style.display="inline";
	document.getElementById("button3").style.display="none";
	document.getElementById("button2").innerText="verder";
	document.getElementById("button2").onclick=gameOver;
}
function bossFight(){
	if (keuzen == 1){
		document.getElementById("description").innerText="je gaat in de aanval je slaat hem op zijn knie met je zwaard, hij knielt neer."
		document.getElementById("button1").style.display="inline";
		document.getElementById("button2").style.display="none";
		document.getElementById("button3").style.display="inline";
		document.getElementById("button1").innerText="nog een aanval";
		document.getElementById("button3").innerText="wacht tot hij wat doet";
		document.getElementById("button1").onclick=secondeAttack;
		document.getElementById("button3").onclick=rust;
	}
	else{
		document.getElementById("description").innerText="je gaat in de aanval je schiet hem op zijn knie met een pijl, hij knielt neer."
		document.getElementById("button1").style.display="inline";
		document.getElementById("button2").style.display="none";
		document.getElementById("button3").style.display="inline";
		document.getElementById("button1").innerText="nog een aanval";
		document.getElementById("button3").innerText="wacht tot hij wat doet";
		document.getElementById("button1").onclick=secondeAttack;
		document.getElementById("button3").onclick=rust;
	}
}
function secondeAttack(){
	if (keuzen == 1){
		document.getElementById("description").innerText="je rent naar stefano en deelt nog eenklap uit dit keer op zijn rug."
		document.getElementById("button1").style.display="inline";
		document.getElementById("button2").style.display="none";
		document.getElementById("button3").style.display="inline";
		document.getElementById("button1").innerText="nog een aanval";
		document.getElementById("button3").innerText="wacht tot hij wat doet";
		document.getElementById("button1").onclick=derdeAttack;
		document.getElementById("button3").onclick=rust;	
	}
	else{
		document.getElementById("description").innerText="je kijkt naar stefano en schiet nog eenpijl op hem dit keer op zijn rug."
		document.getElementById("button1").style.display="inline";
		document.getElementById("button2").style.display="none";
		document.getElementById("button3").style.display="inline";
		document.getElementById("button1").innerText="nog een aanval";
		document.getElementById("button3").innerText="wacht tot hij wat doet";
		document.getElementById("button1").onclick=derdeAttack;
		document.getElementById("button3").onclick=rust;
	}	
}
function derdeAttack(){
		document.getElementById("description").innerText="je kijkt stefano recht in de ogen aan en ziet dat hij een vuurbal gooit. "
		document.getElementById("button1").style.display="inline";
		document.getElementById("button2").style.display="none";
		document.getElementById("button3").style.display="inline";
		document.getElementById("button1").innerText="final hit";
		document.getElementById("button3").innerText="block";
		document.getElementById("button1").onclick=final;
		document.getElementById("button3").onclick=rust;	
}
function final(){
	if (keuzen == 1){
		document.getElementById("description").innerText="je ziet de vuurbal vliegen je pakt je zwaard en gooit hem dwars door de vuurbal heen(je zwaard staat nu in de fik) je zwaard doorboord stefano en hij valt neer op de grond. je hebt hem verslagen";
		document.getElementById("button1").style.display="none";
		document.getElementById("button2").style.display="inline";
		document.getElementById("button3").style.display="none";
		document.getElementById("button2").innerText="pak de totem";
		document.getElementById("button2").onclick=totem;
	}
	else{
		document.getElementById("description").innerText="je ziet de vuurbal vliegen je pakt je pakt een pijl en schiet hem dwars door de vuurbal(de pijl staat nu in de fik) je pijl doorboord stefano en hij valt neer op de grond. je hebt hem verslagen";
		document.getElementById("button1").style.display="none";
		document.getElementById("stefano").style.display="none";
		var stefanoDood = document.createElement("img");
		stefanoDood.src = "afbeeldingen/orcLevel3Dood.png";
		stefanoDood.id = "stefanoDood";
		document.body.appendChild(stefanoDood);
		document.getElementById("button2").style.display="inline";
		document.getElementById("button3").style.display="none";
		document.getElementById("button2").innerText="pak de totem";
		document.getElementById("button2").onclick=totem;
	}
}	
function rust(){
	document.getElementById("description").innerText="je wacht, stefano schiet een vuurbal naar je toe. ";
	document.getElementById("button1").style.display="inline";
	document.getElementById("button2").style.display="none";
	document.getElementById("button3").style.display="inline";
	document.getElementById("button1").innerText="blockkeer";
	document.getElementById("button3").innerText="doe niks";
	document.getElementById("button1").onclick=geblocked;
	document.getElementById("button3").onclick=niks;
}
function niks(){
	document.getElementById("description").innerText="je bent verbrand door de vuurbal";
	document.getElementById("button1").style.display="none";
	document.getElementById("button2").style.display="inline";
	document.getElementById("button3").style.display="none";
	document.getElementById("button2").innerText="verder";
	document.getElementById("button2").onclick=gameOver;
}
function geblocked(){
	document.getElementById("description").innerText="je hebt de vuurbal geblocked. je haalt je schild voor je gezicht weg en ziet dan een zwaard op je afvliegen. hij gaat dwars door je heen.";
	document.getElementById("button1").style.display="none";
	document.getElementById("button2").style.display="inline";
	document.getElementById("button3").style.display="none";
	document.getElementById("button2").innerText="verder";
	document.getElementById("button2").onclick=gameOver;
}
function totem(){
	document.body.style.backgroundImage ="url('afbeeldingen/totem.jpg')";
	document.getElementById("stefano").style.display="none";
	document.getElementById("stefanoDood").style.display="none";
	document.getElementById("title").innerText="totem";
	document.getElementById("description").innerText="je hebt de totem te pakken. " + naam + ": ik heb hem eindelijk heb ik de totem van mijn overgrootvader weer terug. mijn family heeft deze totem al generaties in de family tot hij gestolen werd en nu is hij weer terug.";
	document.getElementById("button1").style.display="none";
	document.getElementById("button2").style.display="inline";
	document.getElementById("button3").style.display="none";
	document.getElementById("button2").innerText="verder";
	document.getElementById("button2").onclick=endScreen;
}
function endScreen(){
	document.body.style.backgroundImage ="url('afbeeldingen/gewonnen.png')";
	if (keuzen == 1){
		var endKrijgerLevel3 = document.createElement("img");
		endKrijgerLevel3.src = "afbeeldingen/krijgerLevel3.png";
		endKrijgerLevel3.id = "endKrijgerLevel3";
		document.body.appendChild(endKrijgerLevel3);
	}
	else{
		var endArcherLevel3 = document.createElement("img");
		endArcherLevel3.src = "afbeeldingen/archerLevel3.png";
		endArcherLevel3.id = "endArcherLevel3";
		document.body.appendChild(endArcherLevel3);
	}
	document.getElementById("title").style.display="none";
	document.getElementById("description").innerText="made by: Anthony Inocencio Ramos winnaar: " + naam + ".";	
	document.getElementById("button1").style.display="none";
	document.getElementById("button2").style.display="none";
	document.getElementById("button3").style.display="none";
	document.getElementById("brugtrol").style.display="none";
	document.getElementById("bergtrol").style.display="none";
	document.getElementById("bergtrolDood").style.display="none";
	document.getElementById("janWillem").style.display="none";
	document.getElementById("stefano").style.display="none";
	document.getElementById("stefanoDood").style.display="none";
}
function gameOver(){
	document.body.style.backgroundImage ="url('afbeeldingen/game over.jpg')";
	document.getElementById("title").style.display="none";
	document.getElementById("description").style.display="none";
	document.getElementById("button1").style.display="none";
	document.getElementById("button2").style.display="none";
	document.getElementById("button3").style.display="none";
	document.getElementById("inventoryItem").style.display="none";
	document.getElementById("zwaardInventory").style.display="none";
	document.getElementById("schildInventory").style.display="none";
	document.getElementById("boogInventory").style.display="none";
	document.getElementById("brugtrol").style.display="none";
	document.getElementById("bergtrol").style.display="none";
	document.getElementById("bergtrolDood").style.display="none";
	document.getElementById("janWillem").style.display="none";
	document.getElementById("stefano").style.display="none";
	document.getElementById("stefanoDood").style.display="none";
}
home();
