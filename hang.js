var napis = "";

var alfabet = ["A", "Ą", "B", "C", "Ć", "D", "E", "Ę", "F", "G", "H", "I", "J", "K", "L", "Ł", "M", "N", "Ń", "O", "P", "Q", "R", "S", "Ś", "T", "U", "V", "W", "X", "Y", "Z", "Ź", "Ż"];

var haslo = "Gdzie są woły, tam plon obfity";
haslo = haslo.toLocaleUpperCase();
var dlugoscHasla = haslo.length;
var hasloUkryte = "";


//bierze haslo i na jego podstawie tworzy nowe haslo zamieniajac litery na "-" Na koniec zaś podmienia div z id "haslo" na haslo z ukrytymi literami
function zamien() {
    for (var i = 0; i < dlugoscHasla; i++) {
        if (haslo.charAt(i) === " ") hasloUkryte = hasloUkryte + " ";
        else hasloUkryte = hasloUkryte + "-";
    }
    document.getElementById("haslo").innerHTML = hasloUkryte;
    pokaAlfabet();
}

//laduje funcje zmien po wczytaniu dokumentu
window.onload = zamien;


//funkcja ładująca alfabet (A-Ż) na stronę. Tworzy 35 div'ow z onclickiem i id; co 7 div'ow tworzona jest nowa linia przez clear:both
function pokaAlfabet() {
    var czaryAlfabet = "";
    for (var j = 0; j < 34; j++) {
        if (j % 7 === 0) czaryAlfabet = czaryAlfabet + '<div style="clear:both" class="literki" onclick="sprawdz(this.id)"' + 'id="' + j + '">' + alfabet[j] + '</div>';
        else czaryAlfabet = czaryAlfabet + '<div class="literki" onclick="sprawdz(this.id)"' + 'id="' + j + '">' + alfabet[j] + '</div>';
    }
    document.getElementById("alfabet").innerHTML = czaryAlfabet;
}

function sprawdz(clickedID) {
    debugger;
    alert(document.getElementById(clickedID).innerHTML);
    for (var i = 0; i < dlugoscHasla; i++) {
        if (document.getElementById(clickedID).innerHTML === haslo.charAt(i));
        else alert("not soo");
    }
}