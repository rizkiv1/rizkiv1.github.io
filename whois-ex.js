var domainwhois = function(){
    var ipinput = document.getElementById("ipin").value;
    xhttp.open("GET", "https://api.webcargo.io/whois?key=fmVstvwTrsXv31Sj0uG8mYhzsPtt4fos&identifier="+ ipinput);
    xhttp.onload = function(){
        var parsed = JSON.parse(xhttp.responseText);
        var keluaran = "";
        keluaran += JSON.stringify(parsed);
        //keluaran = keluaran.toString();
        keluaran = keluaran.replace(/null/g, "");
        document.getElementById("ipout").innerHTML = keluaran;
    };
    xhttp.send();
}