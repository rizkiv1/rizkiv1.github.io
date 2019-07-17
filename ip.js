var xhttp = new XMLHttpRequest();
xhttp.open("GET", "https://ipecho.net/plain");
xhttp.onload = function(){
    document.getElementById("ipkomputer").innerHTML = xhttp.responseText;
};
xhttp.send();

var ipgeo = function(){
    var ipinput = document.getElementById("ipin").value;
    xhttp.open("GET", "http://api.petabyet.com/geoip/"+ ipinput);
    xhttp.onload = function(){
        var parsed = JSON.parse(xhttp.responseText);
        document.getElementById("ipout").innerHTML = "";
        document.getElementById("ipout").innerHTML = "KODE : " + parsed.country_code + "<br>Negara : " + parsed.country + "<br>Region : " + parsed.region + "<br>Kota : " + parsed.city + "<br>Zona Waktu : " + parsed.timezone + "<br>Provider : " + parsed.organization;
    };
    xhttp.send();
}

var cekip = function(){
    document.getElementById("ipin").value = document.getElementById("ipkomputer").innerHTML;
}