//ngecek IP pengguna
var xhttp = new XMLHttpRequest();
xhttp.open("GET", "https://ipecho.net/plain");
xhttp.onload = function(){
    document.getElementById("ipkomputer").innerHTML = xhttp.responseText;
};
xhttp.send();

//ngecek IP
var ipgeo = function(){
    var ipinput = document.getElementById("ipin").value;
    xhttp.open("GET", "https://reallyfreegeoip.org/json/"+ ipinput);
    xhttp.onload = function(){
        var parsed = JSON.parse(xhttp.responseText);
        document.getElementById("ipout").innerHTML = "";
        document.getElementById("ipout").innerHTML = "KODE : " + parsed.country_code + "<br>Negara : " + parsed.country_name + "<br>Region : " + parsed.region_name + "<br>Kota : " + parsed.city + "<br>Zona Waktu : " + parsed.time_zone + "<br>latitude : " + parsed.latitude + "<br>longitude : " + parsed.longitude;
    };
    xhttp.send();
}
//masukin ip dari IP pengguna yang dideteksi
var cekip = function(){
    document.getElementById("ipin").value = document.getElementById("ipkomputer").innerHTML;
}