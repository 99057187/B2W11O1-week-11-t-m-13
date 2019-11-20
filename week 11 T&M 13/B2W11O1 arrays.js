var weekdagen = ["maandag <br>","dinsdag <br>","woensdag <br>","donderdag <br>","vrijdag <br>","zaterdag <br>","zondag <br>"]
document.write("Alle dagen van de week zijn: <br>");
var listje = document.getElementById("list");
listje.innerHTML = weekdagen[0];
document.write(weekdagen[1]);
document.write(weekdagen[2]);
document.write(weekdagen[3]);
document.write(weekdagen[4]);
document.write(weekdagen[5]);
document.write(weekdagen[6]);
document.write("<br>")
document.write("De werkdagen zijn: <br>");
document.write(weekdagen[0]);
document.write(weekdagen[1]);
document.write(weekdagen[2]);
document.write(weekdagen[3]);
document.write(weekdagen[4]);
document.write("<br>")
document.write("De weekenddagen zijn: <br>");
document.write(weekdagen[5]);
document.write(weekdagen[6]);
document.write("<br>")
document.write("Alle dagen van de week in omgekeerde volgorde zijn: <br>");
document.write(weekdagen[6]);
document.write(weekdagen[5]);
document.write(weekdagen[4]);
document.write(weekdagen[3]);
document.write(weekdagen[2]);
document.write(weekdagen[1]);
document.write(weekdagen[0]);
document.write("<br>")
document.write("De werkdagen in omgekeerde volgorde zijn: <br>");
document.write(weekdagen[4]);
document.write(weekdagen[3]);
document.write(weekdagen[2]);
document.write(weekdagen[1]);
document.write(weekdagen[0]);
document.write("<br>")
document.write("De weekenddagen in omgekeerde volgorde zijn: <br>");
document.write(weekdagen[6]);
document.write(weekdagen[5]);