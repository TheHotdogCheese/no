addIngredient("Dwayne Johnson",{
    color:"#526752",
    shape:"sus",
    adj:"sussy",
    keywords:"the rock"
});

addIngredient("A Meaty Gyatt",{ //ID should be lowercase with underscores
    color:"#DE7E5D", //red
    type:"gyatt", ///type can be any other ingredient
    shape:"fruit_bi",
    hiddent: true
});

addIngredient("Gyatt",{
    shape:"fruit_bi",
    color:"#DE7E5D",
    adj:"rizzy",
    keywords:"yummy, sigma, dwayne",
    reactions: {
        meat: { set1:"A Meaty Gyatt" },
        water: {set1: "broth"}
    }
});
