
$(document).ready(function(){
    $.getJSON("adoption.json", function(data){
        $.each(data, function() {
            $.each(this, function(key, value) {
                $("#info").append( 
                    "Info: " + value.info + "<br>" 
                );
            });
        }); 
    });
});