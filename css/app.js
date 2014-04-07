$(document).ready(function(){
	$('button').click(function(){
		item = $('#list-item').val();
		$("#listed-item").append('<div class="added-item"><img src = "img/deleted.png">'+item+'</div>');
			listItemClick();
			$(this).val("");
	});
	$("#list-item").keyup(function(e){
		if (e.which == 13) {
			item = $('#list-item').val();
			$("#listed-item").append('<div class="added-item"><img src = "img/deleted.png">'+item+'</div>');
			listItemClick();
			$(this).val("");
		}
	});
	listItemClick();
});

listItemClick = function(){
	$(".added-item").unbind("button");
	$(".added-item").unbind("click");
	$(".added-item").on('click', function(){
		if ($(this).hasClass("remove")){
			$(this).removeClass("remove").find("img").hide();
		}
		else{
			$(this).addClass("remove").find("img").show();
		}
	});
	$('img').unbind('click');
	$('img').on('click', function(){
		$(this).closest(".added-item").remove();
	});
}