;(function(){
	var $team = $(".tab-nav ul li");
	var $teamMod = $(".tab-modal");


	$team.click(function(event) {
		var itemNum = $(this).index();
		$(this).addClass('on').siblings($team).removeClass('on');
		$teamMod.find(".tab-item").eq(itemNum).removeClass('hide').siblings($teamMod).addClass('hide');
	});

}());