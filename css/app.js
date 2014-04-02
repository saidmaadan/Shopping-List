$(document).ready(function() {
    $('#list-item, button').click(function() {
    	var toAdd = $("input[name=list-item]").val();
        $('#listed-item').append("<p>"+toAdd+"</p>");
    });
});