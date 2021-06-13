
$(document).ready(function(){
    $.getJSON("adoption.json", function(info){
        $.each(info, function() {
            $.each(this, function(key, value) {
                $("#info").append( 
                    "info: " + value.info + "<br>" 
                );
            });
        }); 
    });
});