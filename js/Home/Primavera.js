$(document).ready(function () {

    var lst_color_precio_primavera_150=new Array();
    
    lst_color_precio_primavera_150=[{"Nombre":"RED R7 (894)-$7,400.00","Precio":"$7,400.00","color":"red"},
         {"Nombre":"ARANCIO COLOR VIBE A11-$7,950.00","Precio":"$7,950.00","color":"#FFA500"},
         {"Nombre":"BIANCO COLOR VIBE B04-$7,950.00","Precio":"$7,950.00","color":"#fff"},
         {"Nombre":"BIANCO INNOCENTE BR (544)-$7,990.00","Precio":"$7,990.00","color":"#FFFFFF"},
         {"Nombre":"NERO CONVINTO GLOSSY XN2-$7,990.00","Precio":"$7,990.00","color":"black"},
         {"Nombre":"VERDE AMABILE VK (350/A)-$7,990.00","Precio":"$7,990.00","color":"green"},
         {"Nombre":"BLU ENERGICO DK (289/A)-$7,990.00","Precio":"$7,990.00","color":"blue"},
         {"Nombre":"GRIGIO DELICATO GLOSSY G01-$7,990.00","Precio":"$7,990.00","color":"#808080"}]
         lst_color_precio_primavera_150(lst_color_precio_primavera_150);
    
    });
    
    function lst_color_precio_primavera_150(registros) {
    
        var html = "";
        $("#lst_color_precio_primavera_150").empty();
        $.each(registros, function (d, a) {
            html += '<div class="col-lg-2 col-sm-6 mb-4" style="text-align: center;">';
            html += '        <div style="background: '+a.color+';height: 38px;width: 40px;border-radius: 29px;margin: 0 auto;border: 1px solid black;">';            
            html += '        </div>';
            html += '        <div>'+a.Nombre+'</div>';
            html += '    </div>';
    
        });
    
        $("#lst_color_precio_primavera_150").append(html);
    
    }