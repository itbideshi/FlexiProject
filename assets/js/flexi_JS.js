(function($) {

	$.each(['show', 'hide'], function(i, ev) {
		var el = $.fn[ev];
		$.fn[ev] = function() {
			this.trigger(ev);
			return el.apply(this, arguments);
		};
	});

function custom_select(){
	$("select").each(function(){
		$(this).hide();
		$( "<span class='selectBox_container' /><ul class='options_container' />" ).insertAfter($(this));
		var options = $(this).siblings('.options_container');
		var selText = $(this).siblings('.selectBox_container');
		selText.html($(this).find('option:selected').text());
		var opt = $(this).children('option');
		for(var i=0; i<opt.length; i++){
			options.append('<li>'+opt[i].text+'</li>');
		}
		var selectedIndx = $(this).find('option:selected').index();
		$(this).siblings(".options_container").find("li").removeClass('selected').eq(selectedIndx).addClass('selected');

	});

	$("select").on('change', function(){
		var selText = $(this).siblings('.selectBox_container');
		selText.html($(this).find('option:selected').text());

		var selectedIndx = $(this).find('option:selected').index();
		$(this).siblings(".options_container").find("li").removeClass('selected').eq(selectedIndx).addClass('selected');

	});

	$('.selectBox_container').on('click', function(e){
		e.stopPropagation();
		$(this).toggleClass('opened').siblings(".options_container").toggle();
	});

	$("body").on('click', function(){
		$(".options_container:visible").hide(); 	
	});
	
	$(".options_container li").on("click", function(e){
		e.stopPropagation();
		var getIndex = $(this).index();
		console.log(getIndex);
		$(this).parent('ul').siblings('select').find('option').eq(getIndex).prop('selected', true).trigger('change');
		$(this).parent('ul').hide();
	});

	$(".options_container").on("show", function(){
		$(this).siblings(".selectBox_container").addClass("opened");
	});

	$(".options_container").on("hide", function(){
		$(this).siblings(".selectBox_container").removeClass("opened");
	});
};

custom_select();

}(jQuery));
