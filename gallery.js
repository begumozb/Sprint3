var url =
"https://dog.ceo/api/breeds/image/random";
$.getJSON(url, function(data){
 var html = "";
 $.each(data, function(){
 html = "<img src=" + data.message + ">";
 console.log(data.message)
 });
 $("#a1").html(html);
}); 