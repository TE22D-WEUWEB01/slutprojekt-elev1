const GOATS = ["Daniel \" DC \" Cormier", "Jon Jones", "Islam Makhachev", "George St Pierre", "Jose \" Junior \" Aldo", "Demitrious \" Mighty Mouse \" Johnson", "Fedor \" The Last Emperor \" Emilianenko", "Stipe Miocic", "Alexander \" The Great \" Volkanowski", "Kamaru \" Nigerian Nightmare \" Usman", "Chael \" The Bad Guy \" Sonnen"]

// Genererar ett random element av arrayn
function Click() {
    var randomnum = Math.round(Math.random() * 10);

    document.getElementById("Result").innerHTML = GOATS[randomnum];
}
