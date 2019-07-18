var domainwhois = function () {
    var ipinput = document.getElementById("ipin").value;
    xhttp.open("GET", "https://api.webcargo.io/whois?key=fmVstvwTrsXv31Sj0uG8mYhzsPtt4fos&identifier=" + ipinput);
    xhttp.onload = function () {
        var parsed = JSON.parse(xhttp.responseText);
        var i, pecah;
        var keluaran = "Nama: " + parsed.result.name + "<br>Tahun Pembuatan: " + parsed.result.created + "<br>Pembaruan Terakhir: " + parsed.result.changed + "<br>Kadaluarsa: " + parsed.result.expires + "<br>Status: ";
        if (parsed.result.status !== null) {
            for (i = 0; i < parsed.result.status.length; i++) {
                pecah = parsed.result.status[i];
                keluaran += "<br>&nbsp;&nbsp;&nbsp;&nbsp;<a href='"+ pecah.split(' ')[1] + "'>"+ pecah.split(' ')[0] + "</a>";
            }
        }else{keluaran += "null";}
        keluaran += "<br>Name Server";
        if (parsed.result.nameservers !== null) {
            for (i = 0; i < parsed.result.nameservers.length; i++) {
                keluaran+= "<br>&nbsp;&nbsp;&nbsp;&nbsp;"+parsed.result.nameservers[i];
            }
        }else {keluaran += "null";}
        keluaran += "<br>Kontak: ";
            if (parsed.result.contacts !== null) {
                if (parsed.result.contacts.owner[0] !== null) {
                    keluaran += "<br>Owner<br>Handle: " +parsed.result.contacts.owner[0].handle + "<br>Type: " + parsed.result.contacts.owner.type + "<br>Name: " + parsed.result.contacts.owner[0].name + "<br>Organization: " + parsed.result.contacts.owner[0].organization + "<br>email: " + parsed.result.contacts.owner[0].email + "<br>address: " + parsed.result.contacts.owner[0].address + "<br>zipcode: " + parsed.result.contacts.owner[0].zipcode + "city: " + parsed.result.contacts.owner[0].city + "<br>state: " + parsed.result.contacts.owner[0].state + "<br>country: "  + parsed.result.contacts.owner[0].country + "<br>phone: " + parsed.result.contacts.owner[0].phone + "<br>fax: " + parsed.result.contacts.owner[0].fax +"<br>created: " + parsed.result.contacts.owner[0].created +"<br>changed: " + parsed.result.contacts.owner[0].changed + "<br>languange: " + parsed.result.contacts.owner[0].languange;
                }
                if (parsed.result.contacts.admin[0] !== null) {
                    keluaran += "<br><br>Admin<br>Handle: " +parsed.result.contacts.admin[0].handle + "<br>Type: " + parsed.result.contacts.admin[0].type + "<br>Name: "+ parsed.result.contacts.admin[0].name + "<br>Organization: " + parsed.result.contacts.admin[0].organization + "<br>email: " + parsed.result.contacts.admin[0].email + "<br>address: " + parsed.result.contacts.admin[0].address + "<br>zipcode: " + parsed.result.contacts.admin[0].zipcode + "<br>city: " + parsed.result.contacts.admin[0].city + "<br>state: " + parsed.result.contacts.admin[0].state + "<br>country: "  + parsed.result.contacts.admin[0].country + "<br>phone: " + parsed.result.contacts.admin[0].phone + "<br>fax: " + parsed.result.contacts.admin[0].fax +"<br>created: " + parsed.result.contacts.admin[0].created +"<br>changed: " + parsed.result.contacts.admin[0].changed + "<br>languange: " + parsed.result.contacts.admin[0].languange; 
                }
                if (parsed.result.contacts.tech[0] !== null) {
                    keluaran += "<br><br>Tech<br>Handle: " +parsed.result.contacts.tech[0].handle + "<br>Type: " + parsed.result.contacts.tech[0].type + "<br>Name: "+ parsed.result.contacts.tech[0].name + "<br>Organization: " + parsed.result.contacts.tech[0].organization + "<br>email: " + parsed.result.contacts.tech[0].email + "<br>address: " + parsed.result.contacts.tech[0].address + "<br>zipcode: " + parsed.result.contacts.tech[0].zipcode + "<br>city: " + parsed.result.contacts.tech[0].city + "<br>state: " + parsed.result.contacts.tech[0].state + "<br>country: "  + parsed.result.contacts.tech[0].country + "<br>phone: " + parsed.result.contacts.tech[0].phone + "<br>fax: " + parsed.result.contacts.tech[0].fax +"<br>created: " + parsed.result.contacts.tech[0].created +"<br>changed: " + parsed.result.contacts.tech[0].changed + "<br>languange: " + parsed.result.contacts.tech[0].languange;
            }
        }
        else {keluaran += "null"; }

        keluaran += "<br><br>Registrar<br>Nama: " + parsed.result.registrar.name + "<br>ID: " + parsed.result.registrar.id + "<br>email: " + parsed.result.registrar.email + "<br>URL: " + parsed.result.registrar.url;
        keluaran = keluaran.toString();
        keluaran = keluaran.replace(/null/g, "");
        keluaran = keluaran.replace(/undefined/g, "");
        document.getElementById("ipout").innerHTML = keluaran;
    };
    xhttp.send();
}