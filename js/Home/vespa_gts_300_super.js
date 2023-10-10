$(document).ready(function () {

    var lst=new Array();
    
    lst=[{"Nombre":"BIANCO INNOCENTE B04-$10,200.00","Precio":"$10,200.00","color":"#fff"},
         {"Nombre":"NERO DECISO 90 (94)-$10,200.00","Precio":"$10,200.00","color":"black"},
         {"Nombre":"ROSSO CORAGGIOSO R7 (894)-$10,200.00","Precio":"$10,200.00","color":"red"},
         {"Nombre":"GRIGIO TRAVOLGENTE HQ-$10,390.00","Precio":"$10,390.00","color":"#808080"},
         {"Nombre":"NERO CONVINTO NV-$10,390.00","Precio":"$10,390.00","color":"black"},
         {"Nombre":"BIANCO INNOCENZA BR (544)-$10,390.00","Precio":"$10,390.00","color":"#fff"},
         {"Nombre":"ARANCIO IMPULSIVO A11-$10,390.00","Precio":"$10,390.00","color":"orange"},
         {"Nombre":"VERDE AMBIZIOSO V03-$10,390.00","Precio":"$10,390.00","color":"green"}]
        f_lista_colores_precio(lst);
    
    });
    
    function f_lista_colores_precio(registros) {
    
        var html = "";
        $("#lst_color_precio").empty();
        $.each(registros, function (d, a) {
            html += '<div class="col-lg-2 col-sm-6 mb-4" style="text-align: center;">';
            html += '        <div style="background: '+a.color+';height: 38px;width: 40px;border-radius: 29px;margin: 0 auto;border: 1px solid black;">';            
            html += '        </div>';
            html += '        <div>'+a.Nombre+'</div>';
            html += '    </div>';
    
        });
    
        $("#lst_color_precio").append(html);
    
    }