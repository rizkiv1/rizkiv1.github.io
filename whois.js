var domainwhois = function(){
    var ipinput = document.getElementById("ipin").value;
    xhttp.open("GET", "https://api.webcargo.io/whois?key=fmVstvwTrsXv31Sj0uG8mYhzsPtt4fos&identifier="+ ipinput);
    xhttp.onload = function(){
        var parsed = JSON.parse(xhttp.responseText);
        var keluaran = "Nama: " + parsed.result.name + "<br>Tahun Pembuatan: " + parsed.result.created + "<br>Pembaruan Terakhir: " + parsed.result.changed + "<br>Kadaluarsa: " + parsed.result.expires + "<br>Status: ";
        for(i = 0; i < parsed.result.status.length; i++){
            var pecah = parsed.result.status[i];
            keluaran+= "<br>&nbsp;&nbsp;&nbsp;&nbsp;<a href='"+ pecah.split(' ')[1] + "'>"+ pecah.split(' ')[0] + "</a>";
        };
        keluaran += "<br>Name Server"
        for(i = 0; i < parsed.result.nameservers.length; i++){
            keluaran+= "<br>&nbsp;&nbsp;&nbsp;&nbsp;"+parsed.result.nameservers[i];
        };
        keluaran += "<br>Kontak: "
        for(i = 0; i < parsed.result.contacts.length; i++){
            keluaran+= "&nbsp;&nbsp;"+parsed.result.contacts[i] + "<br>";
        };
        keluaran += "<br><br>Registrar<br>Nama: " + parsed.result.registrar.name + "<br>ID: " +parsed.result.registrar.id + "<br>email: " + parsed.result.registrar.email + "<br>URL: " + parsed.result.registrar.url;
        keluaran = keluaran.toString();
        keluaran = keluaran.replace(/null/g, "");
        document.getElementById("ipout").innerHTML = keluaran;
    };
    xhttp.send();
}