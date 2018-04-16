


//var name = document.getElementById('field-nombre').value;
//var password = document.getElementById('field-contra').value;


function IsFill() {

    if (localStorage.getItem("username") !== "" && localStorage.getItem("pass") !== "")
    {
        document.getElementById('field-nombre').value = localStorage.username;
        document.getElementById('field-contra').value = localStorage.pass;
    }
    else 
    {
        document.getElementById('field-nombre').value = "";
        document.getElementById('field-contra').value = "";
    }

}
function lanzadera() {
    IsFill();
}

window.onload = lanzadera;


function Chequeo() {

    var name = document.getElementById('field-nombre').value;
    var password = document.getElementById('field-contra').value;

    var checkBox = document.getElementById("myCheck");

    if (checkBox.checked == true) {

        localStorage.username = name;
        localStorage.pass = password;


    } else {
        localStorage.username = "";
        localStorage.pass = "";

    }

}



window.addEventListener('load', carregado);

var db = openDatabase("myDB", "1.0", "TiPS Database Example", 2 * 1024 * 1024);



function carregado() {

    document.getElementById('btn-loguear').addEventListener('click', comprobar);

}

function comprobar() {

    var nombre = document.getElementById('field-nombre').value;
    var contrasenia = document.getElementById('field-contra').value;


    db.transaction(function (tx) {
        var j = 0;
        tx.executeSql('SELECT * FROM myTable', [], function (tx, resultado) {
            var rows = resultado.rows;
            for (var i = 0; i < rows.length; i++) {
                if (rows[i].nombre === nombre && rows[i].contrasenia === contrasenia)
                {
                    location.href = "index.html";
                } else
                {
                    j++;
                }
            }
            if (j === rows.length) {
                window.alert("¡Ninguna cuenta asociada! Verifque los datos introducidos");
            }
        }, null);
    });


}


