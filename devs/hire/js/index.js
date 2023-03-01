window.onload = function() {
    var lang = navigator.language;
    lang = lang.split("-")[0];
    
    if (lang === "pt") {
        document.title = "Contrate-nos";
    } else if (lang === "es") {
        document.title = "Contratanos";
    }
}
