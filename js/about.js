
$(document).ready(function(){
    $.getJSON("about.json", function(info){
        $.each(info, function() {
            $.each(this, function(key, value) {
                $("#info").append( 
                    "Info: " + value.info + "<br>" 
                );
            });
        }); 
    });
});