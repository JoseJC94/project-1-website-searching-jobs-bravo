$(document).ready(function () {
    getTrabajosId(getUrlParameter('id'));
});

function getTrabajosId(id) {
    console.log("getTrabajosDesLoc");
    $.ajax({
        type: "GET",
        url: "https://jobs.github.com/positions.json",
        dataType: 'jsonp',
        success: function (data) {
            var json = data;
            jQuery.each(json, function (index, val ) {
                if(id === this.id){
                    $("#workName").text(this.title);
                    $("#workDesc").append(this.description);
                }
            });
        },
        error: function (data) {
            console.log("error ");
        }
    });
}

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};