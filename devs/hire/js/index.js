window.onload = function() {
    var Lang = navigator.language;
    Lang = Lang.split("-")[0];
    
    if (Lang === "pt") {
        document.title = "Contrate-nos";
    } else if (Lang === "es") {
        document.title = "Contratanos";
    }
}
