$(document).ready(function () {

    var lst=new Array();
    
    lst=[{"Nombre":"GRIGIO TRAVOLGENTE MATT-$7,990.00","Precio":"$7,990.00","color":"#808080"},
         {"Nombre":"NERO CONVINTO MATT NV-$7,990.00","Precio":"$7,990.00","color":"black"}]
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