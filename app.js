// good luck! ( merci )
var all_Inputs = $("input");
for (var i = 0; i < all_Inputs.length; i++) {
	var couleurs = $(all_Inputs[i]).data("color")
		// etape 2:  Un click sur le bouton doit mettre cette couleur en fond
	$(all_Inputs[i]).css("background-color", couleurs);
}
// Je nomme la function Checkoed
function checked() {
	return $("#modify-texte").is(":checked")
};
//  
$("input").click(function () {
	var i_ClickOnTheColour = $(this).data("color");
	if (checked()) {
		$("main").css('color', i_ClickOnTheColour)
	}
	else {
		$("body").css('background-color', i_ClickOnTheColour)
	};
});
// ±if plan A don't  work ther is  differents alphabets  in the word±  
//