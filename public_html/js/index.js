$(document).ready(function () {

});

function DameLaFechaHora() {
    var hora = new Date();
    var hrs = hora.getHours();
    var min = hora.getMinutes();
    var hoy = new Date();
    var m = new Array();
    var d = new Array();
    var an = hoy.getYear();
    m[0] = "Enero";
    m[1] = "Febrero";
    m[2] = "Marzo";
    m[3] = "Abril";
    m[4] = "Mayo";
    m[5] = "Junio";
    m[6] = "Julio";
    m[7] = "Agosto";
    m[8] = "Septiembre";
    m[9] = "Octubre";
    m[10] = "Noviembre";
    m[11] = "Diciembre";
    document.write("Visita realizada a las " + hrs + ":" + min + " (");
    document.write(hoy.getDate());
    document.write(" de ");
    document.write(m[hoy.getMonth()]);
    document.write(")");
}

function getTrabajosDesLoc() {
    console.log("getTrabajosDesLoc");
    $("#tableContent").remove();
    $.ajax({
        type: "GET",
        url: "https://jobs.github.com/positions.json",
        dataType: 'jsonp',
        data: "description=" + $("#trabajo").val() + "&location=" + $("#contrasena").val(),
        success: function (data) {
            var json = data;
            var content = "";
            console.log(Object.keys(json).length);
            jQuery.each(json, function (index, val ) {
                content = content + "<tbody id='tableContent'>";
                content = content + "<tr>";
                content = content + "<td>";
                content = content + "<h4><a href=\"trabajo.html?id=" + this.id +"\">" + (index + 1) + " " + this.title + "</a></h4>";
                content = content + "<p>";
                content = content + "<a href=\" "+ this.company_url +"\">" + this.company + "</a>";
                content = content + "&ndash;";
                content = content + "<strong >" + this.type + "</strong></p>";
                content = content + "</p>";
                content = content + "</td>";
                content = content + "<td>";
                content = content + "<span>" + this.location + "</span>";
                content = content + "&ndash;";
                content = content + "<span>" + this.created_at + "</span>";
                content = content + "</td>";
                content = content + "</tr>";
                content = content + "</tbody>";
            });
            $("#trabajoslist").append(content);
        },
        error: function (data) {
            console.log("error ");
        }
    });
}

