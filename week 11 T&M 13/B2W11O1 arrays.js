var weekdagen = ["maandag ","dinsdag ","woensdag ","donderdag ","vrijdag ","zaterdag ","zondag "];
var listje = document.getElementById("list");
var tekst  = document.getElementById("tekst");
tekst.innerHTML = "De week dagen zijn: "
listje.innerHTML = weekdagen;

var werkdagen = ["maandag ","dinsdag ","woensdag ","donderdag ","vrijdag "];
var listje = document.getElementById("list2");
var tekst  = document.getElementById("tekst2");
tekst.innerHTML = "De werkdagen zijn: ";
listje.innerHTML = werkdagen;

var weekend = ["zaterdag ","zondag "];
var listje = document.getElementById("list3");
var tekst  = document.getElementById("tekst3");
tekst.innerHTML = "De weekenddagen zijn: ";
listje.innerHTML = weekend;

var onweekdagen = ["zondag ","zaterdag ","vrijdag ","donderdag ","woensdag ","dinsdag ","maandag "];
var listje = document.getElementById("list4");
var tekst  = document.getElementById("tekst4");
tekst.innerHTML = "De week dagen in omgekeerde volgorde zijn: ";
listje.innerHTML = onweekdagen;

var onwerkdagen = ["vrijdag ","donderdag ","woensdag ","dinsdag ","maandag "];
var listje = document.getElementById("list5");
var tekst  = document.getElementById("tekst5");
tekst.innerHTML = "De werkdagen in omgekeerde volgorde zijn: ";
listje.innerHTML = onwerkdagen;

var onweekenddagen = ["zondag ","zaterdag "];
var listje = document.getElementById("list6");
var tekst  = document.getElementById("tekst6");
tekst.innerHTML = "De weekenddagen in omgekeerde volgorde zijn: ";
listje.innerHTML = onweekenddagen;