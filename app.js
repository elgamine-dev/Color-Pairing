// good luck! ( merci )
/*  etape préliminaire   npm install ( récup les dépendence dans le dossier )
/*## 1ere étape 
Les boutons doivent avoir leur fond de la couleur qui se trouve dans le
data attribute data-color*/
// Methode  des objets :
/*var obj = { propriété_1:   valeur_1,   // propriété_# peut être un identifiant
            2:             valeur_2,   // ou un nombre
            // ...,
            "propriété n": valeur_n }; // ou une chaîne*/
var all_Inputs = $("input");
for (var i = 0; i < all_Inputs.length; i++) {
	var couleurs = $(all_Inputs[i]).data("color")
		// etape 2:  Un click sur le bouton doit mettre cette couleur en fond
	$(all_Inputs[i]).css("background-color", couleurs);
}