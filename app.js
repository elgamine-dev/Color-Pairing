var all_Inputs = $("input");
for (var i = 0; i < all_Inputs.length; i++) {
	var couleurs = $(all_Inputs[i]).data("color")
	$(all_Inputs[i]).css("background-color", couleurs);
}

function checked() {
	return $("#modify-texte").is(":checked")
};
$("input").click(function () {
	var i_ClickOnTheColour = $(this).data("color");
	if (checked()) {
		$("main").css('color', i_ClickOnTheColour)
	}
	else {
		$("body").css('background-color', i_ClickOnTheColour)
	};
});
