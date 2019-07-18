var domainwhois = function(){
    var ipinput = document.getElementById("ipin").value;
    xhttp.open("GET", "https://api.webcargo.io/whois?key=fmVstvwTrsXv31Sj0uG8mYhzsPtt4fos&identifier="+ ipinput);
    xhttp.onload = function(){
        var parsed = JSON.parse(xhttp.responseText);
        var keluaran = "Nama: " + parsed.result.name + "<br>Tahun Pembuatan: " + parsed.result.created + "<br>Pembaruan Terakhir: " + parsed.result.changed + "<br>Kadaluarsa: " + parsed.result.expires + "<br>Status: ";
        if(parsed.result.status != null){
            for(i = 0; i < parsed.result.status.length; i++){
                var pecah = parsed.result.status[i];
                keluaran+= "<br>&nbsp;&nbsp;&nbsp;&nbsp;<a href='"+ pecah.split(' ')[1] + "'>"+ pecah.split(' ')[0] + "</a>";
            };
        }else{keluaran += "null";};
        keluaran += "<br>Name Server"
        if(parsed.result.nameservers != null){
            for(i = 0; i < parsed.result.nameservers.length; i++){
                keluaran+= "<br>&nbsp;&nbsp;&nbsp;&nbsp;"+parsed.result.nameservers[i];
            };
        }else{keluaran += "null";};
        keluaran += "<br>Kontak: "
            if(parsed.result.contacts != null){
                if(parsed.result.contacts.owner != null){
                    keluaran += "<br><br>Handle: " +parsed.result.contacts.owner.handle + "<br><br>Type: " + parsed.result.contacts.owner.type + "<br><br>Name: " + parsed.result.contacts.owner.name "<br><br>Organization: " + parsed.result.contacts.owner.organization + "<br><br>email: " + parsed.result.contacts.owner.email + "<br><br>address: " + parsed.result.contacts.owner.address + "<br><br>zipcode: " + parsed.result.contacts.owner.zipcode + "<br><br>city: " + parsed.result.contacts.owner.city + "<br><br>state: " + parsed.result.contacts.owner.state + "<br><br>country: "  + parsed.result.contacts.owner.country + "<br><br>phone: " + parsed.result.contacts.owner.phone + "<br><br>fax: " + parsed.result.contacts.owner.fax +"<br><br>created: " + parsed.result.contacts.owner.created +"<br><br>changed: " + parsed.result.contacts.owner.changed + "<br><br>languange: " + parsed.result.contacts.owner.languange;
                }
                if(parsed.result.contacts.admin != null){
                    keluaran += "<br><br>Handle: " +parsed.result.contacts.admin.handle + "<br><br>Type: " + parsed.result.contacts.admin.type + "<br><br>Name: "+ parsed.result.contacts.admin.name "<br><br>Organization: " + parsed.result.contacts.admin.organization + "<br><br>email: " + parsed.result.contacts.admin.email + "<br><br>address: " + parsed.result.contacts.admin.address + "<br><br>zipcode: " + parsed.result.contacts.admin.zipcode + "<br><br>city: " + parsed.result.contacts.admin.city + "<br><br>state: " + parsed.result.contacts.admin.state + "<br><br>country: "  + parsed.result.contacts.admin.country + "<br><br>phone: " + parsed.result.contacts.admin.phone + "<br><br>fax: " + parsed.result.contacts.admin.fax +"<br><br>created: " + parsed.result.contacts.admin.created +"<br><br>changed: " + parsed.result.contacts.admin.changed + "<br><br>languange: " + parsed.result.contacts.admin.languange; 
                }
                if(parsed.result.contacts.tech != null){
                    keluaran += "<br><br>Handle: " +parsed.result.contacts.tech.handle + "<br><br>Type: " + parsed.result.contacts.tech.type + "<br><br>Name: "+ parsed.result.contacts.tech.name "<br><br>Organization: " + parsed.result.contacts.tech.organization + "<br><br>email: " + parsed.result.contacts.tech.email + "<br><br>address: " + parsed.result.contacts.tech.address + "<br><br>zipcode: " + parsed.result.contacts.tech.zipcode + "<br><br>city: " + parsed.result.contacts.tech.city + "<br><br>state: " + parsed.result.contacts.tech.state + "<br><br>country: "  + parsed.result.contacts.tech.country + "<br><br>phone: " + parsed.result.contacts.tech.phone + "<br><br>fax: " + parsed.result.contacts.tech.fax +"<br><br>created: " + parsed.result.contacts.tech.created +"<br><br>changed: " + parsed.result.contacts.tech.changed + "<br><br>languange: " + parsed.result.contacts.tech.languange; 
                }
            };
        }else{keluaran += "null";};

        keluaran += "<br><br>Registrar<br>Nama: " + parsed.result.registrar.name + "<br>ID: " +parsed.result.registrar.id + "<br>email: " + parsed.result.registrar.email + "<br>URL: " + parsed.result.registrar.url;
        keluaran = keluaran.toString();
        keluaran = keluaran.replace(/null/g, "");
        document.getElementById("ipout").innerHTML = keluaran;
    };
    xhttp.send();
}