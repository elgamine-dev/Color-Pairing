var allInputs = $("input");

function changeButtonBackground(inputs){
	 var len = inputs.length;
	for (var i = 0; i < len; i++) {
		var couleurs = $(inputs[i]).data("color")
		$(inputs[i]).css("background-color", couleurs);
	}
}



function checked() {
	return $("#modify-texte").is(":checked")
}
$("input").click(function () {
	var i_ClickOnTheColour = $(this).data("color");
	if (checked()) {
		$("main").css('color', i_ClickOnTheColour)
	}
	else {
		$("body").css('background-color', i_ClickOnTheColour)
	};
});

changeButtonBackground(allInputs);
