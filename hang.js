var karnePunkty = 1; //wpływa na kolejność wyświetlanych obrazków wisielca
var alfabet = ["A", "Ą", "B", "C", "Ć", "D", "E", "Ę", "F", "G", "H", "I", "J", "K", "L", "Ł", "M", "N", "Ń", "O", "P", "Q", "R", "S", "Ś", "T", "U", "V", "W", "X", "Y", "Z", "Ź", "Ż"];

//hasła
var zestawHasel = ["motocykl","rower","samochód","mama","tata","gwiazda","księżniczka","rycesz","laser","książka","okluary","ciuchcia","autobus","traktor","chmura","słońce","czasoprzestrzeń","kosmos"];
var haslo = zestawHasel[Math.floor((Math.random() * zestawHasel.length))]; //losuje jedno z z zestawu haseł
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

//funkcja która odkrywa daną literę w zakrytym haśle 
function zmienLitere(litera, miejsce, znaki) {
    var newZnaki = "";
    return newZnaki = znaki.slice(0, miejsce) + litera + znaki.slice(miejsce + 1);
}

var czyOdkrytoLitere = false;
var numerLitery = 0;

//funkcja sprwdza, czy kliknięta litera znajduje się w haśle
function sprawdz(clickedID) {
    numerLitery = clickedID; //do użycia też w innch funkcjach
    for (var i = 0; i < dlugoscHasla; i++) {
        if (document.getElementById(numerLitery).innerHTML === haslo.charAt(i)) {
            hasloUkryte = zmienLitere(haslo.charAt(i), i, hasloUkryte);
            document.getElementById("haslo").innerHTML = hasloUkryte;
            czyOdkrytoLitere = true; //jeżeli zostaje 'true' nic się niedzeje, jednak jeżeli zmienna pozostanie false (czyli ta część instrukcji warunkowej nie zostanie wykonana), to wykonuje się kolejna część kodu odpowiedzialna za dodanie karnego punktu i wyświetlenie kolejnego obrazka zbliżającego do przegranej
        }
    }
    if (czyOdkrytoLitere === false) {
        karnePunkty++;
        document.getElementById("obrazek").innerHTML = '<img src="grafa/h' + karnePunkty + '.jpg">';
    }
    poKlikuLiterki();
    wisielec();
    czyOdkrytoLitere = false; //ustawia zmienną na false, żeby przy następnym kliknięciu na nową literę kod wykonał się prawidłowo
}

//funcja odpowiadająca za zmianę wyglądu i zachowania liter po kliknięciu
function poKlikuLiterki() {
    if (czyOdkrytoLitere === false) {
        document.getElementById(numerLitery).onclick = function () {};
        document.getElementById(numerLitery).classList.toggle('clicked-false');
    } else {
        document.getElementById(numerLitery).onclick = function () {};
        document.getElementById(numerLitery).classList.toggle('clicked-true');
    }
}

// funkcja odpowiedzialna za sprawdzanie czy liczba puinktów klarnych nie osiągnęła limitu (wyświetla komunikat o przegranej), lub czy hasło nie zostało w pełni odkryte (wyświetla komunikat o wygranej)
function wisielec() {
    if (karnePunkty === 8) document.getElementById("alfabet").innerHTML = '<div>Przegrałeś, hasło to '+haslo+'</div><br /><button onclick="location.reload();">Spróbuj ponownie!</button>'
    else if (haslo === hasloUkryte) document.getElementById("alfabet").innerHTML = '<div>Wygrałeś!</div><button onclick="location.reload();">Spróbuj ponownie!</button>'
}

