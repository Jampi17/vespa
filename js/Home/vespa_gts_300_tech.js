$(document).ready(function () {

    var lst=new Array();
    
    lst=[{"Nombre":"GRIGIO OTTIMISTA G22-$11,300.00","Precio":"$11,300.00","color":"#808080	"},
         {"Nombre":"GRIGIO ENTUSIASTA G23-$11,300.00","Precio":"$11,300.00","color":"#808080	"},
         {"Nombre":"BLU ENERGICO-$11,300.00","Precio":"$11,300.00","color":"blue"}]
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