$(document).ready(function () {

    var lst=new Array();
    
    lst=[{"Nombre":"BEIGE AVVOLGENTE (Q01)-$10,100.00","Precio":"$10,100.00","color":"#f5f5dc"},
         {"Nombre":"NERO CONVINTO (XN2)-$10,100.00","Precio":"$10,100.00","color":"black"},
         {"Nombre":"VERDE AMABILE VK (350/A)-$10,100.00","Precio":"$10,100.00","color":"green"}]
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