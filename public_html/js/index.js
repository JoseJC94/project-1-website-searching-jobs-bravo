$(document).ready(function () {
    console.log("ready");
    consumirTrabajos();
});

function DameLaFechaHora() {
    var hora = new Date();
    var hrs = hora.getHours();
    var min = hora.getMinutes();
    var hoy = new Date();
    var m = new Array();
    var d = new Array();
    var an= hoy.getYear();
    m[0]="Enero";  m[1]="Febrero";  m[2]="Marzo";
    m[3]="Abril";   m[4]="Mayo";  m[5]="Junio";
    m[6]="Julio";    m[7]="Agosto";   m[8]="Septiembre";
    m[9]="Octubre";   m[10]="Noviembre"; m[11]="Diciembre";
    document.write("Visita realizada a las "+hrs+":"+min+" (");
    document.write(hoy.getDate());
    document.write(" de ");
    document.write(m[hoy.getMonth()]);
    document.write(")");
}

function consumirTrabajos() {
    console.log("consumirTrabajos");
    $.ajax({
        type: "GET",
        url: "https://jobs.github.com/positions.json",
        dataType: 'jsonp',
        success: function (data) {
            var json = data;
            console.log("data " + json);
            $("#trabajosContent").append("<label> " + JSON.stringify(json) + "</label>" );
        },
        error: function (data) {
            console.log("error ");
        }
    });
    
}