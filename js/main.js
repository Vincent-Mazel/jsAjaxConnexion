(function () {
    "use strict";
    $(document).ready(function () {
        $.ajax({
            url:"/json/est_connectee.php",
            method:"get"
        }).done(function (isConnecte) {
            if (isConnecte) {
                $('#deconnexion').attr("style", "");
            }
            else {
                $('#connexion').attr("style", "");
            }
        }).fail(function () {
            $('.body').html("Sainte-Mère de Dieu, il semblerait qu'une erreur ait survenue.");
        })
    })
}) ();